import { motion } from 'framer-motion'

export default function SkillCard({ skill }) {
  // Safe guard clause to prevent crash if data is missing
  if (!skill || !skill.icon) return null;
  
  const Icon = skill.icon
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.04 }}
      style={{ 
        filter: `drop-shadow(0 4px 12px ${skill.color}25)` 
      }}
      className="glass rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-white/10 bg-white/60 dark:bg-slate-900/60 cursor-default transition-shadow duration-300"
    >
      <div 
        className="p-2 rounded-xl flex items-center justify-center"
        style={{ filter: `drop-shadow(0 0 8px ${skill.color}40)` }}
      >
        <Icon size={40} color={skill.color}/>
      </div>
      <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">{skill.name}</p>
    </motion.div>
  )
}