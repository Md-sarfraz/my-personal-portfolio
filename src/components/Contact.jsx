import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950 section-animate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        {/* <div className="text-center mb-14">
          <p className="text-xs text-purple-500 font-medium tracking-widest uppercase mb-2">✦ Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Let's build something great</h2>
          <p className="text-gray-400 text-sm">Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div> */}

        {/* GitHub Card */}
  

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left - Get in touch */}
          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-5">Get in touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-900/40 flex items-center justify-center">
                  <FiMail size={14} className="text-purple-500" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">mdsarfraz62070@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-900/40 flex items-center justify-center">
                  <FiPhone size={14} className="text-purple-500" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">+91-6203800630</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-900/40 flex items-center justify-center">
                  <FiMapPin size={14} className="text-purple-500" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Hyderabad, India</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/Md-sarfraz"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-400 transition-colors"
              >
                <FiGithub size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-sarfraz786/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-400 transition-colors"
              >
                <FiLinkedin size={14} />
              </a>
              <a
                href="https://leetcode.com/u/Md_Sarfraz123/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-400 transition-colors"
              >
                <SiLeetcode size={14} />
              </a>
            </div>
          </div>

          {/* Right - Send a message */}
          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-5">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-700 dark:text-gray-100 dark:bg-gray-900 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-700 dark:text-gray-100 dark:bg-gray-900 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-300 mb-1">Tell me about your project</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-700 dark:text-gray-100 dark:bg-gray-900 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-semibold text-sm py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
