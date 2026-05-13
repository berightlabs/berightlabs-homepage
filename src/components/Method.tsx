import { motion } from 'framer-motion';
import { methodContent } from '../data/manifesto';
import { Section } from './Section';
import { bodyCopyClassName } from './typography';

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
              <p className="keep-ko text-xl font-semibold leading-7 text-ink sm:text-3xl sm:leading-[1.2] lg:text-4xl">
                {line}
              </p>
            </motion.li>
          ))}
        </ol>

        <div>
          <p className={`${bodyCopyClassName} text-graphite`}>
            {methodContent.statement}
          </p>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-ink/16 pt-8"
        >
          <h3 className="max-w-2xl text-xl font-semibold leading-8 text-ink sm:text-2xl sm:leading-9">
            {methodContent.builtTitle}
          </h3>
          <p className={`${bodyCopyClassName} mt-5 text-graphite`}>
            {methodContent.builtBody}
          </p>
        </motion.aside>
      </div>
    </Section>
  );
}
