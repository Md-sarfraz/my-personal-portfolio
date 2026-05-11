export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

      <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-300/50 blur-3xl" />
      <div className="absolute top-16 -left-20 h-[360px] w-[360px] rounded-full bg-emerald-200/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/4 translate-y-1/4 rounded-full bg-fuchsia-200/60 blur-3xl" />

      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.35),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(circle_at_top,black,transparent_70%)]">
        <div className="h-full w-full bg-[linear-gradient(rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="absolute inset-y-0 left-10 w-px bg-gradient-to-b from-transparent via-slate-300/70 to-transparent" />
      <div className="absolute inset-y-0 right-16 w-px bg-gradient-to-b from-transparent via-slate-300/50 to-transparent" />
      <div className="absolute top-24 right-24 h-24 w-24 rounded-3xl border border-slate-300/60" />
    </div>
  );
}
