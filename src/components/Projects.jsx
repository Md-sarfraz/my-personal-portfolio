import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";

const projects = [
  {
    title: "Movie Ticket Booking Application",
    type: "Full Stack",
    desc: "A production-grade BookMyShow-style platform with movie browsing, real-time seat selection, secure booking flow, and role-based access control. Built with a Spring Boot REST API backend and a React + Tailwind frontend.",
    image: "/ticketflix-project.png",
    features: [
      "Real-time seat selection & booking flow",
      "Role-based auth with JWT & Spring Security",
      "Relational schema and queries with MySQL with JPA / Hibernate",
      "Responsive React + Tailwind UI",
    ],
    tags: ["React.js", "TailwindCSS", "Java", "Spring Boot", "MySQL", "JWT"],
    liveUrl: "#",
    codeUrl: "#",
    gradient: "from-purple-500 to-indigo-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 section-animate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-purple-500 font-medium tracking-widest uppercase mb-2">✦ Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Featured work</h2>
          <p className="text-gray-400 text-sm">A selection of things I've built recently.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <span className="text-xs bg-purple-600 text-white px-4 py-1.5 rounded-full font-medium">
            Full Stack
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Card */}
          {projects.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              {/* Thumbnail */}
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className={`bg-gradient-to-br ${p.gradient} h-44 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg opacity-60 uppercase tracking-widest">
                    Full Stack
                  </span>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-base">{p.title}</h3>
                  <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{p.type}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{p.desc}</p>
                <ul className="text-xs text-gray-500 space-y-1 mb-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-1">
                      <span className="text-purple-400 mt-0.5">★</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.liveUrl}
                    className="flex items-center gap-1.5 bg-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
                  >
                    <FiExternalLink size={12} /> Live Demo
                  </a>
                  <a
                    href={p.codeUrl}
                    className="flex items-center gap-1.5 border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full hover:border-purple-400 transition-colors"
                  >
                    <FiGithub size={12} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col items-center justify-center p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-4">
              <FiStar size={24} className="text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">More projects coming soon</h3>
            <p className="text-gray-400 text-xs mb-5">Currently shipping. Check my GitHub for latest experiments.</p>
            <a
              href="#"
              className="flex items-center gap-2 border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full hover:border-purple-400 transition-colors"
            >
              <FiGithub size={12} /> View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
