import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { motion } from "framer-motion"
import { ProjectCard } from "./ProjectCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { projects, courseProjects } from "@/data/project"
import { useTranslation } from "react-i18next";


function CarouselSection({ title, projects }: { title: string; projects: any[] }) {
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		slides: {
			perView: 1,
			spacing: 0,
		},
		breakpoints: {
			"(min-width: 640px)": {
				slides: { perView: 1.5, spacing: 0 },
			},
			"(min-width: 1024px)": {
				slides: { perView: 2.5, spacing: 0 },
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
					className="absolute left-[-2rem]  lg:left-[-3rem] top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-md"
				>
					<ChevronLeft size={20} />
				</button>
				<button
					onClick={scrollNext}
					className="absolute right-[-2rem] lg:right-[-3rem] top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-md"
				>
					<ChevronRight size={20} />
				</button>
			</div>
		</div>
	)
}

export function ProjectsCarousel() {
	const { t } = useTranslation();
	return (
		<div>
			<CarouselSection title={t("header.persoProjects")} projects={projects} />
			<CarouselSection title={t("header.courseProjects")} projects={courseProjects} />
		</div>
	)
}
