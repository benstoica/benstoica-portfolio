import RevealOnScroll from "../RevealOnScroll";

const frontendSkills = ["React", "Next.JS", "TypeScript", "Tailwind"];
const backendSkills = ["Python", "NodeJS", "C#"];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border">
            <p className="text-gray-300 mb-6">
              I’ve always loved technology. I love solving complex problems,
              doing research and learning about new things. I love to create and
              my goal is to find a full-time position with a company creating
              cutting-edge software. I'm always self-teaching Software
              Development through several online courses. I look forward to
              developing my career and skill-set further in every role I take
              and I enjoy learning every facet of the development life cycle, as
              my long-term career goal is to become a Full Stack Developer. I am
              a fast, eager learner of new technologies and techniques; I'm
              constantly looking for new things to learn to increase my value to
              employers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    A.S. in Network Administration - DeVry University
                  </strong>
                </li>
                <li>Relevant Coursework: Web Development</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300 ">
                <div>
                  <h4 className="font-semibold">
                    RPM Freight Systems - Senior Software Engineer
                  </h4>
                  <p>Developed and maintined internal applications.</p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    United Wholesale Mortgage - UI Developer
                  </h4>
                  <p>Developed and maintined external websites.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
