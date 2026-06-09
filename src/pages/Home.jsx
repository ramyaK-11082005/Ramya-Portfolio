import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Education from '../components/Education.jsx'
import Skills from '../components/Skills.jsx'
import Experience from '../components/Experience.jsx'
import Certifications from '../components/Certifications.jsx'
import Projects from '../components/Projects.jsx'
import Achievements from '../components/Achievements.jsx'
import Activities from '../components/Activities.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home({ theme, toggleTheme }){
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Experience/>
      <Certifications/>
      <Projects/>
      <Achievements/>
      <Activities/>
      <Contact/>
      <Footer/>
    </>
  )
}
