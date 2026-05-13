import { contact } from '../data/manifesto';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-paper text-ink">
      <div className="mx-auto grid max-w-[82rem] gap-6 border-t border-ink/15 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16 lg:px-12">
        <h2 id="contact-title" className="text-sm font-semibold leading-5 text-[#D00A2E]">
          Contact
        </h2>
        <address className="not-italic">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex break-all text-xl font-medium leading-tight text-ink underline decoration-ink/35 underline-offset-8 outline-none transition-colors duration-300 hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ink sm:text-2xl"
          >
            {contact.email}
          </a>
        </address>
      </div>
    </section>
  );
}
