import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-2">Interview Prep</h3>
              <p className="text-gray-400 mb-4">
                A job interview preparation platform that helps you practice
                your interview skills with real-time feedback. Built with
                Next.js for the user interface and backend logic, Firebase for
                authentication and data storage, styled with TailwindCSS and
                using Vapi AI voice agents with Google Gemini.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Next.JS",
                  "React",
                  "Firebase",
                  "Tailwind",
                  "Vapi",
                  "AI",
                  "Google Gemini",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  href="https://mock-interview-lilac-omega.vercel.app/"
                  rel="noreferrer">
                  View Project{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-2">Interview Prep</h3>
              <p className="text-gray-400 mb-4">
                A job interview preparation platform that helps you practice
                your interview skills with real-time feedback. Built with
                Next.js for the user interface and backend logic, Firebase for
                authentication and data storage, styled with TailwindCSS and
                using Vapi AI voice agents with Google Gemini.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Next.JS",
                  "React",
                  "Firebase",
                  "Tailwind",
                  "Vapi",
                  "AI",
                  "Google Gemini",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  href="https://mock-interview-lilac-omega.vercel.app/"
                  rel="noreferrer">
                  View Project{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
