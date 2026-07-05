"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="grid grid-cols-1 gap-14 rounded-3xl bg-ink px-8 py-14 text-white sm:px-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] text-white/45">CONTACT</span>
            <h2 className="mt-4 font-serif text-[36px] italic leading-[1.15] sm:text-[42px]">
              Get your fixed price today.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-white/60">
              Speak with our team, or use the AI Quote Calculator above to get an instant, fixed price
              for your move or rubbish removal — no obligation, no hidden fees.
            </p>

            <div className="mt-8 space-y-3 text-[14px] text-white/75">
              <div>
                <span className="text-white/45">Phone: </span>1300 022 733
              </div>
              <div>
                <span className="text-white/45">Email: </span>hello@residencerelocations.com.au
              </div>
              <div>
                <span className="text-white/45">Service area: </span>Brisbane &amp; Gold Coast, QLD
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                placeholder="Full name"
                className="rounded-lg bg-white/5 px-4 py-3 text-[13.5px] text-white outline-none ring-1 ring-white/10 placeholder:text-white/35 focus:ring-white/30"
              />
              <input
                placeholder="Phone number"
                className="rounded-lg bg-white/5 px-4 py-3 text-[13.5px] text-white outline-none ring-1 ring-white/10 placeholder:text-white/35 focus:ring-white/30"
              />
            </div>
            <input
              placeholder="Email address"
              type="email"
              className="w-full rounded-lg bg-white/5 px-4 py-3 text-[13.5px] text-white outline-none ring-1 ring-white/10 placeholder:text-white/35 focus:ring-white/30"
            />
            <textarea
              placeholder="Tell us about your move..."
              rows={4}
              className="w-full resize-none rounded-lg bg-white/5 px-4 py-3 text-[13.5px] text-white outline-none ring-1 ring-white/10 placeholder:text-white/35 focus:ring-white/30"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-white px-6 py-3.5 text-[13px] font-medium tracking-[0.06em] text-ink transition hover:bg-white/90"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
