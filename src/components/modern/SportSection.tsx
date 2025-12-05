import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function SportSection() {
    const { t } = useTranslation();
    const sports = ["tennis", "gym", "winterSports", "volley", "climbing"];
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 1.2,
            spacing: 0,
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 2.2, spacing: 0 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3.2, spacing: 0 },
            },
        },
    });

    return (
        <section id="sports" className="py-24 bg-card/30 border-y border-border/50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                    >
                        {t('sports.title')}
                    </motion.h2>
                </div>

                <div className="relative group/slider max-w-5xl mx-auto px-12">
                    <div className="overflow-hidden rounded-xl">
                        <div ref={sliderRef} className="keen-slider">
                            {sports.map((sport, index) => (
                                <motion.div
                                    key={index}
                                    className="keen-slider__slide px-3"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-[400px] border border-border/50 ring-offset-background transition-all hover:ring-2 hover:ring-ring focus:ring-2 focus:ring-ring focus:outline-none"
                                    >
                                        {/* Image */}
                                        <img
                                            src={t(`sports.${sport}.img`)}
                                            alt={t(`sports.${sport}.name`)}
                                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                                            loading="lazy"
                                        />

                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                                        {/* Content Overlay */}
                                        <div
                                            className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                        >
                                            <h3 className="text-2xl font-bold mb-4 text-foreground">{t(`sports.${sport}.name`)}</h3>
                                            <p className="text-center text-muted-foreground leading-relaxed">
                                                {t(`sports.${sport}.description`)}
                                            </p>
                                        </div>

                                        {/* Label (Visible when not open) */}
                                        <div className="absolute bottom-6 left-0 right-0 text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                                            <span className="text-2xl font-bold text-white drop-shadow-md">
                                                {t(`sports.${sport}.name`)}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons - Always Visible */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full hidden md:flex bg-background/80 backdrop-blur-sm z-10 shadow-md transform -translate-x-1/2"
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full hidden md:flex bg-background/80 backdrop-blur-sm z-10 shadow-md transform translate-x-1/2"
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
