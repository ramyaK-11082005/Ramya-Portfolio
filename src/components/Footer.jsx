import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { profile } from '../data/profile.js'

export default function Footer(){
  return (
    <footer className="py-10 px-6 border-t border-white/10 text-center">
      <div className="flex justify-center gap-5 mb-4">
        <a href={profile.github} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:text-indigo-500"><FaGithub/></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:text-indigo-500"><FaLinkedin/></a>
        <a href={`mailto:${profile.email}`} className="p-3 rounded-full glass hover:text-indigo-500"><FaEnvelope/></a>
      </div>
      <p className="text-sm">© 2026 Ramya K</p>
      <p className="text-xs text-slate-500 mt-1 flex items-center justify-center gap-1">
        Designed & Developed with <FaHeart className="text-red-500"/> using React.js
      </p>
    </footer>
  )
}
