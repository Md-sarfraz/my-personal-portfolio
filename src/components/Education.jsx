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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 section-animate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-purple-500 font-medium tracking-widest uppercase mb-2">
            ✦ Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">Learning never stops</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {education.map((e) => (
            <div key={e.degree} className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-5 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/40 flex items-center justify-center text-lg flex-shrink-0">
                {e.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-0.5">{e.degree}</h3>
                <p className="text-gray-400 dark:text-gray-300 text-xs mb-1">{e.institution}</p>
                {e.period && (
                  <p className="text-purple-500 text-xs font-medium">{e.period}</p>
                )}
                {e.score && (
                  <p className="text-gray-500 dark:text-gray-300 text-xs">{e.score}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
