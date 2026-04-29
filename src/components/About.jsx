import { FiServer, FiMonitor, FiDatabase, FiUsers } from "react-icons/fi";

const cards = [
  {
    icon: <FiServer size={20} className="text-purple-500" />,
    title: "Backend Specialist",
    desc: "Spring Boot, REST APIs, Spring Security for production-grade services.",
    bg: "bg-purple-50",
  },
  {
    icon: <FiMonitor size={20} className="text-indigo-500" />,
    title: "Frontend Craft",
    desc: "React + Tailwind with clean architecture are delightful UI experiences.",
    bg: "bg-indigo-50",
  },
  {
    icon: <FiDatabase size={20} className="text-pink-500" />,
    title: "Database Design",
    desc: "MySQL schemas, JPA Hibernate, indexing & query optimisation.",
    bg: "bg-pink-50",
  },
  {
    icon: <FiUsers size={20} className="text-green-500" />,
    title: "Team Collaboration",
    desc: "Git-based workflows, code reviews, CI-friendly practices.",
    bg: "bg-green-50",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 section-animate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs text-purple-500 font-medium tracking-widest uppercase mb-2">✦ About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Crafting software with intent
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Full Stack Developer with strong experience in Java, Spring Boot, React, and REST APIs. I focus
            on building secure, scalable and user-friendly applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {cards.map((card) => (
            <div key={card.title} className={`${card.bg} rounded-xl p-5 flex items-start gap-4`}>
              <div className="mt-1">{card.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
