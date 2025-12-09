import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { useTranslation } from "react-i18next";

export function ContactSection() {
    const { t } = useTranslation();
    return (
        <section id="contact" className="py-20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="max-w-4xl mx-auto overflow-hidden bg-card/30 backdrop-blur-sm border-border/50">
                        <CardContent className="p-10 sm:p-16 text-center">
                            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">{t('contact.cta')}</h2>
                            <p className="max-w-2xl mx-auto mb-10 text-lg text-muted-foreground whitespace-pre-line">
                                {t('contact.text')}
                            </p>

                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
                                <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                                    <a href="mailto:tanguy.decq@gmail.com">
                                        <Mail className="w-5 h-5" />
                                        {t('contact.emailBtn')}
                                    </a>
                                </Button>
                                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2" asChild>
                                    <a
                                        href={`${import.meta.env.BASE_URL}images/cv/resume.pdf`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FileText className="w-5 h-5" />
                                        {t('contact.cvBtn')}
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                                    <a href="https://www.linkedin.com/in/tanguy-ducrocq/" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="w-5 h-5" />
                                        LinkedIn
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                                    <a href="https://github.com/tanguydcq" target="_blank" rel="noopener noreferrer">
                                        <Github className="w-5 h-5" />
                                        GitHub
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
