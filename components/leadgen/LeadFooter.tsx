export default function LeadFooter() {
  return (
    <footer className="bg-[#0e1a14] py-10 text-center">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="flex items-center justify-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[13px] font-bold text-white">
            N
          </span>
          <span className="text-[15px] font-bold text-white">Northbound</span>
        </div>
        <p className="mt-4 text-[12.5px] text-white/40">
          © {new Date().getFullYear()} Northbound. Not affiliated with any bank, investment advisor, or accountant —
          general information only, not financial advice.
        </p>
      </div>
    </footer>
  );
}
