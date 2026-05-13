import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { HeroBackdrop } from './HeroBackdrop';
import { bodyCopyClassName } from './typography';

const headlineLines = ['더 적게 일하고,', '다음 판단에 집중합니다.'] as const;
const typingSpeed = 96;
const secondLineTypingSpeed = 76;
const initialDelay = 620;
const blinkInterval = 530;
const pauseForHalfBlink = blinkInterval;
const firstPauseCount = Array.from('더 ').length;
const firstLineCount = Array.from(headlineLines[0]).length;

function getTypingDelay(nextCount: number) {
  return nextCount > firstLineCount ? secondLineTypingSpeed : typingSpeed;
}

function getVisibleLines(lines: readonly string[], visibleCount: number) {
  let remaining = visibleCount;

  return lines.map((line) => {
    const characters = Array.from(line);
    const lineVisibleCount = Math.max(0, Math.min(characters.length, remaining));
    remaining -= characters.length;

    return characters.slice(0, lineVisibleCount).join('');
  });
}

export function Hero() {
  const totalCharacters = useMemo(
    () => headlineLines.reduce((total, line) => total + Array.from(line).length, 0),
    [],
  );
  const [visibleCount, setVisibleCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isCaretVisible, setIsCaretVisible] = useState(true);
  const visibleLines = getVisibleLines(headlineLines, visibleCount);
  const isWaitingToType = visibleCount === 0;

  useEffect(() => {
    setVisibleCount(0);
    setIsPaused(false);
    setIsCaretVisible(true);

    let timeout: number | undefined;
    const pauseTimeouts: number[] = [];
    const pauseAfter = new Map([
      [firstPauseCount, { blinks: 0.5, duration: pauseForHalfBlink }],
      [firstLineCount, { blinks: 0.5, duration: pauseForHalfBlink }],
    ]);

    const blinkDuringPause = (blinkCount: number) => {
      setIsCaretVisible(true);

      for (let step = 1; step <= blinkCount * 2; step += 1) {
        pauseTimeouts.push(
          window.setTimeout(() => {
            setIsCaretVisible(step % 2 === 0);
          }, step * blinkInterval),
        );
      }
    };

    const typeNext = (nextCount: number, delay: number) => {
      timeout = window.setTimeout(() => {
        setIsPaused(false);
        setIsCaretVisible(true);
        setVisibleCount(nextCount);

        if (nextCount >= totalCharacters) {
          return;
        }

        const pause = pauseAfter.get(nextCount);

        if (pause) {
          setIsPaused(true);
          blinkDuringPause(pause.blinks);
          typeNext(nextCount + 1, pause.duration);
          return;
        }

        typeNext(nextCount + 1, getTypingDelay(nextCount + 1));
      }, delay);
    };

    typeNext(1, initialDelay);

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }

      pauseTimeouts.forEach((pauseTimeout) => {
        window.clearTimeout(pauseTimeout);
      });
    };
  }, [totalCharacters]);

  useEffect(() => {
    const shouldBlink = isWaitingToType || visibleCount >= totalCharacters;

    if (!shouldBlink) {
      setIsCaretVisible(true);
      return undefined;
    }

    setIsCaretVisible(true);

    const interval = window.setInterval(() => {
      setIsCaretVisible((current) => !current);
    }, blinkInterval);

    return () => {
      window.clearInterval(interval);
    };
  }, [isWaitingToType, totalCharacters, visibleCount]);

  return (
    <section id="top" aria-labelledby="hero-title" className="bg-paper text-ink">
      <div className="relative min-h-[calc(92svh-5rem)] overflow-hidden bg-paper pt-14">
        <HeroBackdrop />
        <div className="relative z-10 mx-auto flex min-h-[calc(92svh-8.5rem)] w-full max-w-[82rem] flex-col px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12">
          <div className="mt-auto min-w-0 border-t border-transparent pb-12 pt-12">
            <h1
              id="hero-title"
              aria-label={headlineLines.join(' ')}
              className="keep-ko relative max-w-[12em] text-4xl font-semibold leading-[1.18] text-ink sm:text-[48px] sm:leading-[1.14] lg:text-[72px] lg:leading-[1.1]"
            >
              <span aria-hidden="true" className="invisible block">
                {headlineLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              <span aria-hidden="true" className="absolute inset-0 block">
                {visibleLines.map((line, index) => {
                  const previousLineCount = headlineLines
                    .slice(0, index)
                    .reduce((total, currentLine) => total + Array.from(currentLine).length, 0);
                  const currentLineEnd = headlineLines
                    .slice(0, index + 1)
                    .reduce((total, currentLine) => total + Array.from(currentLine).length, 0);
                  const isInitialCaret = visibleCount === 0 && index === 0;
                  const isActiveLine =
                    isInitialCaret ||
                    (visibleCount > previousLineCount && visibleCount <= currentLineEnd);
                  const shouldShowCaret =
                    isActiveLine || (visibleCount >= totalCharacters && index === headlineLines.length - 1);

                  return (
                    <span key={headlineLines[index]} className="block">
                      {line}
                      {shouldShowCaret ? (
                        <span
                          className="typing-caret"
                          style={{
                            opacity:
                              isWaitingToType || isPaused || visibleCount >= totalCharacters
                                ? isCaretVisible
                                  ? 1
                                  : 0
                                : 1,
                          }}
                        />
                      ) : null}
                    </span>
                  );
                })}
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-paper text-ink">
        <div className="mx-auto w-full max-w-[82rem] min-w-0 border-t border-transparent px-5 pb-10 pt-7 sm:px-8 sm:pb-12 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end"
          >
          <p className={`${bodyCopyClassName} text-graphite`}>
            비바로연구소는 반복 업무, 판단, 운영, 시스템 구축을 더 적은 노동으로 처리하는 방식을 검증하고,
            장기적으로는 인간의 개입을 최소화한 자율 운영 시스템을 지향합니다.
          </p>
          <p className="max-w-[15rem] text-xs leading-5 text-ash lg:justify-self-end lg:text-right">
            Independent lab for operating systems.
          </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
