import { bodyCopyClassName } from './typography';

type StatementBlockProps = {
  children: string;
  muted?: boolean;
};

export function StatementBlock({ children, muted = false }: StatementBlockProps) {
  const tone = muted ? 'text-paper/78' : 'text-ink';

  return (
    <p
      className={`${bodyCopyClassName} ${tone}`}
    >
      {children}
    </p>
  );
}
