import { useState } from 'react'
import { Link } from 'react-scroll'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const links = ['home','about','education','skills','experience','certifications','projects','achievements','activities','contact']

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.nav initial={{y:-60,opacity:0}} animate={{y:0,opacity:1}}
      className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold gradient-text">Ramya.K</a>
        <ul className="hidden lg:flex gap-6 text-sm font-medium capitalize">
          {links.map(l => (
            <li key={l}>
              <Link to={l} smooth duration={500} offset={-70} spy
                activeClass="text-indigo-500"
                className="cursor-pointer hover:text-indigo-500 transition">{l}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="toggle theme"
            className="p-2 rounded-full glass hover:scale-110 transition">
            {theme === 'dark' ? <FaSun className="text-yellow-400"/> : <FaMoon className="text-indigo-600"/>}
          </button>
          <button onClick={()=>setOpen(o=>!o)} className="lg:hidden p-2 rounded-full glass">
            {open ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
      </div>
      {open && (
        <ul className="lg:hidden glass flex flex-col gap-3 px-6 py-4 capitalize">
          {links.map(l => (
            <li key={l}>
              <Link to={l} smooth duration={500} offset={-70} onClick={()=>setOpen(false)}
                className="cursor-pointer block py-1">{l}</Link>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  )
}
