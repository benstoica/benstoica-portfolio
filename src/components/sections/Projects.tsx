import { BsGithub, BsGlobe } from "react-icons/bs";
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
            <div className="p-6 rounded-xl border border-white/10 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Interview Prep</h3>
                <p className="text-gray-400 mb-4">
                  A job interview preparation platform that helps you practice
                  your interview skills with real-time feedback. Built with
                  Next.js for the user interface and backend logic, Firebase for
                  authentication and data storage, styled with TailwindCSS and
                  using Vapi AI voice agents with Google Gemini.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "AI",
                      "Firebase",
                      "Google Gemini",
                      "Next.JS",
                      "React",
                      "shadcn/ui",
                      "Tailwind",
                      "TypeScript",
                      "Vapi",
                      "Zod",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6 ml-2 ">
                  <a
                    className="icon"
                    target="_blank"
                    href="https://github.com/benstoica/mock-interview"
                    rel="noreferrer">
                    <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:cursor-pointer text-white/90 hover:text-white" />
                  </a>
                  <a
                    className="icon"
                    target="_blank"
                    href="https://mock-interview-lilac-omega.vercel.app/"
                    rel="noreferrer">
                    <BsGlobe className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:cursor-pointer text-white/90 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Evolve Gym</h3>
                <p className="text-gray-400 mb-4">
                  A new type of gym, one that will help you reach your goals
                  like never before. Built with React and TypeScript, styled
                  with TailwindCSS.
                </p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Tailwind", "TypeScript", "Vite"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 ml-2">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/benstoica/gym-typescript"
                  rel="noreferrer">
                  <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:cursor-pointer text-white/90 hover:text-white" />
                </a>
                <a
                  className="icon"
                  target="_blank"
                  href="https://gym-typescript-eb0.pages.dev/"
                  rel="noreferrer">
                  <BsGlobe className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:cursor-pointer text-white/90 hover:text-white" />
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
