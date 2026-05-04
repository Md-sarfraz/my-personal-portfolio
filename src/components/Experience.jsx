export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950 section-animate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-purple-500 font-medium tracking-widest uppercase mb-2">✦ Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">Where I've worked</h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-purple-100 dark:bg-purple-900/40"></div>

          <div className="pl-12 relative">
            {/* Dot */}
            <div className="absolute left-[13px] top-1 w-3 h-3 rounded-full bg-purple-500 border-2 border-white dark:border-gray-900 shadow"></div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 float-soft">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">Software Developer Intern</h3>
                <span className="text-xs text-gray-400 dark:text-gray-300 mt-1 sm:mt-0">June 2025 → Nov 2025</span>
              </div>
              <p className="text-purple-600 text-xs font-medium mb-4">
                Foxfire Corp · Remote
              </p>
              <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">•</span>
                  Built core modules in a Student Management System among multiple user roles.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">•</span>
                  Implemented role-based access control using JWT and Spring Security.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">•</span>
                  Wrote and maintained production API endpoints with Spring Boot.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">•</span>
                  Modelled relational schemas and queries with MySQL with JPA / Hibernate.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">•</span>
                  Collaborated through Git-based team workflows with code reviews.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
