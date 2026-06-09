import { motion } from 'framer-motion'
export default function SectionTitle({ kicker, title }) {
  return (
    <motion.div initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}
      className="text-center mb-12">
      {kicker && <p className="text-indigo-500 font-semibold mb-2 uppercase tracking-widest text-sm">{kicker}</p>}
      <h2 className="text-3xl md:text-4xl font-bold gradient-text">{title}</h2>
      <div className="w-24 h-1 mx-auto mt-4 rounded bg-gradient-primary"/>
    </motion.div>
  )
}
