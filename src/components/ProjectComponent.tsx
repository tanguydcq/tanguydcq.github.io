import { ProjectsCarousel } from "../components/utils/ProjectCarousel";
import "../i18n";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 sm:px-6 md:px-10 py-8 w-full max-w-7xl mx-auto text-center">
      <ProjectsCarousel />
    </section>
  );
}
