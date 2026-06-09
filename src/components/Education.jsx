import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import SectionTitle from './SectionTitle.jsx'
import { education } from '../data/education.js'

export default function Education(){
  return (
    <section id="education" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="My Journey" title="Education"/>
        <div className="relative border-l-2 border-indigo-400/40 ml-4 md:ml-8 space-y-10">
          {education.map((e,i)=>(
            <motion.div key={i} initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}}
              className="relative pl-8">
              <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                <FaGraduationCap/>
              </div>
              <div className="glass rounded-2xl p-6">
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 font-semibold">{e.year}</span>
                <h3 className="text-xl font-bold mt-2">{e.degree}</h3>
                <p className="text-slate-600 dark:text-slate-300">{e.institution}</p>
                <p className="mt-1 font-semibold text-cyan-600 dark:text-cyan-400">{e.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
