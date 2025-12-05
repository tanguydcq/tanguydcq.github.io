import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

export function SterenovaSection() {
    const { t } = useTranslation();

    const gallery = [
        { type: "image", src: "/images/sterenova/adam_tanguy.jpeg", alt: "Adam/Tanguy" },
        { type: "video", src: "/images/sterenova/soiree_paul.mp4", alt: "Visuel en soiree" },
        { type: "image", src: "/images/sterenova/tanguy.jpg", alt: "Montage solo" },
        { type: "video", src: "/images/sterenova/montage_pont.mp4", alt: "Montage du pont" },
        { type: "image", src: "/images/sterenova/tanguy_bis.jpeg", alt: "Montage solo bis" },
        { type: "image", src: "/images/sterenova/thomas_tanguy.jpeg", alt: "Thomas/Tanguy" },
        { type: "video", src: "/images/sterenova/bal_promo.mp4", alt: "Bal de promo" },
        { type: "image", src: "/images/sterenova/stuff.jpg", alt: "Stuff" }
    ];

    return (
        <section id="sterenova" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-background via-background/50 to-background"></div>
            <div className="absolute top-0 right-0 z-[-10] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"></div>

            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                    >
                        {t('sterenova.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="max-w-[800px] text-muted-foreground whitespace-pre-line text-lg"
                    >
                        {t('sterenova.intro')}
                    </motion.p>
                </div>

                {/* Slider mobile */}
                <div className="flex md:hidden overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
                    {gallery.map((item, i) => (
                        <div key={i} className="flex-shrink-0 w-72 snap-center">
                            <div className="rounded-xl overflow-hidden shadow-lg border border-border/50 aspect-square relative bg-card">
                                {item.type === "image" ? (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                ) : (
                                    <VideoHover src={item.src} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grid Desktop */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {gallery.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="aspect-square relative group"
                        >
                            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg hover:ring-2 hover:ring-primary/50 transition-all duration-300">
                                {item.type === "image" ? (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                ) : (
                                    <VideoHover src={item.src} />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Button size="lg" asChild className="group">
                        <a href="https://sterenova.fr/" target="_blank" rel="noopener noreferrer">
                            {t('sterenova.button')}
                            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function VideoHover({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = async () => {
        try {
            if (videoRef.current) {
                await videoRef.current.play();
            }
        } catch (e) {
            // Ignore play errors
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleClick = async () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            try {
                await videoRef.current.play();
            } catch (e) {
                // Ignore errors
            }
        } else {
            videoRef.current.pause();
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);

        video.addEventListener("play", onPlay);
        video.addEventListener("pause", onPause);

        return () => {
            video.removeEventListener("play", onPlay);
            video.removeEventListener("pause", onPause);
        };
    }, []);

    return (
        <div
            className="relative w-full h-full cursor-pointer group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <video
                ref={videoRef}
                src={src}
                muted
                loop
                className="w-full h-full object-cover"
                playsInline
            />
            <div
                className={`
                    absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent
                    transition-all duration-300
                    ${isPlaying ? "opacity-0" : "opacity-100"}
                `}
            >
                <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center backdrop-blur-sm shadow-lg">
                    <Play className="w-5 h-5 text-foreground ml-1" />
                </div>
            </div>
        </div>
    );
}
