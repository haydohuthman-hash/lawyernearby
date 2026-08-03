import { SparkleIcon, TagIcon, CalendarIcon, KeyIcon } from "@/components/icons";

const items = [
  {
    icon: TagIcon,
    title: "The offer stack",
    body: "The 3 offer structures that consistently convert cold traffic — with real numbers, not theory.",
  },
  {
    icon: CalendarIcon,
    title: "30-day content calendar",
    body: "A day-by-day plan that turns content into pipeline, so you never stare at a blank page again.",
  },
  {
    icon: KeyIcon,
    title: "Email scripts that sell",
    body: "Five plug-and-play email sequences for launching, nurturing, and closing without sounding salesy.",
  },
  {
    icon: SparkleIcon,
    title: "AI prompt pack",
    body: "20 prompts we use to write, research, and plan faster — this week's bonus for new subscribers.",
  },
];

export default function WhatsInside() {
  return (
    <section id="whats-inside" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0e1a14]/40">
            What&rsquo;s inside
          </div>
          <h2 className="mt-4 text-[32px] font-extrabold leading-tight tracking-[-0.01em] text-[#0e1a14] sm:text-[42px]">
            Everything you need. Nothing you don&rsquo;t.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#f6faf7] p-6 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8ef0b8]">
                <item.icon className="h-5 w-5 text-[#0e1a14]" />
              </span>
              <div className="mt-5 text-[15.5px] font-semibold text-[#0e1a14]">{item.title}</div>
              <div className="mt-2 text-[13.5px] leading-relaxed text-[#0e1a14]/60">{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
