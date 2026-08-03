import { StarIcon } from "@/components/icons";
import EmailCaptureForm from "./EmailCaptureForm";

export default function LeadHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#eaf4ee]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(142,240,184,0.45), transparent), linear-gradient(180deg, #eef7f1 0%, #eaf4ee 55%, #e2f0e7 100%)",
        }}
      />

      <a
        href="#top-form"
        className="relative z-10 block bg-[#8ef0b8] px-5 py-2.5 text-center text-[13px] font-medium text-[#0e1a14] transition-colors hover:bg-[#7ce6ab]"
      >
        LIMITED-TIME BONUS &nbsp;—&nbsp; Grab the free AI prompt pack when you download the blueprint this week
      </a>

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 pb-8 pt-16 text-center sm:px-8 sm:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-[13px] font-medium text-[#0e1a14]/70 ring-1 ring-black/5">
          <span className="flex gap-0.5 text-[#0e1a14]">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-3.5 w-3.5" />
            ))}
          </span>
          4.9/5 from 1,200+ founders
        </div>

        <h1 className="mx-auto max-w-[880px] text-[44px] font-extrabold leading-[1.03] tracking-[-0.02em] text-[#0e1a14] xs:text-[52px] sm:text-[68px] lg:text-[80px]">
          Stop guessing.
          <br />
          Start scaling.
        </h1>

        <p className="mx-auto mt-7 max-w-[560px] text-[17px] leading-relaxed text-[#0e1a14]/65 sm:text-[19px]">
          Get the free Growth Blueprint 12,400+ founders are using to find their next $10K month —
          no fluff, no upsells, just the playbook.
        </p>

        <div className="mt-10 flex justify-center">
          <EmailCaptureForm id="top-form" align="center" />
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[13px] font-medium text-[#0e1a14]/45">
          <span>12,400+ downloads</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#0e1a14]/25 sm:block" />
          <span>37 industries represented</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#0e1a14]/25 sm:block" />
          <span>Built by founders, for founders</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px] px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-25px_rgba(14,26,20,0.35)] ring-1 ring-black/5">
          <div className="flex items-center gap-2 border-b border-black/5 bg-[#f6faf7] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6459]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
            <span className="ml-3 truncate text-[12px] text-[#0e1a14]/40">growth-blueprint.pdf — Page 1 of 24</span>
          </div>
          <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-[1.1fr_1fr] sm:p-10">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0e1a14]/40">
                Inside the blueprint
              </div>
              <div className="mt-4 text-[26px] font-bold leading-tight text-[#0e1a14] sm:text-[30px]">
                Your next $10K month, mapped out.
              </div>
              <ul className="mt-6 space-y-3 text-left text-[14.5px] text-[#0e1a14]/70">
                {[
                  "The 3 offers that convert cold traffic fastest",
                  "A 30-day content-to-cash calendar",
                  "Email scripts that turn subscribers into buyers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#8ef0b8] text-[9px] text-[#0e1a14]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-[#eaf4ee] p-6">
              <div className="w-full space-y-2.5">
                {[92, 70, 84, 55, 78].map((w, i) => (
                  <div key={i} className="h-3 rounded-full bg-[#0e1a14]/10" style={{ width: `${w}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
