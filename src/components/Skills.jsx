import {
  FiCode,
  FiServer,
  FiMonitor,
  FiDatabase,
  FiTool,
  FiCircle,
} from "react-icons/fi";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiSpring,
  SiJsonwebtokens,
  SiHibernate,
  SiJavascript,
  SiPython,
  SiC,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { MdApi, MdStorage, MdCloud } from "react-icons/md";

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
    skills: ["Spring Boot", "REST APIs", "Spring Security", "JPA", "Hibernate", "JWT"],
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

const skillIconMap = {
  "Spring Boot": <SiSpringboot size={22} className="text-emerald-500" />,
  "Spring Security": <SiSpringsecurity size={22} className="text-indigo-500" />,
  "Spring Data JPA": <MdStorage size={22} className="text-green-500" />,
  "Spring Cloud": <MdCloud size={22} className="text-sky-500" />,
  JWT: <SiJsonwebtokens size={22} className="text-purple-500" />,
  "JWT Authentication": <SiJsonwebtokens size={22} className="text-purple-500" />,
  "REST APIs": <MdApi size={22} className="text-sky-500" />,
  JPA: <MdStorage size={22} className="text-green-500" />,
  Java: <FaJava size={22} className="text-orange-500" />,
  JavaScript: <SiJavascript size={22} className="text-yellow-400" />,
  Python: <SiPython size={22} className="text-blue-400" />,
  C: <SiC size={22} className="text-gray-500" />,
  "React.js": <SiReact size={22} className="text-cyan-400" />,
  "Next.js": <SiNextdotjs size={22} className="text-gray-700 dark:text-gray-200" />,
  HTML: <SiHtml5 size={22} className="text-orange-500" />,
  CSS: <SiCss size={22} className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss size={22} className="text-sky-400" />,
  Bootstrap: <SiBootstrap size={22} className="text-purple-500" />,
  MySQL: <SiMysql size={22} className="text-blue-500" />,
  Git: <SiGit size={22} className="text-orange-500" />,
  GitHub: <SiGithub size={22} className="text-gray-700 dark:text-gray-200" />,
  "IntelliJ IDEA": <SiIntellijidea size={22} className="text-pink-500" />,
  "VS Code": <VscCode size={22} className="text-sky-500" />,
  Postman: <SiPostman size={22} className="text-orange-400" />,
  Hibernate: <SiHibernate size={22} className="text-amber-500" />,
  Spring: <SiSpring size={22} className="text-emerald-500" />,
};

const getSkillIcon = (skill) => skillIconMap[skill] || <FiCircle size={18} className="text-gray-400" />;

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
          {skillCategories.map((cat, catIndex) => (
            <div
              key={cat.title}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:scale-[1.04] float-soft"
            >
              <div className="flex items-center gap-2 mb-4">
                {cat.icon}
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-chip skill-float text-xs px-3 py-2 rounded-xl font-medium"
                    style={{ animationDelay: `${(catIndex * 6 + skillIndex) * 0.15}s` }}
                  >
                    <span className="skill-icon-wrap">
                      {getSkillIcon(skill)}
                      <span className="skill-icon-glow" />
                    </span>
                    <span
                      className={`text-center leading-tight transition-colors duration-300 ${
                        cat.highlights.includes(skill)
                          ? "text-purple-700 dark:text-purple-200"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {skill}
                    </span>
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
