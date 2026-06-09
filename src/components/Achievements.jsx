import SectionTitle from './SectionTitle.jsx'
import AchievementCard from './AchievementCard.jsx'
import { achievements } from '../data/achievements.js'

export default function Achievements(){
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="Wins" title="Technical Achievements"/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a,i)=><AchievementCard key={i} a={a}/>)}
        </div>
      </div>
    </section>
  )
}
