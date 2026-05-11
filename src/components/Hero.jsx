import { useEffect, useState } from "react";
import { FiDownload, FiGithub, FiLinkedin, FiTwitter, FiCodepen } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const codeSnippet = `const developer = {
  name: 'MD Sarfraz',
  role: 'Full Stack Developer',
  stack: [
    'Spring Boot',
    'React JS',
  ],
  skills: {
    backend: ['Spring Boot'],
    frontend: ['React JS'],
    focus: ['Spring (MVC)'],
    available: true
  }
};`;

const roles = ["React Developer", "Full Stack Developer", "Java Developer", "UI/UX Designer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const isComplete = typedText === currentRole;
    const isEmpty = typedText.length === 0;

    const speed = isDeleting ? 50 : 90;
    const pause = isComplete ? 900 : isEmpty ? 300 : 0;

    const timer = setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      const nextText = isDeleting
        ? currentRole.slice(0, typedText.length - 1)
        : currentRole.slice(0, typedText.length + 1);
      setTypedText(nextText);
    }, speed + pause);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen pt-14 flex items-center bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <img
          src="/dot-image1.png"
          alt=""
          aria-hidden="true"
          className="absolute left-4 top-6 w-24 opacity-35 sm:left-10 sm:top-8 sm:w-28"
        />
        <img
          src="/dot-image5.png"
          alt=""
          aria-hidden="true"
          className="absolute right-6 top-10 w-20 opacity-30 sm:right-12 sm:top-14 sm:w-24"
        />
        <img
          src="/dot-image6.png"
          alt=""
          aria-hidden="true"
          className="absolute left-10 bottom-10 w-28 opacity-30 sm:left-16 sm:bottom-16 sm:w-32"
        />
        <img
          src="/circle-image1.png"
          alt=""
          aria-hidden="true"
          className="absolute right-10 bottom-8 w-24 opacity-35 sm:right-16 sm:bottom-12 sm:w-28"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs text-purple-500 font-medium mb-3 tracking-widest uppercase">
              ✦ Available for opportunities
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-2">
              Hi, I'm <span className="text-purple-600">MD Sarfraz</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              I build as a{" "}
              <span className="text-purple-600 border-r-2 border-purple-600 pr-1 animate-pulse">
                {typedText}
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Full Stack Developer skilled in{" "}
              <span className="text-gray-700 font-medium">Spring Boot</span>,{" "}
              <span className="text-gray-700 font-medium">React</span> and{" "}
              <span className="text-gray-700 font-medium">MySQL</span>. I build
              secure, scalable, and high performance web applications.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-purple-600 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
              >
                View Projects →
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-6 py-3 rounded-full hover:border-purple-400 transition-colors"
              >
                <FiDownload size={14} /> Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 justify-center lg:justify-start text-gray-400">
              <a href="#" className="hover:text-purple-600 transition-colors"><FiGithub size={18} /></a>
              <a href="#" className="hover:text-purple-600 transition-colors"><FiLinkedin size={18} /></a>
              <a href="#" className="hover:text-purple-600 transition-colors"><FiCodepen size={18} /></a>
              <a href="#" className="hover:text-purple-600 transition-colors"><SiLeetcode size={18} /></a>
            </div>
          </div>

          {/* Right - Code Block */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-gray-400 text-xs">developer.js</span>
              </div>
              {/* Code */}
              <pre className="p-5 text-xs sm:text-sm leading-relaxed overflow-x-auto">
                <code>
                  {codeSnippet.split("\n").map((line, i) => (
                    <div key={i} className="whitespace-pre">
                      {line
                        .replace(/const|true/g, (m) => `\x00${m}\x00`)
                        .split("\x00")
                        .map((part, j) =>
                          part === "const" ? (
                            <span key={j} className="text-purple-400">{part}</span>
                          ) : part === "true" ? (
                            <span key={j} className="text-green-400">{part}</span>
                          ) : (
                            <span key={j} className="text-gray-300">{part}</span>
                          )
                        )}
                    </div>
                  ))}
                </code>
              </pre>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
