import { motion } from 'framer-motion'
// Font Awesome Icons - Path fully corrected here
import { FaDownload, FaReact, FaPython, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
// Simple Icons
import { 
  SiMongodb, SiMysql
} from "react-icons/si" 

// Tabler Icons
import { TbBrandNodejs } from "react-icons/tb"

import { profile } from '../data/profile.js'
import { Link } from 'react-scroll'

// 8 icons distributed perfectly around 360 degrees (45 degrees apart)
const floatIcons = [
  { I: FaReact, angle: 0, color: '#61DAFB' },
  { I: TbBrandNodejs, angle: 45, color: '#339933' },
  { I: SiMongodb, angle: 90, color: '#47A248' },
  { I: SiMysql, angle: 135, color: '#4479A1' },
  { I: FaHtml5, angle: 180, color: '#E34F26' },
  { I: FaCss3Alt, angle: 225, color: '#1572B6' }, 
  { I: FaJsSquare, angle: 270, color: '#F7DF1E' },
  { I: FaPython, angle: 315, color: '#3776AB' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 section-padding overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-cyan-100 dark:from-[#0b1020] dark:via-[#0f1535] dark:to-[#1a1240]" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div initial={{x:-40,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.7}}>
          <p className="text-indigo-500 font-medium mb-3">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-3">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">{profile.degree}</h2>
          <p className="text-indigo-500 font-medium mb-4">{profile.tagline}</p>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-xl">{profile.summary}</p>

          <div className="flex gap-4 mb-6">
            {profile.socials.map((s,i)=>(
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                 aria-label={s.label}
                 className="p-3 rounded-full glass hover:scale-110 hover:text-indigo-500 transition">
                <s.icon size={20}/>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="projects" smooth offset={-70} className="btn-primary cursor-pointer">View Projects</Link>
            <a href={profile.resume} download="RAMYA_K_Resume.pdf" className="btn-outline flex items-center gap-2"><FaDownload/> Download Resume</a>
            <Link to="contact" smooth offset={-70} className="btn-outline cursor-pointer">Contact Me</Link>
          </div>
        </motion.div>

        <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8}}
          className="relative flex justify-center mt-12 lg:mt-0">
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            {/* Inner Fixed core text */}
            <div className="absolute w-full h-full rounded-full p-2 bg-gradient-primary z-10 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                <span className="text-7xl font-extrabold gradient-text select-none">RK</span>
              </div>
            </div>

            {/* Glowing Backdrop Blur Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-20 pointer-events-none" />
            
            {/* Main Moving Track Container - Handles Orbit Rotation */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full flex items-center justify-center z-20"
            >
              {floatIcons.map((f, i) => (
                <div 
                  key={i} 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    // Radius bumped to 210px to perfectly break outside the blue border line
                    transform: `translate(-50%, -50%) rotate(${f.angle}deg) translate(210px) rotate(-${f.angle}deg)`
                  }}
                  className="select-none pointer-events-none"
                >
                  {/* Dynamic brand shadow glow applied via drop-shadow filter */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    style={{ 
                      filter: `drop-shadow(0 0 12px ${f.color}65)` 
                    }}
                    className="glass p-3 rounded-2xl border border-white/20 bg-white/80 dark:bg-slate-900/80 shadow-md flex items-center justify-center"
                  >
                    <f.I size={26} color={f.color}/>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}