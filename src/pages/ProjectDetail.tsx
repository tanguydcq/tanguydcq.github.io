import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { projects, courseProjects } from "../data/project"
import HomeLayout from "@/layout/HomeLayout"

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()

  const allProjects = [...projects, ...courseProjects]
  const project = allProjects.find(p => slugify(p.slug) === slug)

  if (!project) return <div>{t("projects.notFound", "Projet introuvable")}</div>

  return (
    <HomeLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{t(`${project.translationKey}.title`)}</h1>
        <img src={project.image} alt={t(`${project.translationKey}.title`)} className="w-full rounded mb-4" />
        <p className="text-gray-700 mb-4 whitespace-pre-line">{t(`${project.translationKey}.description`)}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t, i) => (
            <span key={i} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </HomeLayout>
  )
}

// Petit utilitaire
function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[éèêë]/g, "e")
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}
