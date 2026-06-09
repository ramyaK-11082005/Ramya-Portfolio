import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle.jsx'
import { activities } from '../data/activities.js'

export default function Activities(){
  return (
    <section id="activities" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="Beyond academics" title="Leadership & Activities"/>
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((a,i)=>(
            <motion.div key={i} whileHover={{y:-6}} initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}
              className="glass rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center mb-4">
                <a.icon size={22}/>
              </div>
              <h3 className="font-bold">{a.title}</h3>
              <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
