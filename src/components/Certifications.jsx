import SectionTitle from './SectionTitle.jsx'
import CertificateCard from './CertificateCard.jsx'
import { certifications } from '../data/certifications.js'

export default function Certifications(){
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="Learning" title="Certifications & Courses"/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c,i)=><CertificateCard key={i} cert={c}/>)}
        </div>
      </div>
    </section>
  )
}
