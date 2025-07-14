import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-white py-8 px-4 w-full">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <div className="flex items-center gap-3 justify-center mb-2 md:mb-0">
          <a href="mailto:msvarun93@gmail.com" className="hover:text-blue-400 transition-colors" aria-label="Email"><Mail size={20} /></a>
          <a href="https://linkedin.com/in/varun-m-s-600a64109" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://github.com/varunms93" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="GitHub"><Github size={20} /></a>
        </div>
        <span className="text-gray-400 text-sm">© 2024 Varun M S. Built with <span className="text-blue-400">React.js</span> & <span className="text-teal-300">Tailwind CSS</span>.</span>
      </div>
    </footer>
  )
} 