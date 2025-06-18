import { ProjectsCarousel } from "../components/utils/ProjectCarousel"

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 sm:px-6 md:px-10 py-8 w-full max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl text-cyan-400 font-semibold mb-6">Mes projets</h2>
      <ProjectsCarousel />
    </section>
  )
}
