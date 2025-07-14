import FadeInSection from "./FadeInSection"

export default function EducationSection() {
  const certifications = [
    {
      title: "Advanced MS Office & Business Analysis",
      description: "Excel automation, data analysis, and documentation",
    },
    {
      title: "2nd Place - Web Design Competition",
      description: "Demonstrated creativity and technical proficiency",
    },
    {
      title: "React & Modern Web Bootcamp",
      description: "Hands-on training in React.js, REST APIs, and cloud deployment",
    },
  ];

  const skillsLearned = [
    "Software Engineering Principles",
    "Database Design & Query Optimization",
    "Web Technologies (HTML5, CSS3, JS, React.js)",
    "Cloud Fundamentals (AWS, Firebase)",
    "Agile & Team Collaboration",
    "Problem Solving & Algorithms",
  ];

  return (
    <section id="education" className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div>
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            <span className="inline-block border-b-4 border-green-200 pb-2 px-4 bg-green-50 rounded-lg animate-pulse">Education & Certifications</span>
          </h2>
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Timeline and Degree */}
          <FadeInSection delay={100}>
            <div className="flex flex-col gap-8">
              <div className="bg-green-50/60 border-l-4 border-green-200 rounded-xl p-8 shadow-sm animate-fade-in-up">
                <div className="flex items-center gap-4 mb-2">
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">2022 - 2024</span>
                  <span className="text-lg font-semibold text-gray-900">T John College, Bangalore</span>
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">Master of Computer Applications (MCA)</h3>
                <p className="text-gray-700 mb-4">
                  Specialized in <span className="font-semibold text-green-700">Software Engineering</span>, Database Systems, and Web Technologies. Strong foundation in Computer Science fundamentals including OO design, functional programming, data structures, and algorithm design.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>CGPA: <span className="font-semibold text-green-700">8.7/10</span></li>
                  <li>Relevant Coursework: Data Structures, Algorithms, Cloud Computing, Web Development, DBMS</li>
                  <li>Academic Projects: E-commerce Platform, Real-time Chat App, Data Analytics Dashboard</li>
                </ul>
              </div>
              <FadeInSection delay={200}>
                <div className="bg-white border-l-4 border-green-100 rounded-xl p-6 shadow-sm animate-fade-in-up">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Skills Learned</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {skillsLearned.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            </div>
          </FadeInSection>
          {/* Certifications */}
          <FadeInSection delay={300}>
            <div className="flex flex-col gap-6 animate-fade-in-up">
              <h4 className="text-lg font-semibold text-green-700 mb-2">Certifications & Achievements</h4>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-green-50/80 border-l-4 border-green-200 rounded-lg p-4 shadow-sm flex flex-col animate-fade-in-up animation-delay-100 hover:scale-[1.03] transition-transform">
                    <span className="font-medium text-gray-900 mb-1">{cert.title}</span>
                    <span className="text-gray-600 text-sm">{cert.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
} 