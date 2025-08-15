import { useTranslation } from "react-i18next";
import "../i18n";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react"; // icône play

export default function SterenovaSection() {
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
        <section className="px-4 sm:px-6 md:px-10 py-8 w-full max-w-7xl mx-auto text-center">
            <h1 className="py-10 text-3xl sm:text-4xl text-cyan-400 font-bold mb-6">
                {t('sterenova.title')}
            </h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-300 whitespace-pre-line"
            >
                {t('sterenova.intro')}
            </motion.p>

            {/* Slider pour mobile */}
            <div className="flex md:hidden overflow-x-auto gap-4 pb-4">
                {gallery.map((item, i) => (
                    <div key={i} className="min-w-[200px] flex-shrink-0">
                        {item.type === "image" ? (
                            <img src={item.src} alt={item.alt} className="rounded-2xl h-48 w-full object-cover" />
                        ) : (
                            <VideoHover src={item.src} alt={item.alt} />
                        )}
                    </div>
                ))}
            </div>

            {/* Grille pour tablette et desktop */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
                {gallery.map((item, i) => (
                    <Card key={i} className="overflow-hidden rounded-2xl shadow-lg bg-gray-900 relative group p-0">
                        <CardContent className="p-0 relative h-64">
                            {item.type === "image" ? (
                                <div className="relative w-full h-full">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <VideoHover src={item.src} alt={item.alt} />
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Bouton */}
            <div className="text-center mt-12">
                <a href="https://sterenova.fr/" target="_blank" rel="noopener noreferrer">
                    <Button
                        size="lg"
                        className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-8 py-3 text-lg"
                    >
                        {t('sterenova.button')}
                    </Button>
                </a>
            </div>
        </section>
    );
}

function VideoHover({ src }: { src: string; alt: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        videoRef.current?.play();
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="relative w-full h-48 cursor-pointer rounded-2xl overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                src={src}
                muted
                className="w-full h-full object-cover"
                preload="metadata"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <Play className="w-12 h-12 text-white opacity-80" />
            </div>
        </div>
    );
}
