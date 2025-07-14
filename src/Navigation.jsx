"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    // Animate navbar entrance
    setShowNav(true)
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-100 bg-white/95 transition-transform duration-700 ${showNav ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
      style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.03)' }}
    >
      <div className="px-4 sm:px-8 relative">
        <div className="flex justify-between items-center h-14">
          <div className="font-semibold text-lg text-gray-900 tracking-tight">Varun M S</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
              <span
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`cursor-pointer text-sm font-normal px-1 pb-0.5 transition-colors duration-200 relative
                  ${activeSection === item.toLowerCase() ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500" : "text-gray-700"}
                  hover:text-green-600
                `}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-0.5 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 transition-transform duration-300
                    ${activeSection === item.toLowerCase() ? "scale-x-100" : "scale-x-0"}
                  `}
                  style={{ transformOrigin: 'left', borderRadius: 2 }}
                />
              </span>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {/* Animated gradient bar at bottom of navbar */}
        <div className="absolute left-0 right-0 bottom-0 h-1 overflow-hidden pointer-events-none">
          <div className="w-full h-full animate-gradient-x bg-gradient-to-r from-green-400 via-blue-400 to-purple-500" style={{ filter: 'blur(2px)', opacity: 0.7 }} />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
              <span
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`block px-3 py-2 text-base font-normal text-gray-700 hover:text-green-600 cursor-pointer`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
} 