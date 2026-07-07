import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="grain relative -mt-[88px] flex min-h-[60vh] items-center overflow-hidden bg-ink pb-24 pt-[calc(6rem+88px)] text-white">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[760px] px-5 text-center sm:px-8">
          <p className="text-[11px] font-medium tracking-[0.22em] text-white/45">404 — PAGE NOT FOUND</p>
          <h1 className="mt-5 font-serif text-[38px] italic leading-[1.1] sm:text-[54px]">
            Looks like this page moved without telling us.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[15.5px] leading-relaxed text-white/65">
            The page you&apos;re after isn&apos;t here — but your quote is only 30 seconds away.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="btn-shine btn-shine-dark rounded-md bg-white px-8 py-4 text-[13px] font-medium tracking-[0.08em] text-ink transition-all duration-300 hover:-translate-y-0.5"
            >
              BACK TO HOME
            </Link>
            <Link
              href="/#quote"
              className="rounded-md px-8 py-4 text-[13px] font-medium tracking-[0.08em] text-white ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              GET A FIXED QUOTE
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
