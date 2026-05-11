import { FiBook } from "react-icons/fi";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Maulana Azad National Urdu University",
    period: "2021 → 2025",
    score: "CGPA 8.09",
    icon: "🎓",
  },
  {
    degree: "Intermediate in Science",
    institution: "Bihar Board",
    period: "2017 → 2019",
    score: "Percentage 74.8%",
    icon: "📘",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-slate-50 dark:bg-slate-950 section-animate overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-400/10" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-400/10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-300 mb-3">
            <span className="h-7 w-7 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center">
              <FiBook size={14} />
            </span>
            Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            A focused academic track
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-300 max-w-2xl">
            Clear milestones, strong fundamentals, and consistent performance across each phase.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/60 via-slate-200 to-transparent dark:via-slate-700 md:left-1/2 md:-translate-x-1/2" />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((e, index) => (
              <div
                key={e.degree}
                className={`relative ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}
              >
                <span className="absolute left-4 top-6 h-3 w-3 rounded-full bg-amber-500 shadow-[0_0_0_6px_rgba(251,191,36,0.2)] md:left-1/2 md:-translate-x-1/2" />
                <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md p-6 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.5)] hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-xl">
                        {e.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                          {e.degree}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-300">{e.institution}</p>
                      </div>
                    </div>
                    {e.period && (
                      <span className="text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-500/10 px-3 py-1 rounded-full">
                        {e.period}
                      </span>
                    )}
                  </div>
                  {e.score && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      {e.score}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
