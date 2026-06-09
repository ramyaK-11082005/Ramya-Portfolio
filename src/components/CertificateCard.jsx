import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'
export default function CertificateCard({ cert }){
  return (
    <motion.div whileHover={{y:-6}} className="glass rounded-2xl p-6">
      <div className="w-12 h-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center mb-4">
        <FaCertificate size={22}/>
      </div>
      <h3 className="font-bold mb-1">{cert.name}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{cert.provider}</p>
      <span className={`inline-block mt-3 text-xs px-3 py-1 rounded-full font-semibold ${cert.status==='Ongoing'?'bg-yellow-500/10 text-yellow-600':'bg-green-500/10 text-green-600'}`}>{cert.status}</span>
    </motion.div>
  )
}
