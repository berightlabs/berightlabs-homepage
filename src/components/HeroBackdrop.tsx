const heroImage = '/images/hero-children-balloons-edited.jpg';

export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-paper">
      <div className="absolute inset-x-0 bottom-0 top-14 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto h-full w-full max-w-[90rem]">
          <div className="relative h-full overflow-hidden bg-paper">
            <img
              src={heroImage}
              alt=""
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-[55%_42%] contrast-[0.92] brightness-[1.08]"
            />
            <div className="absolute inset-0 bg-paper/54 mix-blend-lighten" />
            <div className="absolute inset-0 bg-paper/12" />
            <div className="absolute inset-x-0 bottom-0 top-[38%] bg-paper/48" />
            <div className="hero-bright-grain absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
