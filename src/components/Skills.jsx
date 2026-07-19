import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle.jsx'
import SkillCard from './SkillCard.jsx'
import { skills } from '../data/skills.js'

export default function Skills(){
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="What I work with" title="Tech Stack & Skills"/>
        <div className="space-y-10">
          {Object.entries(skills).map(([cat, list]) => (
            // Verify list is an array and has elements before rendering the category row
            Array.isArray(list) && list.length > 0 && (
              <motion.div key={cat} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
                <h3 className="text-lg font-bold mb-4 text-indigo-500">{cat}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {list.map((s, i) => (
                    s && <SkillCard key={i} skill={s}/>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}