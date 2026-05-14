import { motion } from 'framer-motion';
import { methodContent } from '../data/manifesto';
import { Section } from './Section';

export function Method() {
  return (
    <Section
      id="method"
      label="Method"
      number={methodContent.number}
      title={methodContent.title}
    >
      <div className="space-y-12 sm:space-y-16">
        <ol className="space-y-3">
          {methodContent.process.map((line, index) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.56,
                delay: index * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-4 sm:grid-cols-[3rem_minmax(0,1fr)]"
            >
              <span className="text-sm font-semibold leading-7 text-ash">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="keep-ko text-xl leading-7 text-ink sm:text-[28px] sm:leading-[1.2] lg:text-[32px]">
                {line}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
