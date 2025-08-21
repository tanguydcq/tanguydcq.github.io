import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { projects, courseProjects } from "../data/project"
import ProjectLayout from "@/layout/ProjectLayout"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const allProjects = [...projects, ...courseProjects]
  const project = allProjects.find(p => slugify(p.slug) === slug)

  if (!project) return <div className="text-center text-red-500 py-10">{t("projects.notFound", "Projet introuvable")}</div>

  return (
    <ProjectLayout>
      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        {/* Titre */}
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-6 text-center">
          {t(`${project.translationKey}.title`)}
        </h1>

        {/* Image */}
        <div className="w-full max-w-xl aspect-video mb-6 overflow-hidden rounded-lg shadow mx-auto">
          <img
            src={project.image}
            alt={t(`${project.translationKey}.title`)}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line mb-6 text-justify">
          {t(`${project.translationKey}.longDescription`)}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-emerald-600/50 text-white px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rapport PDF s'il existe */}
        {project.link && (
          <div className="mt-8 flex justify-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-900 hover:scale-110 transition border border-emerald-900 rounded-lg px-8 py-3 bg-white min-w-52 text-center font-semibold"
            >
              <OpenInNewIcon className="text-emerald-900 mr-3" />
              {t("header.link")}
            </a>
          </div>
        )}
      </div>
    </ProjectLayout>
  )
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[éèêë]/g, "e")
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}
