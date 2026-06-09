import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaReact, FaPython, FaJsSquare, FaHtml5 } from 'react-icons/fa'
import { profile } from '../data/profile.js'
import { Link } from 'react-scroll'

const floatIcons = [
  { I: FaReact, top:'10%', left:'5%', color:'#61DAFB' },
  { I: FaPython, top:'20%', right:'8%', color:'#3776AB' },
  { I: FaJsSquare, bottom:'18%', left:'8%', color:'#F7DF1E' },
  { I: FaHtml5, bottom:'10%', right:'5%', color:'#E34F26' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 section-padding overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-cyan-100 dark:from-[#0b1020] dark:via-[#0f1535] dark:to-[#1a1240]" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
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
            <a href={profile.resume} download="RAMYA_K_Resume.pdf" className="btn-outline"><FaDownload/> Download Resume</a>
            <Link to="contact" smooth offset={-70} className="btn-outline cursor-pointer">Contact Me</Link>
          </div>
        </motion.div>

        <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8}}
          className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-40"/>
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-primary">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                <span className="text-7xl font-extrabold gradient-text">RK</span>
              </div>
            </div>
            {floatIcons.map((f,i)=>(
              <motion.div key={i} style={{...f}}
                animate={{y:[0,-15,0]}} transition={{duration:3+i,repeat:Infinity}}
                className="absolute glass p-3 rounded-2xl shadow-lg">
                <f.I size={28} color={f.color}/>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
