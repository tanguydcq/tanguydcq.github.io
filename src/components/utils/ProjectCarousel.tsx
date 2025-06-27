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
		image: `${import.meta.env.BASE_URL}images/sterenova.jpg`,
		tech: ["Gestion", "Communication", "Évènementiel"],
	},
	{
		title: "Site Sterenova",
		description: "Developpement du site Sternova",
		image: `${import.meta.env.BASE_URL}images/sterenova-site.jpg`,
		tech: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
	},
	{
		title: "Agent IA ChatGPT",
		description:
			"Génération automatique de documentation technique avec Slack + scraping",
		image: `${import.meta.env.BASE_URL}images/agentia.jpg`,
		tech: ["Python", "OpenAI API", "LLM", "Slack"],
	},
	{
		title: "Classification de Contrats",
		description: "LLM internes pour reconnaître des documents juridiques",
		image: `${import.meta.env.BASE_URL}images/contracts.jpg`,
		tech: ["NLP", "LLM", "Prompting", "Data Science"],
	},
	{
		title: "Portfolio Personnel",
		description:
			"Site web personnel pour présenter mes projets et compétences",
		image: `${import.meta.env.BASE_URL}images/portfolio.jpg`,
		tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
	}
]

const courseProjects = [
	{
		title: "Generateur de musique",
		description: "Utilisation de BERT pour générer de la musique dans le cadre d'un projet de cours NLP",
		image: `${import.meta.env.BASE_URL}images/music-generator.jpg`,
		tech: ["Python", "BERT", "NLP"],
	},
	{
		title: "Classification d'images",
		description: "Utilisation de CNN pour classifier des images de galaxy selon leur label",
		image: `${import.meta.env.BASE_URL}images/image-classification.jpg`,
		tech: ["Python", "TensorFlow", "CNN", "Machine Learning"],
	},
	{
		title: "Exploration de données",
		description: "Analyse de données d'accidents de la route pour en extraire des insights avec differents modele et analyse. Le dataset etait volumineux pour nous mettre dans un cadre d'entreprise, le sujet assez flou pour avoir une liberte totale",
		image: `${import.meta.env.BASE_URL}images/image-accident.jpg`,
		tech: ["Python", "Spark", "Machine Learning", "Big Data"],
	},
	// mettre d'autres...
]

function CarouselSection({ title, projects }: { title: string; projects: any[] }) {
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
		<div className="mb-12">
			<h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-400">{title}</h3>
			<div className="relative">
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
		</div>
	)
}

export function ProjectsCarousel() {
	return (
		<div>
			<CarouselSection title="Projets personnels & entreprise" projects={projects} />
			<CarouselSection title="Projets de cours" projects={courseProjects} />
		</div>
	)
}
