import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { projects, courseProjects } from "../data/project"
import ProjectLayout from "@/layout/ProjectLayout"
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const allProjects = [...projects, ...courseProjects]
  const project = allProjects.find(p => slugify(p.slug) === slug)

  if (!project) return (
    <ProjectLayout>
      <div className="text-center text-destructive py-20">{t("projects.notFound", "Projet introuvable")}</div>
    </ProjectLayout>
  )

  return (
    <ProjectLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-8"
        >
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            {t(`${project.translationKey}.title`)}
          </h1>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-sm px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 sm:p-8 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line text-justify">
              {t(`${project.translationKey}.longDescription`)}
            </p>

            {/* Link Button */}
            {project.link && (
              <div className="flex justify-center pt-8">
                <Button size="lg" asChild className="group">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("header.link")}
                    <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </motion.div>
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
