import { BsGithub, BsLinkedin } from "react-icons/bs";
import RevealOnScroll from "../RevealOnScroll";

const skills = [
  "Automation",
  "C#",
  "CSS",
  "Figma",
  "HTML",
  "Jest",
  "Next.JS",
  "NodeJS",
  "Playwright",
  "Postman",
  "Python",
  "React",
  "React Testing Library",
  "Responsive Design",
  "Selenium",
  "Storybook",
  "Tailwind",
  "Testing",
  "TypeScript",
];

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

            <div className="flex justify-center mb-6 gap-6">
              <a
                className="icon"
                target="_blank"
                href="https://github.com/benstoica"
                rel="noreferrer">
                <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:cursor-pointer text-white/90 hover:text-white" />
              </a>
              <a
                className="icon"
                target="_blank"
                href="https://github.com/benstoica"
                rel="noreferrer">
                <BsLinkedin className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:cursor-pointer text-blue-500 hover:text-white" />
              </a>
            </div>

            <div className="rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Full Stack Web Development Certification – Free Code Camp
                </li>
                <li>A.S. in Network Administration - DeVry University</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/benstoica/details/certifications/1635546100850/single-media-viewer/?profileId=ACoAABImNZQB1701Ks7Xu0629agzUEcyuD6ush4"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline">
                    Change Management – Oakland Community College{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/benstoica/certs/blob/master/Advanced%20HTML5%20%26%20CSS3%20Cert.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline">
                    Advanced HTML5 & CSS3 Specialist – CIW Advisory Council
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/benstoica/certs/blob/master/CIW%20User%20Interface%20Design%20Certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline">
                    CIW User Interface Designer – CIW Advisory Council
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.credly.com/badges/7ef5f327-8ab0-46c6-819e-dc32e949baa1/linked_in_profile"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline">
                    CompTIA Project+
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300 ">
                <div>
                  <h4 className="font-semibold">RPM Freight Systems</h4>
                  <p className="text-sm">Senior Software Engineer</p>
                </div>

                <div>
                  <h4 className="font-semibold">United Wholesale Mortgage</h4>
                  <p className="text-sm">UI Developer</p>
                </div>
                <div>
                  <h4 className="font-semibold">United Wholesale Mortgage</h4>
                  <p className="text-sm">Quality Assurance Engineer</p>
                </div>
                <div>
                  <h4 className="font-semibold">Advomas</h4>
                  <p className="text-sm">IT Support Technician</p>
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
