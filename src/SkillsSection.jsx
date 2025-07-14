import FadeInSection from "./FadeInSection"

export default function SkillsSection() {
  const skills = {
    frontend: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3", "Tailwind CSS", "SASS", "DaisyUI"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "JSON", "Asynchronous Programming"],
    cloud: ["AWS (IAM, EC2, S3, Lambda, RDS, DynamoDB)", "Docker", "Firebase"],
    database: ["MongoDB", "MySQL", "Query Optimization", "Data Modeling"],
    tools: ["Git", "Webpack", "Babel", "npm", "VS Code", "CI/CD (GitHub Actions)"],
  }

  const getCategoryTitle = (category) => {
    const titles = {
      frontend: "Frontend",
      backend: "Backend & APIs",
      cloud: "Cloud & Deployment",
      database: "Database Technologies",
      tools: "Development Tools",
    }
    return titles[category] || category
  }

  return (
    <section id="skills" className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div>
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            <span className="inline-block border-b-4 border-green-200 pb-2 px-4 bg-green-50 rounded-lg animate-pulse">Technical Skills</span>
          </h2>
        </FadeInSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <FadeInSection key={category} delay={index * 150}>
              <div className="bg-green-50/60 border-l-4 border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 group animate-fade-in-up">
                <h3 className="text-lg font-bold text-green-700 mb-4 capitalize group-hover:text-green-600 transition-colors duration-300">
                  {getCategoryTitle(category)}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-gray-700 text-sm font-medium hover:text-green-700 transition-colors duration-200 pl-2"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
} 