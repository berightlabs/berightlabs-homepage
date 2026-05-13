import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  id: string;
  label: string;
  number: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
};

export function Section({ id, label, number, title, children, dark = false }: SectionProps) {
  const sectionTone = dark
    ? 'border-paper/15 bg-ink text-paper'
    : 'border-ink/15 bg-paper text-ink';
  const numberTone = dark ? 'text-paper/50' : 'text-ash';
  const ruleTone = dark ? 'border-paper/18' : 'border-ink/16';
  const hasManualTitleBreak = title.includes('\n');
  const titleClassName = hasManualTitleBreak
    ? 'keep-ko max-w-none text-3xl font-semibold leading-[1.18] text-current sm:text-5xl sm:leading-[1.14] lg:text-6xl lg:leading-[1.12]'
    : 'keep-ko max-w-[14ch] text-4xl font-semibold leading-[1.16] text-current sm:text-5xl sm:leading-[1.12] lg:text-6xl lg:leading-[1.1]';

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`border-b ${sectionTone}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid w-full max-w-[82rem] gap-10 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16 lg:px-12 lg:py-36"
      >
        <div className={`min-w-0 border-t pt-4 ${ruleTone}`}>
          <p className={`text-xs font-semibold leading-5 ${numberTone}`}>{number}</p>
          <p className="mt-10 text-sm font-semibold leading-5 text-[#D00A2E]">{label}</p>
        </div>

        <div className={`min-w-0 border-t pt-4 ${ruleTone}`}>
          <h2
            id={`${id}-title`}
            className={titleClassName}
          >
            {title.split('\n').map((line) => (
              <span key={line} className={hasManualTitleBreak ? 'block whitespace-nowrap' : 'block'}>
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-12 sm:mt-16">{children}</div>
        </div>
      </motion.div>
    </section>
  );
}
