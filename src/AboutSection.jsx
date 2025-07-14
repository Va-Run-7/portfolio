import { Mail, Phone, Linkedin } from "lucide-react"
import { MessageCircle } from "lucide-react" // WhatsApp icon
import FadeInSection from "./FadeInSection"

export default function AboutSection() {
  return (
    <section id="about" className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div>
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">
            <span className="inline-block border-b-4 border-green-200 pb-2 px-4 bg-green-50 rounded-lg animate-pulse">About Me</span>
          </h2>
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-28 items-center">
          {/* Left: Bio and What I Do */}
          <FadeInSection delay={100}>
            <div className="bg-green-50/60 border-l-4 border-green-200 rounded-xl p-8 shadow-sm animate-fade-in-up">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg animate-fade-in-up animation-delay-200">
                Hi! I'm <span className="font-bold text-green-700">Varun M S</span>, a passionate <span className="font-semibold text-green-700">Full-Stack Software Engineer</span> based in Bangalore. I love building scalable, user-centric web applications and solving real-world problems with code.
              </p>
              <FadeInSection delay={200}>
                <ul className="list-disc list-inside text-gray-700 text-base space-y-2 mb-6 animate-fade-in-up animation-delay-300">
                  <li>🌱 Always learning new technologies and best practices</li>
                  <li>🚀 Focused on performance, accessibility, and clean code</li>
                  <li>🤝 Enjoy collaborating in cross-functional teams</li>
                  <li>🧑‍💻 Experienced with React.js, Node.js, AWS, and modern cloud stacks</li>
                  <li>🎨 Love UI/UX design and seamless user experiences</li>
                </ul>
              </FadeInSection>
              <FadeInSection delay={300}>
                <div className="bg-white/80 border-l-4 border-green-100 rounded-lg p-4 shadow-sm animate-fade-in-up">
                  <h4 className="font-semibold text-green-700 mb-2">What I Do</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Frontend: React.js, Tailwind CSS, Responsive UI</li>
                    <li>Backend: Node.js, Express, REST APIs</li>
                    <li>Cloud: AWS, Firebase, Docker</li>
                    <li>Database: MongoDB, MySQL</li>
                    <li>DevOps: Git, CI/CD, Automation</li>
                  </ul>
                </div>
              </FadeInSection>
            </div>
          </FadeInSection>
          {/* Right: Contact Cards */}
          <FadeInSection delay={300}>
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3 bg-white/80 rounded-lg px-4 py-2 shadow transition-transform transition-shadow duration-300 animate-fade-in-up hover:scale-110 hover:shadow-lg">
                <Mail className="text-green-600" size={22} />
                <span className="text-gray-700 font-medium">msvarun93@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 rounded-lg px-4 py-2 shadow transition-transform transition-shadow duration-300 animate-fade-in-up hover:scale-110 hover:shadow-lg">
                <Phone className="text-green-600" size={22} />
                <span className="text-gray-700 font-medium">+91 7090899938</span>
              </div>
              <a
                href="https://wa.me/917090899938"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/80 rounded-lg px-4 py-2 shadow transition-transform transition-shadow duration-300 animate-fade-in-up hover:scale-110 hover:shadow-lg hover:bg-green-50"
              >
                <MessageCircle className="text-green-600" size={22} />
                <span className="text-gray-700 font-medium">WhatsApp</span>
              </a>
              <div className="flex items-center space-x-3 bg-white/80 rounded-lg px-4 py-2 shadow transition-transform transition-shadow duration-300 animate-fade-in-up hover:scale-110 hover:shadow-lg">
                <Linkedin className="text-green-600" size={22} />
                <a
                  href="https://linkedin.com/in/varun-m-s-600a64109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 font-medium hover:text-green-600 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
} 