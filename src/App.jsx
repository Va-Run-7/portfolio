import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import EducationSection from './EducationSection'
import ExperienceSection from './ExperienceSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'education',
  'contact',
]

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scroll to section by id
  const scrollToSection = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Update activeSection on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen w-full">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className=""> {/* Add padding to offset navbar height */}
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
