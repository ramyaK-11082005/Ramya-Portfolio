import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import SectionTitle from './SectionTitle.jsx'
import { experience } from '../data/experience.js'

export default function Experience(){
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="Hands-on" title="Internship Experience"/>
        <div className="grid md:grid-cols-2 gap-8">
          {experience.map((e,i)=>(
            <motion.div key={i} initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}
              whileHover={{y:-5}} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-gradient-primary text-white"><FaBriefcase/></div>
                <div>
                  <h3 className="font-bold">{e.role}</h3>
                  <p className="text-sm text-indigo-500">{e.company}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-3">{e.period}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-200">
                {e.points.map((p,k)=><li key={k}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
