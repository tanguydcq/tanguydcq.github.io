import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function HeroSection() {
    const { t } = useTranslation();
    const socialLinks = [
        { icon: Github, href: "https://github.com/tanguydcq", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/tanguy-ducrocq/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:tanguy.decq@gmail.com", label: "Email" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left"
                >
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative shrink-0"
                    >
                        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-background overflow-hidden shadow-2xl relative z-10">
                            <img
                                src={`${import.meta.env.BASE_URL}images/identite.jpg`}
                                alt="Tanguy Ducrocq"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10 transform scale-110" />
                    </motion.div>

                    {/* Text Content */}
                    <div className="space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block"
                        >
                            <span className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary/50 border-border backdrop-blur-sm">
                                {t('hero.status')}
                            </span>
                        </motion.div>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                            <span className="block text-foreground">Tanguy Ducrocq</span>
                        </h1>

                        <p className="text-lg text-muted-foreground md:text-xl">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 sm:flex-row">
                            <Button size="lg" className="group" asChild>
                                <a href="#projects">
                                    {t('hero.ctaProject')}
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="#contact">{t('hero.ctaContact')}</a>
                            </Button>
                        </div>

                        <div className="flex justify-center lg:justify-start gap-4 mt-8">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 transition-colors duration-200 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute transform -translate-x-1/2 bottom-8 left-1/2 hidden md:block"
            >
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-xs">{t('hero.scroll')}</span>
                    <div className="w-5 h-8 border-2 rounded-full border-muted-foreground/30 flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1 h-1 rounded-full bg-foreground"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
