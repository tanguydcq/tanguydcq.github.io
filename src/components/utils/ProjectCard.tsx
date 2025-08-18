import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import type { Project } from "@/data/project"


export function ProjectCard({ slug, image, tags, translationKey }: Project) {
  const { t } = useTranslation()

  return (
    <div className="bg-gray-700 rounded-xl p-4 shadow-md min-h-[340px] flex flex-col justify-between w-full h-full">
      <div className="w-full mb-4 rounded-md overflow-hidden relative aspect-[16/9]">
        <img
          src={image}
          alt={t(`${translationKey}.title`)}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold text-cyan-300">{t(`${translationKey}.title`)}</h3>
      <p className="text-gray-400 text-sm mt-2 flex-1">{t(`${translationKey}.description`)}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="pt-6 flex justify-center my-3">
        <Link to={`/project/${slug}`}>
          <Button className="bg-white text-gray-900 hover:bg-gray-500">{t(`header.seeMore`)}</Button>
        </Link>
      </div>
    </div>
  )
}