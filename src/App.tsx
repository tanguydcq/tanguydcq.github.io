// App.tsx
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landing-page"
import ProjectDetail from "./pages/ProjectDetail"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
  )
}
