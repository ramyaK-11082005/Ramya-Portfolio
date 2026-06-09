import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaCode } from 'react-icons/fa'

export default function ProjectCard({ project }){
  const [open,setOpen] = useState(false)
  return (
    <motion.div whileHover={{y:-6}} className="glass rounded-2xl overflow-hidden flex flex-col">
      <div className="h-44 bg-gradient-primary flex items-center justify-center text-white">
        <FaCode size={48} className="opacity-80"/>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((t,i)=>(
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-500 font-medium">{t}</span>
          ))}
        </div>
        <p className={`text-sm text-slate-600 dark:text-slate-300 ${open?'':'line-clamp-3'}`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
          <button onClick={()=>setOpen(o=>!o)}
            className="text-xs inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-indigo-500 text-indigo-500">
            <FaChevronDown className={`transition ${open?'rotate-180':''}`}/> {open?'Less':'Details'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
