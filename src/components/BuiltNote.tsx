import { motion } from 'framer-motion';
import { methodContent } from '../data/manifesto';

export function BuiltNote() {
  return (
    <section aria-label="AI 제작 안내" className="bg-paper text-ink">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[82rem] border-t border-ink/15 px-5 py-8 text-center sm:px-8 lg:px-12"
      >
        <p className="keep-ko text-sm leading-6 text-ash sm:text-base sm:leading-7">
          {methodContent.builtBody}
        </p>
      </motion.div>
    </section>
  );
}
