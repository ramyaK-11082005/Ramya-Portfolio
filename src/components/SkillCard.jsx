import { motion } from 'framer-motion'
export default function SkillCard({ skill }){
  const Icon = skill.icon
  return (
    <motion.div whileHover={{y:-6, scale:1.04}}
      className="glass rounded-2xl p-5 flex flex-col items-center text-center gap-2 cursor-default">
      <Icon size={40} color={skill.color}/>
      <p className="font-semibold text-sm">{skill.name}</p>
    </motion.div>
  )
}
