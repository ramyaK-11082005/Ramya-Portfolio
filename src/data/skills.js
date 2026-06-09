import {
  FaPython, FaJava, FaJsSquare, FaReact, FaHtml5, FaCss3Alt,
  FaBootstrap, FaGitAlt, FaGithub, FaDatabase, FaPaintBrush, FaMicrosoft
} from 'react-icons/fa'
import {
  SiCplusplus, SiJquery, SiDjango, SiMysql,
  SiCanva
} from 'react-icons/si'
import { MdLeaderboard, MdOutlineChat, MdPsychology } from 'react-icons/md'

export const skills = {
  "Programming Languages": [
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#f89820" },
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
  ],
  "Frontend": [
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "jQuery", icon: SiJquery, color: "#0769AD" },
  ],
  "Backend": [
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
  ],
  "Database": [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MS SQL Server", icon: FaMicrosoft, color: "#CC2927" },
  ],
  "Tools": [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "Canva", icon: SiCanva, color: "#00C4CC" },
    { name: "Photoshop", icon: FaPaintBrush, color: "#31A8FF" },
    { name: "MS Office", icon: FaDatabase, color: "#D83B01" },
  ],
  "Core Strengths": [
    { name: "Problem Solving", icon: MdPsychology, color: "#6366f1" },
    { name: "Leadership", icon: MdLeaderboard, color: "#06b6d4" },
    { name: "Communication", icon: MdOutlineChat, color: "#10b981" },
  ]
}
