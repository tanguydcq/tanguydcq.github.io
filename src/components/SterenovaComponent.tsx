import { useTranslation } from "react-i18next";
import "../i18n";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default function SterenovaComponent() {
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
        <section id="sterenova" className="px-4 sm:px-6 md:px-10 py-8 w-full max-w-7xl mx-auto text-center">
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

            {/* Slider mobile */}
            <div className="flex md:hidden overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-none">
                {gallery.map((item, i) => (
                    <div key={i} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden snap-start">
                        <div className="relative aspect-[1/1]">
                            {item.type === "image" ? (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <VideoHover src={item.src} />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Grille desktop/tablette */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
                {gallery.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="overflow-hidden rounded-2xl shadow-lg bg-gray-900 relative group p-0">
                            <CardContent className="p-0 relative h-64">
                                {item.type === "image" ? (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    <VideoHover src={item.src} />
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Bouton */}
            <Link to={`https://sterenova.fr/`} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-gray-900 hover:bg-gray-500 mt-10">
                    <OpenInNewIcon className="text-gray-900" />
                    {t('sterenova.button')}
                </Button>
            </Link>
        </section>
    );
}
function VideoHover({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handleMouseEnter = async () => {
        try {
            if (videoRef.current) {
                await videoRef.current.play();
            }
        } catch (e) {
            // Ignore play errors (e.g., user gesture required)
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    // For mobile: play/pause on tap
    const handleClick = async () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            try {
                await videoRef.current.play();
            } catch (e) {
                // Ignore play errors
                console.warn("Video play failed, likely due to user gesture requirement.");
            }
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    // Listen for play/pause events to update state
    React.useEffect(() => {
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
                className="w-full h-full object-cover"
                preload="metadata"
                playsInline
            />
            <div
                className={`
                    absolute inset-0 flex items-center justify-center bg-black/30
                    transition-opacity duration-300
                    ${isPlaying ? "opacity-0" : "opacity-100"}
                `}
            >
                <Play className="w-12 h-12 text-white opacity-80" />
            </div>
        </div>
    );
}
