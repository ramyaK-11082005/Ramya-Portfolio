import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import SectionTitle from './SectionTitle.jsx'
import { profile } from '../data/profile.js'

export default function Contact(){
  const [form,setForm] = useState({name:'',email:'',message:''})
  const [sent,setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)
    window.location.href = `mailto:${profile.email}?subject=Portfolio Contact&body=${body}`
    setSent(true)
  }

  const info = [
    { icon: FaMapMarkerAlt, label: 'Location', value: profile.location },
    { icon: FaEnvelope, label: 'Email', value: profile.email, href:`mailto:${profile.email}` },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/ramya-k', href: profile.linkedin },
    { icon: FaGithub, label: 'GitHub', value: 'github profile', href: profile.github },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="Say Hello" title="Get In Touch"/>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}}
            className="glass rounded-2xl p-8 space-y-4">
            {info.map((c,i)=>{
              const Inner = (
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-primary text-white"><c.icon/></div>
                  <div>
                    <p className="text-xs text-slate-500">{c.label}</p>
                    <p className="font-semibold text-sm break-all">{c.value}</p>
                  </div>
                </div>
              )
              return c.href
                ? <a key={i} href={c.href} target="_blank" rel="noreferrer" className="block hover:translate-x-1 transition">{Inner}</a>
                : <div key={i}>{Inner}</div>
            })}
            <div className="flex gap-3 pt-4">
              <a href={`mailto:${profile.email}`} className="btn-primary text-sm"><FaEnvelope/> Email</a>
              <a href={`tel:${profile.phone.replace(/\s/g,'')}`} className="btn-outline text-sm"><FaPhone/> Call</a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="btn-outline text-sm"><FaWhatsapp/> WhatsApp</a>
            </div>
          </motion.div>

          <motion.form onSubmit={submit} initial={{x:30,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}}
            className="glass rounded-2xl p-8 space-y-4">
            <div>
              <label className="text-sm font-medium">Your Name</label>
              <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-white/20 focus:outline-none focus:border-indigo-500"/>
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-white/20 focus:outline-none focus:border-indigo-500"/>
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-white/20 focus:outline-none focus:border-indigo-500"/>
            </div>
            <button type="submit" className="btn-primary w-full justify-center"><FaPaperPlane/> Send Message</button>
            {sent && <p className="text-sm text-green-500">Opening your email client…</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
