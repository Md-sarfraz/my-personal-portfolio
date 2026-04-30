import { useEffect, useState } from "react";
import { FiSun, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const links = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = saved || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 dark:bg-gray-950/90 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">MD</div>
          <span className="font-semibold text-sm text-gray-800 dark:text-gray-100">Sarfraz</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`hover:text-purple-600 transition-colors ${link === "Home" ? "text-purple-600 font-medium" : ""}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <FiSun size={16} />
          </button>
          <a
            href="#contact"
            className="hidden md:inline-block bg-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            Hire Me 👋
          </a>
          <button className="md:hidden text-gray-600 dark:text-gray-300" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 dark:bg-gray-950 dark:border-gray-800">
          <ul className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-purple-600 transition-colors block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block bg-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-full mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me 👋
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
