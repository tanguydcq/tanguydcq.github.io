import { ProjectsCarousel } from "../components/utils/ProjectCarousel";
import { useTranslation } from "react-i18next";
import "../i18n";

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-10 py-8 w-full max-w-7xl mx-auto text-center">
      <h1 className="py-10 text-3xl sm:text-4xl text-emerald-600 font-bold mb-6">
        {t('header.projects')}
      </h1>
      <ProjectsCarousel />
    </section>
  );
}
