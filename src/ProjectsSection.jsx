import FadeInSection from "./FadeInSection"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Octopus SaaS - Medical Waste Management",
      description:
        "Revolutionary enterprise platform transforming healthcare waste management with intelligent automation. Built using React.js, Tailwind CSS, Azure Maps integration, and Firebase backend, delivering seamless user experience and robust data management.",
      tech: ["React.js", "Tailwind CSS", "Azure Maps", "Firebase", "Node.js", "DaisyUI"],
      impact: [
        "60% automation of manual processes",
        "45% reduction in operational costs",
        "85% improvement in compliance tracking",
        "50% faster waste collection scheduling",
      ],
    },
    {
      title: "Premium Car Rental Platform",
      description:
        "Sophisticated booking ecosystem featuring intuitive user interface, real-time availability tracking, and streamlined reservation management. Engineered with modern React.js architecture for optimal performance and user satisfaction.",
      tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
      impact: [
        "30% increase in customer engagement",
        "25% boost in booking conversion rates",
        "40% reduction in support tickets",
        "20% increase in revenue per user",
      ],
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Lightning-fast messaging platform with instant communication capabilities, featuring advanced WebSocket implementation and scalable architecture. Optimized for seamless real-time interactions and superior user experience.",
      tech: ["React.js", "Node.js", "WebSockets", "MongoDB"],
      impact: [
        "40% reduction in message latency",
        "90% uptime reliability",
        "3x increase in daily active users",
        "65% improvement in message delivery success rate",
      ],
    },
    {
      title: "Boutique Watches eCommerce",
      description: "Elegant luxury timepiece marketplace with premium design aesthetics, responsive layout, and conversion-optimized user journey. Crafted to deliver exceptional shopping experience for discerning customers.",
      tech: ["React.js", "Modern Web Technologies"],
      impact: [
        "15% reduction in cart abandonment",
        "35% increase in average order value",
        "50% improvement in page load speed",
        "28% boost in customer retention",
      ],
    },
  ]

  return (
    <section id="projects" className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div>
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            <span className="inline-block border-b-4 border-green-200 pb-2 px-4 bg-green-50 rounded-lg animate-pulse">Portfolio Highlights</span>
          </h2>
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div className="bg-green-50/60 border-l-4 border-green-200 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-500 group cursor-pointer animate-fade-in-up">
                <h3 className="text-xl font-bold text-green-700 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/80 text-green-700 text-sm rounded-full border border-green-200 hover:bg-green-100 hover:text-green-800 transition-all duration-300"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors duration-300">
                  <span className="font-semibold text-green-700"></span>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-left pl-4">
                    {project.impact.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}