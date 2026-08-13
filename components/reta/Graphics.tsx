export function VialGraphic() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-56 w-56 rounded-full bg-blue-200/40 blur-3xl sm:h-72 sm:w-72" />
      <div className="relative flex w-40 flex-col items-center rounded-3xl border border-slate-200 bg-white/90 p-3 shadow-[0_30px_60px_-15px_rgba(14,30,61,0.35)] sm:w-48">
        <div className="h-4 w-14 rounded-t-md bg-[#0e1e3d] sm:h-5 sm:w-16" />
        <div className="h-2 w-16 bg-slate-300 sm:w-20" />
        <div className="flex w-full flex-col gap-2 rounded-2xl bg-white px-3 py-4 text-center">
          <span className="text-lg font-black tracking-tight text-[#0e1e3d] sm:text-xl">RETA</span>
          <span className="-mt-2 text-[7px] font-semibold tracking-[0.3em] text-slate-500">PEPTIDES</span>
          <span className="mt-1 rounded-md bg-[#0e1e3d] py-1.5 text-[11px] font-bold text-white sm:text-xs">
            RETA-10
          </span>
          <span className="text-[10px] font-semibold text-slate-600">10MG</span>
          <span className="text-[7px] tracking-wide text-slate-400">RESEARCH USE ONLY</span>
        </div>
        <div className="h-24 w-full rounded-b-2xl bg-gradient-to-b from-transparent to-slate-100 sm:h-28" />
      </div>
    </div>
  );
}

export function TargetGraphic() {
  return (
    <div className="relative flex items-center justify-center py-10">
      <div className="absolute h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-orange-400/30"
          style={{ height: `${140 + i * 60}px`, width: `${140 + i * 60}px` }}
        />
      ))}
      <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_0_50px_10px_rgba(251,146,60,0.35)]" />
    </div>
  );
}

export function DropperGraphic() {
  return (
    <div className="relative flex items-center justify-center py-6">
      <div className="absolute h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="relative flex flex-col items-center">
        <div className="h-16 w-3 rounded-t-full bg-slate-500/70" />
        <div className="h-2 w-8 rounded-sm bg-slate-400/70" />
        <div className="h-1 w-1 rounded-full bg-blue-300" />
        <div className="mt-1 h-10 w-10 rounded-full border border-blue-300/40 bg-blue-500/10" />
      </div>
    </div>
  );
}
