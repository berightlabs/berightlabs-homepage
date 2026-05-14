import { contact } from '../data/manifesto';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-paper text-ink">
      <div className="mx-auto grid max-w-[82rem] gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16 lg:px-12">
        <div className="border-t border-ink/16 pt-4">
          <p className="text-xs font-semibold leading-5 text-ash">{contact.number}</p>
          <h2 id="contact-title" className="mt-10 text-sm font-semibold leading-5 text-[#D00A2E]">
            Contact
          </h2>
        </div>
        <div className="space-y-7 border-t border-ink/16 pt-4">
          <address className="not-italic">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex break-all text-2xl font-semibold leading-tight text-ink outline-none transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ink sm:text-3xl"
            >
              {contact.email}
            </a>
          </address>

          <ul className="grid gap-3 text-base leading-7 text-graphite sm:text-xl sm:leading-9">
            {contact.channels.map((channel) => (
              <li key={channel}>{channel}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
