import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import type { Project } from "@/data/project"


export function ProjectCard({ title, slug, description, image, tags }: Project) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-md min-h-[340px] flex flex-col justify-between w-full h-full">
      <div className="h-40 w-full mb-4 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold text-cyan-300">{title}</h3>
      <p className="text-gray-400 text-sm mt-2 flex-1">{description}</p>
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
      <div className="flex justify-center my-3">
        <Link to={`/project/${slug}`}>
          <Button variant="link" className="text-gray-400">Voir Plus</Button>
        </Link>
      </div>
    </div>
  )
}
