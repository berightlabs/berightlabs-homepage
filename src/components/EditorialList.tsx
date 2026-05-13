import { motion } from 'framer-motion';
import { bodyCopyClassName } from './typography';

export type EditorialListItem = {
  id: string;
  number?: string;
  code?: string;
  title: string;
  description: string;
};

type EditorialListProps = {
  items: readonly EditorialListItem[];
  variant?: 'numbered' | 'coded';
};

export function EditorialList({ items, variant = 'numbered' }: EditorialListProps) {
  return (
    <div className="grid auto-rows-fr border-t border-ink/25">
      {items.map((item, index) => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.56,
            delay: index * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid min-w-0 content-start gap-4 border-b border-ink/16 py-7 sm:py-8 lg:grid-cols-[5rem_minmax(13rem,0.44fr)_minmax(0,1fr)] lg:gap-8"
        >
          <span className="text-sm font-semibold leading-7 text-ash">
            {variant === 'coded' ? item.code : item.number}
          </span>
          <h3 className="keep-ko text-xl font-semibold leading-7 text-ink sm:text-2xl sm:leading-8">
            {item.title}
          </h3>
          <p className={`${bodyCopyClassName} text-graphite`}>
            {item.description}
          </p>
        </motion.article>
      ))}
    </div>
  );
}
