import SectionTitle from './SectionTitle.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects(){
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="Portfolio" title="Featured Projects"/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p,i)=><ProjectCard key={i} project={p}/>)}
        </div>
      </div>
    </section>
  )
}
