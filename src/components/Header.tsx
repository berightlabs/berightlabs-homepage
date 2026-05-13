import { navigationItems } from '../data/navigation';

export function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-50 focus:bg-paper focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-ink"
      >
        본문으로 이동
      </a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-white px-5 py-5 text-ink sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[90rem] grid-cols-[1fr_auto] items-center gap-6">
          <a
            href="#top"
            aria-label="비바로연구소 홈"
            className="text-sm font-semibold leading-none outline-none transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ink"
          >
            비바로연구소
          </a>
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-xs font-bold leading-none text-ink sm:flex"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="outline-none transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
