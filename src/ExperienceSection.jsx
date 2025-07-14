import FadeInSection from "./FadeInSection"
import { Briefcase, Star } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer (Full Stack)",
      company: "Pravaah Consulting, Bangalore, Karnataka",
      period: "July 2024 – May 2025",
      isActive: true,
      responsibilities: [
        "Developed scalable web applications using React.js and modern frontend frameworks, achieving 35% reduction in page load times",
        "Built reusable coded frontend components with HTML5, CSS3, and component-based architecture",
        "Implemented cross-browser compatibility and responsive design principles",
        "Built RESTful APIs with robust error handling, reducing API response times by 25%",
        "Collaborated with cross-functional teams using Git version control",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Pravaah Consulting, Bangalore, Karnataka",
      period: "Dec 2023 – June 2024",
      isActive: false,
      responsibilities: [
        "Built responsive user interfaces using React.js, HTML5, and CSS3",
        "Created reusable frontend components with modern JavaScript (ES6+)",
        "Developed database-driven applications with MySQL and MongoDB",
        "Participated in code reviews and collaborative development processes",
      ],
    },
  ];

  return (
    <section id="experience" className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div>
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            <span className="inline-block border-b-4 border-green-200 pb-2 px-4 bg-green-50 rounded-lg animate-pulse">Professional Experience</span>
          </h2>
        </FadeInSection>
        <div className="relative flex flex-col md:flex-row md:items-start gap-12 max-w-5xl mx-auto">
          {/* Vertical Timeline */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 to-green-50 rounded-full" style={{ minHeight: '90%' }} />
          <div className="flex-1 flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className={`relative flex flex-col md:flex-row md:items-center bg-white border-l-4 ${exp.isActive ? 'border-green-600' : 'border-gray-200'} rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow animate-fade-in-up`}
                  style={{ marginLeft: '1.5rem' }}>
                  {/* Timeline Dot */}
                  <div className="absolute -left-8 top-8 md:top-1/2 md:-translate-y-1/2 flex flex-col items-center">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center ${exp.isActive ? 'bg-green-600 text-white' : 'bg-gray-200 text-green-600'} shadow-md border-2 border-white`}>
                      {exp.isActive ? <Star size={18} /> : <Briefcase size={18} />}
                    </span>
                    {index < experiences.length - 1 && (
                      <span className="w-1 h-16 bg-green-100 block mt-1 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        {exp.title}
                        {exp.isActive && <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full animate-pulse">Current</span>}
                      </h3>
                      <span className={`font-medium ${exp.isActive ? "text-green-600" : "text-gray-500"}`}>{exp.period}</span>
                    </div>
                    <p className="text-gray-700 mb-3 font-medium">{exp.company}</p>
                    <ul className="space-y-2 text-gray-600 text-sm pl-4 list-disc">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="animate-fade-in-up animation-delay-200">{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 