import { FiCode, FiServer, FiMonitor, FiDatabase, FiTool } from "react-icons/fi";

const skillCategories = [
  {
    icon: <FiCode size={16} className="text-purple-500" />,
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "C"],
    highlights: [],
  },
  {
    icon: <FiServer size={16} className="text-purple-500" />,
    title: "Backend",
    skills: ["Spring Boot", "REST APIs", "Spring Security", "JPA / Hibernate", "JWT"],
    highlights: ["Spring Boot", "REST APIs"],
  },
  {
    icon: <FiMonitor size={16} className="text-purple-500" />,
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    highlights: ["Tailwind CSS"],
  },
  {
    icon: <FiDatabase size={16} className="text-purple-500" />,
    title: "Database",
    skills: ["MySQL"],
    highlights: [],
  },
  {
    icon: <FiTool size={16} className="text-purple-500" />,
    title: "Tools",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman"],
    highlights: [],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 section-animate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-purple-500 font-medium tracking-widest uppercase mb-2">✦ Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">My technical toolkit</h2>
          <p className="text-gray-400 dark:text-gray-300 text-sm">Technologies and tools I use to turn ideas into production.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                {cat.icon}
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      cat.highlights.includes(skill)
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200"
                        : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
