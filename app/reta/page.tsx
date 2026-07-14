import type { Metadata } from "next";
import RetaNavbar from "@/components/reta/RetaNavbar";
import { VialGraphic, TargetGraphic, DropperGraphic } from "@/components/reta/Graphics";

export const metadata: Metadata = {
  title: "RETA Peptides | Science. Discipline. Transformation.",
  description:
    "Clinically studied peptides to support fat loss, metabolism, and peak performance. Third-party tested, research grade.",
};

const heroFeatures = [
  { title: "Clinical Grade", desc: "Pharma quality peptides" },
  { title: "Research Backed", desc: "Formulations based on real science" },
  { title: "Purity Tested", desc: "Third-party tested for purity & safety" },
];

const benefits = [
  "Enhanced Fat Loss",
  "Improved Metabolic Rate",
  "Appetite Regulation",
  "Lean Muscle Preservation",
  "Better Recovery",
];

const differenceCards = [
  {
    title: "Third-Party Tested",
    desc: "Every batch is tested for purity, potency, and endotoxin levels.",
  },
  {
    title: "Clinically Researched",
    desc: "Formulations backed by peer-reviewed studies and real-world results.",
  },
  {
    title: "Made In Certified Facilities",
    desc: "Manufactured in ISO certified, cGMP compliant laboratories.",
  },
  {
    title: "Secure & Discreet",
    desc: "Private checkout and discreet shipping worldwide.",
  },
];

const stats = [
  { value: "10K+", label: "Customers" },
  { value: "99%", label: "Satisfaction" },
  { value: "100%", label: "Transparency" },
];

export default function RetaPage() {
  return (
    <main className="bg-white">
      <RetaNavbar />

      {/* Hero */}
      <section className="mx-auto grid max-w-[1280px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="text-[12px] font-bold tracking-[0.2em] text-[#0e1e3d]">RETA PEPTIDES</p>
          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-[#0e1e3d] sm:text-5xl md:text-6xl">
            SCIENCE.
            <br />
            DISCIPLINE.
            <br />
            TRANSFORMATION.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-base">
            Clinically studied peptides to support fat loss, metabolism, and peak performance.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 xs:grid-cols-3">
            {heroFeatures.map((f) => (
              <div key={f.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-[#0e1e3d]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <p className="mt-3 text-[13px] font-bold tracking-wide text-[#0e1e3d]">{f.title}</p>
                <p className="mt-1 text-[12.5px] leading-snug text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#peptides"
              className="w-full rounded-md bg-[#0e1e3d] px-7 py-3.5 text-center text-[13px] font-bold tracking-wide text-white transition hover:bg-[#16294f] sm:w-auto"
            >
              SHOP PEPTIDES
            </a>
            <a
              href="#science"
              className="w-full rounded-md border border-slate-300 px-7 py-3.5 text-center text-[13px] font-bold tracking-wide text-[#0e1e3d] transition hover:border-[#0e1e3d] sm:w-auto"
            >
              LEARN THE SCIENCE
            </a>
          </div>
        </div>

        <div className="order-first lg:order-last">
          <VialGraphic />
        </div>
      </section>

      {/* Target fat / preserve muscle */}
      <section className="bg-[#0e1e3d] py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              TARGET FAT.
              <br />
              PRESERVE MUSCLE.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-white/70">
              RETA peptides work at a cellular level to enhance metabolism, increase lipolysis, and support a
              leaner you.
            </p>
            <ul className="mt-7 flex flex-col gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[14px] text-white/90">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0 text-orange-400"
                  >
                    <path d="M5 12l5 5L20 6" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-first lg:order-last">
            <TargetGraphic />
          </div>
        </div>
      </section>

      {/* The RETA difference */}
      <section id="science" className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <p className="text-[12px] font-bold tracking-[0.2em] text-[#0e1e3d]">THE RETA DIFFERENCE</p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0e1e3d] sm:text-3xl md:text-4xl">
            CLINICAL. TRANSPARENT. TRUSTED.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-slate-600">
            We are committed to providing the highest quality peptides with complete transparency and zero
            compromise.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1280px] grid-cols-1 gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {differenceCards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-[#0e1e3d]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" />
                </svg>
              </div>
              <p className="mt-4 text-[13.5px] font-bold tracking-wide text-[#0e1e3d]">{c.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Backed by science */}
      <section id="results" className="bg-[#0a1730] py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <DropperGraphic />
          <div>
            <p className="text-[12px] font-bold tracking-[0.2em] text-orange-400">BACKED BY SCIENCE</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
              PEPTIDES THAT WORK
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-white/70">
              Our peptides are selected for their proven ability to support fat loss, metabolic function, and
              performance.
            </p>

            <div className="mt-8 grid grid-cols-3 divide-x divide-white/10">
              {stats.map((s) => (
                <div key={s.label} className="px-3 text-center first:pl-0 sm:text-left sm:first:pl-0">
                  <p className="text-2xl font-black text-white sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-[11px] tracking-wide text-white/60 sm:text-[12px]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#0e1e3d] py-10">
        <div className="mx-auto max-w-[1280px] px-5 text-center text-[12px] text-white/50 sm:px-8">
          © {new Date().getFullYear()} RETA Peptides. Research use only. Not for human consumption.
        </div>
      </footer>
    </main>
  );
}
