import { bodyCopyClassName } from './typography';

type StatementBlockProps = {
  children: string;
  emphasized?: boolean;
  muted?: boolean;
};

export function StatementBlock({ children, emphasized = false, muted = false }: StatementBlockProps) {
  const tone = muted ? 'text-paper/78' : 'text-ink';
  const weight = emphasized ? 'font-semibold' : '';
  const brandName = '비바로연구소';
  const startsWithBrandName = children.startsWith(brandName);

  return (
    <p
      className={`${bodyCopyClassName} whitespace-pre-line ${weight} ${tone}`}
    >
      {startsWithBrandName ? (
        <>
          <strong className="font-semibold">{brandName}</strong>
          {children.slice(brandName.length)}
        </>
      ) : (
        children
      )}
    </p>
  );
}
