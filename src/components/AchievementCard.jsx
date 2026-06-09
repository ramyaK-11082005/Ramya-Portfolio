import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'
export default function AchievementCard({ a }){
  return (
    <motion.div whileHover={{y:-6, scale:1.02}} className="glass rounded-2xl p-6">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center mb-4">
        <FaTrophy size={22}/>
      </div>
      <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 font-semibold">{a.place}</span>
      <h3 className="font-bold mt-2">{a.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{a.level}</p>
    </motion.div>
  )
}
