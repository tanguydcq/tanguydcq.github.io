import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useState } from "react"

export function SportComponent() {
  const { t } = useTranslation()
  const sports = ["tennis", "gym", "winterSports", "volley", "climbing"]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 0,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
  })

  const scrollPrev = () => instanceRef.current?.prev()
  const scrollNext = () => instanceRef.current?.next()

  return (
    <section id="sports" className="mt-20 mb-10 px-4 sm:px-6">
      <motion.h1
        className="py-10 text-3xl sm:text-4xl text-emerald-600 font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sports
      </motion.h1>

      <div className="relative">
        <div ref={sliderRef} className="keen-slider w-full">
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              className="keen-slider__slide flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer w-full max-w-sm"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {/* Image */}
                <img
                  src={t(`sports.${sport}.img`)}
                  alt={t(`sports.${sport}.name`)}
                  className={`w-full h-64 object-cover transition-opacity duration-500
                    ${openIndex === index ? "opacity-0" : "group-hover:opacity-0"}`}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-emerald-900 bg-opacity-90 transition-opacity duration-500 px-4
                    ${openIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                >
                  <p className="text-white text-sm text-center">
                    {t(`sports.${sport}.description`)}
                  </p>
                </div>

                {/* Bandeau titre */}
                <div className="absolute bottom-0 w-full bg-emerald-900 bg-opacity-40 text-white text-center py-2 text-lg font-semibold">
                  {t(`sports.${sport}.name`)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Boutons navigation */}
        <button
          onClick={scrollPrev}
          className="absolute left-[-2rem] lg:left-[-3rem] top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-emerald-600 hover:scale-110 text-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-[-2rem] lg:right-[-3rem] top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-emerald-600 hover:scale-110 text-white p-2 rounded-full shadow-md"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}
