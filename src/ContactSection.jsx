import { Mail, Phone, Linkedin } from "lucide-react"
import { MessageCircle } from "lucide-react" // WhatsApp icon
import FadeInSection from "./FadeInSection"

export default function ContactSection() {
  const contactMethods = [
    {
      href: "mailto:msvarun93@gmail.com",
      icon: Mail,
      label: "Send Email",
      primary: true,
    },
    {
      href: "tel:+917090899938",
      icon: Phone,
      label: "Call Me",
      primary: false,
    },
    {
      href: "https://wa.me/917090899938",
      icon: MessageCircle,
      label: "WhatsApp",
      primary: false,
      external: true,
    },
    {
      href: "https://linkedin.com/in/varun-m-s-600a64109",
      icon: Linkedin,
      label: "LinkedIn",
      primary: false,
      external: true,
    },
  ]

  return (
    <section id="contact" className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">
            <span className="inline-block border-b-4 border-green-200 pb-2 px-4 bg-green-50 rounded-lg animate-pulse">Let's Work Together</span>
          </h2>
        </FadeInSection>
        <FadeInSection delay={100}>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto animate-fade-in-up">
            I'm always interested in new opportunities, collaborations, and exciting projects. Whether you want to discuss a potential role, a freelance project, or just want to connect, feel free to reach out!
          </p>
        </FadeInSection>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <FadeInSection key={index} delay={200 + index * 120}>
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center space-x-2 px-6 py-4 rounded-xl shadow-md transition-all duration-300 text-lg font-medium hover:scale-105 hover:shadow-lg ${
                    method.primary
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "border border-gray-200 text-gray-700 hover:border-green-400 bg-white/80"
                  } animate-fade-in-up`}
                >
                  <Icon size={24} className={method.label === 'WhatsApp' ? 'text-green-600' : ''} />
                  <span>{method.label}</span>
                </a>
              </FadeInSection>
            )
          })}
        </div>
        <FadeInSection delay={700}>
          <div className="mt-12 text-gray-500 text-sm max-w-xl mx-auto animate-fade-in-up">
            <p>
              <span className="font-semibold text-green-700">Availability:</span> Open to full-time, contract, and freelance opportunities.<br />
              <span className="font-semibold text-green-700">Location:</span> Bangalore, India (Remote-friendly)
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
} 