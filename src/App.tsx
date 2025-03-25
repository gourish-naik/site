import React from 'react';
import TiltedCard from './TiltedCard';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, Briefcase, User, Phone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const projects = [
    {
      title: "Marina Home",
      description: "A Home interior and luxury furniture providing e-commerce site built with PWA Studio and Magento2.",
      links: [{ name: "Marina Home", link: "http://marinahomeinteriors.com/" }],
      tech: ["React", "Redux", "Tailwind CSS", "SCSS"]
    },
    {
      title: "AL-FAKHER OOKA | Hookha-shisha | South Smoke",
      description: "Air Inhalation Ritual (AIR) is an Electrical hooka and flavorder hooka seller site in UAE,UK,USA built with Next.js and Magento2.",
      links: [{ name: "OOKA", link: "http://marinahomeinteriors.com/" }, { name: "Hookha-shisha", link: "https://www.hookah-shisha.com/" }, { name: "SouthSmoke", link: "https://www.southsmoke.com/" }],
      tech: ["TypeScript", "React", "Tailwind", "Redux", "SCSS"]
    },
    {
      title: "TGR Ventures Tiger one | Seedsman",
      description: "TGR ventures is an cannabies selling site among UK, USA and UAE, built with Scandi-PWA and Magento2.",
      links: [{ name: "Tiger-one", link: "https://www.tiger-one.com/us-en/" }, { name: "SeedsMan", link: "https://www.seedsman.com/us-en/" }],
      tech: ["React", "SCSS", "Redux"]
    }
  ];

  const skills = [
    "JavaScript", "HTML/CSS", "React", "Next.js", "Node.js",
    "Tailwind CSS", "TypeScript", "GraphQL", "Git", "Docker", "Figma", "Ruby"
  ];

  const experiences = [
    {
      company: "Dayspring Tecchnologies.",
      designation: "Software Engineer",
      role: "Frontend Developer",
      period: "2025 Jan - Present",
      description: "Frontend development for enterprise application."
    },
    {
      company: "Codilar Technologies Pvt. Ltd.",
      designation: "Software Engineer",
      role: "Frontend Developer",
      period: "2021 OCT - 2024 DEC",
      description: "Developed responsive web applications and mentored junior developers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">Gourishankar</span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:bg-white/10 rounded-md">About</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:bg-white/10 rounded-md">Experience</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:bg-white/10 rounded-md">Projects</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:bg-white/10 rounded-md">Skills</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:bg-white/10 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Frontend Developer
              <span className="block text-blue-400">Building Digital Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
              Crafting beautiful, responsive, and user-friendly web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-colors">
                Hire Me
              </a>
              <a href="#projects" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
                View Work
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10"></div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className="text-blue-400" />
            Work Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-blue-600">{exp.designation}</h3>
                <div className='flex flex-col gap-1'>
                  <div className="flex items-center"><span className='font-light text-orange-300 inline-block'>Role:</span><h4 className="text-base text-blue-400">{exp.role}</h4></div>
                  <div className="flex items-center"><span className='font-light text-orange-300 inline-block'>Company:</span><p className="text-gray-400">{exp.company} • {exp.period}</p></div>
                  <div className="flex items-center"><span className='font-light text-orange-300 inline-block'>Summary:</span><p className=" text-gray-300">{exp.description}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Code2 className="text-blue-400" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex gap-2'>
                  {project?.links.map((val, i) =>
                    <a href={val.link} key={i} className="inline-flex items-center text-blue-400 hover:text-blue-300">
                      {val.name} <ExternalLink size={16} className="ml-1" />
                    </a>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <User className="text-blue-400" />
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg px-6 py-3 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Phone className="text-blue-400" />
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-gray-300 mb-8">
                I'm currently available for freelance work and full-time positions.
                Let's build something amazing together!
              </p>
              <div className="space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 items-center w-fit cursor-pointer">
                  <Mail /> contact@example.com
                </a>
                <a href="https://github.com/gourish-naik" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 items-center w-fit cursor-pointer" target="_blank" rel="noopener noreferrer">
                  <Github size={24} /> gourish-naik
                </a>
                <a href="https://www.linkedin.com/in/i-gourish/" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 items-center w-fit cursor-pointer" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />i-gourish
                </a>

              </div>
            </div>
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="i-gourish cover"
              captionText="i-gourish"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  i-gourish
                </p>
              }
            />
            {/* <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-colors w-full">
                Send Message
              </button>
            </form> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Gourishankar. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;