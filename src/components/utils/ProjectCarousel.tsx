import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { motion } from "framer-motion"
import { ProjectCard } from "./ProjectCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
	{
		title: "Sterenova",
		description:
			"Boîte d’événementiel : organisation, logistique, location de matériel",
		image: "/images/sterenova.jpg",
		tech: ["Gestion", "Communication", "Évènementiel"],
	},
	{
		title: "Agent IA ChatGPT",
		description:
			"Génération automatique de documentation technique avec Slack + scraping",
		image: "/images/agentia.jpg",
		tech: ["Python", "OpenAI API", "LLM", "Slack"],
	},
	{
		title: "Classification de Contrats",
		description: "LLM internes pour reconnaître des documents juridiques",
		image: "/images/contracts.jpg",
		tech: ["NLP", "LLM", "Prompting", "Data Science"],
	},
	{
		title: "Portfolio Personnel",
		description:
			"Site web personnel pour présenter mes projets et compétences",
		image: "/images/portfolio.jpg",
		tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
	},
]

export function ProjectsCarousel() {
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		slides: {
			perView: 1,
			spacing: 0,
		},
		breakpoints: {
			"(min-width: 640px)": {
				slides: { perView: 1.5, spacing: 20 },
			},
			"(min-width: 1024px)": {
				slides: { perView: 2.5, spacing: 24 },
			},
		},
	})

	const scrollPrev = () => instanceRef.current?.prev()
	const scrollNext = () => instanceRef.current?.next()

	return (
		<div className="relative">
			{/* Slider */}
			<div ref={sliderRef} className="keen-slider w-full">
				{projects.map((proj, i) => (
					<motion.div
						key={i}
						className="keen-slider__slide flex justify-center"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: i * 0.1 }}
					>
						<div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-full">
							<ProjectCard {...proj} />
						</div>
					</motion.div>
				))}
			</div>

			{/* Arrows */}
			<button
				onClick={scrollPrev}
				className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-md"
			>
				<ChevronLeft size={20} />
			</button>
			<button
				onClick={scrollNext}
				className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-md"
			>
				<ChevronRight size={20} />
			</button>
		</div>
	)
}
