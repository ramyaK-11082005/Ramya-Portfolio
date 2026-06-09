import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle.jsx'
import { profile } from '../data/profile.js'

export default function About(){
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="Get to know me" title="About Me"/>
        <motion.div initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}
          className="glass rounded-3xl p-8 md:p-12">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">{profile.about}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {profile.stats.map((s,i)=>(
              <motion.div key={i} whileHover={{y:-5}}
                className="text-center p-6 rounded-2xl bg-gradient-primary text-white shadow-lg">
                <div className="text-3xl font-extrabold">{s.value}</div>
                <div className="text-sm mt-1 opacity-90">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
