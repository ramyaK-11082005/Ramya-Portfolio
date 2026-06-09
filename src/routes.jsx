import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

export default function AppRoutes({ theme, toggleTheme }) {
  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
    </Routes>
  )
}
