import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaCode } from 'react-icons/fa'

export default function ProjectCard({ project }){
  const [open, setOpen] = useState(false)
  
  const hasGithub = project.github && project.github !== '#';
  const hasDemo = project.demo && project.demo !== '#';

  return (
    <motion.div 
      whileHover={{ y: -6 }} 
      className="glass rounded-2xl overflow-hidden flex flex-col border border-white/10 bg-white/60 dark:bg-slate-900/60 transition-colors duration-300"
    >
      {/* Project Image Header */}
      <div className="h-44 w-full bg-gradient-primary relative overflow-hidden flex items-center justify-center text-white">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <FaCode size={48} className="opacity-80"/>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title text color updates for light/dark mode */}
        <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-white transition-colors duration-300">
          {project.title}
        </h3>

        {/* Tech badges adapt to light/dark contrast */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((t, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-500/20 transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Description text color updates for light/dark mode */}
        <p className={`text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300 ${open ? '' : 'line-clamp-3'}`}>
          {project.description}
        </p>
        
        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
          <button 
            onClick={() => setOpen(o => !o)}
            className="text-xs inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-indigo-500/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 transition duration-300"
          >
            <FaChevronDown className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}/> {open ? 'Less' : 'Details'}
          </button>

          {hasGithub && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-indigo-500/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 transition duration-300"
            >
              <FaGithub /> GitHub
            </a>
          )}

          {hasDemo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-indigo-500/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 transition duration-300"
            >
              <FaExternalLinkAlt size={10} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}