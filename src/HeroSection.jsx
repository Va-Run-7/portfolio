import { ChevronDown, Mail, Phone, Linkedin } from "lucide-react"
import { MessageCircle } from "lucide-react" // WhatsApp icon
import LetterReveal from "./LetterReveal"

export default function HeroSection({ scrollToSection }) {
  const techBadges = [
    { name: "React", position: "top-0 left-1/2 -translate-x-1/2", color: "text-blue-600", delay: "0ms" },
    { name: "JS", position: "top-1/2 -right-2 -translate-y-1/2", color: "text-yellow-600", delay: "300ms" },
    { name: "Node", position: "bottom-0 left-1/2 -translate-x-1/2", color: "text-green-600", delay: "600ms" },
    { name: "AWS", position: "top-1/2 -left-2 -translate-y-1/2", color: "text-orange-600", delay: "900ms" },
  ]

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50 w-full" />

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-100 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-lg rotate-45 opacity-40 animate-bounce" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-300 rounded-full opacity-50 animate-ping" />
      <div className="absolute bottom-20 right-40 w-24 h-24 border-2 border-green-200 rounded-full opacity-30 animate-spin" />

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
                🚀 Welcome! I'm
              </div>
            </div>

            {/* Name - Animation */}
            <div className="animate-fade-in-up animation-delay-300 mb-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <div className="flex flex-col items-center lg:items-start gap-1">
                  <div className="overflow-hidden">
                    <div className="animate-slide-up">
                      <LetterReveal text="Varun" delay={500} />
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div className="animate-slide-up animation-delay-600">
                      <span className="text-green-600">
                        <LetterReveal text="M S" delay={1400} />
                      </span>
                    </div>
                  </div>
                </div>
              </h1>
            </div>

            {/* Title */}
            <div className="animate-fade-in-up animation-delay-600 mb-6">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light">
                Passionate <span className="text-green-600 font-medium">Full-Stack Developer</span>
              </p>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up animation-delay-700 mb-8">
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Transforming ideas into powerful digital experiences using cutting-edge technologies like <span className="font-semibold text-gray-800">React.js</span>, <span className="font-semibold text-gray-800">Node.js</span>, and <span className="font-semibold text-gray-800">AWS</span> cloud solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up animation-delay-800 grid grid-cols-3 gap-6 mb-10 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-600">1.5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animation-delay-900 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 hover:scale-105 transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Explore My Portfolio</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="https://wa.me/917090899938"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 flex items-center justify-center gap-2 border-2 border-green-600 text-green-700 rounded-xl bg-white hover:bg-green-50 hover:text-green-800 hover:scale-105 transition-all duration-300 hover:shadow-lg backdrop-blur-sm font-semibold text-lg"
                style={{ minWidth: 180 }}
              >
                <MessageCircle className="text-green-600" size={22} />
                Let's Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up animation-delay-1000 flex justify-center lg:justify-start space-x-4">
              <a
                href="mailto:msvarun93@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-600 hover:text-green-600"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+917090899938"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-600 hover:text-green-600"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://wa.me/917090899938"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-green-600 hover:text-green-700"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://linkedin.com/in/varun-m-s-600a64109"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-600 hover:text-green-600"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="order-1 lg:order-2 animate-fade-in-up animation-delay-400">
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border-2 border-green-300 animate-pulse" />

              {/* Center Circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl">
                <div className="text-white text-6xl font-bold">{"</>"}</div>
              </div>

              {/* Tech Badges */}
              {techBadges.map((tech) => (
                <div
                  key={tech.name}
                  className={`absolute ${tech.position} bg-white rounded-full p-3 shadow-lg animate-bounce`}
                  style={{ animationDelay: tech.delay }}
                >
                  <div className={`${tech.color} font-bold text-sm`}>{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-1200">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500">Discover more below</span>
            <ChevronDown
              className="text-gray-400 animate-bounce cursor-pointer hover:text-green-600 transition-colors duration-300"
              size={24}
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </div>
    </section>
  )
}