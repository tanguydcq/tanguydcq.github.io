import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

interface TimelineItemProps {
    date: string;
    title: string;
    subtitle: string;
    description?: string;
    icon: React.ElementType;
}

function TimelineItem({ date, title, subtitle, description, icon: Icon }: TimelineItemProps) {
    return (
        <div className="relative pl-8 pb-8 last:pb-0 group">
            {/* Line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border group-last:bottom-auto group-last:h-2" />

            {/* Dot */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full border bg-background flex items-center justify-center z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <Icon className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
                <div className="mb-2 sm:mb-0 sm:w-[180px] sm:shrink-0">
                    <Badge variant="secondary" className="font-normal text-xs flex w-fit gap-1 items-center whitespace-normal text-left leading-tight h-auto py-1">
                        <Calendar className="w-3 h-3 shrink-0" /> <span className="flex-1">{date}</span>
                    </Badge>
                </div>

                <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-lg leading-none">{title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-1" /> {subtitle}
                    </div>
                    {description && !description.includes('parcours.') && (
                        <p className="text-muted-foreground mt-2 text-sm whitespace-pre-line leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export function AboutSection() {
    const { t } = useTranslation();

    // Helper to safely get array from translation, or fallback to manual keys if needed
    // Since we know the structure, we can map manually or use t(..., {returnObjects: true}) cast
    // Let's rely on constructing the lists based on the known keys to ensure type safety without complex casting

    const academicItems = [0, 1, 2].map(i => ({
        date: t(`parcours.academicJourney.items.${i}.date`),
        title: t(`parcours.academicJourney.items.${i}.title`),
        subtitle: t(`parcours.academicJourney.items.${i}.subtitle`),
        description: t(`parcours.academicJourney.items.${i}.description`),
        icon: GraduationCap
    }));

    const professionalItems = [0, 1, 2, 3, 4, 5].map(i => ({
        date: t(`parcours.professionalJourney.items.${i}.date`),
        title: t(`parcours.professionalJourney.items.${i}.title`),
        subtitle: t(`parcours.professionalJourney.items.${i}.subtitle`),
        description: t(`parcours.professionalJourney.items.${i}.description`),
        icon: Briefcase
    }));

    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{t('parcours.title')}</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground hidden">
                        My journey in technology and engineering.
                    </p>
                </motion.div>

                <Card className="max-w-6xl mx-auto bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 sm:p-10">
                        <Tabs defaultValue="academic" className="w-full">
                            <div className="flex justify-center mb-8">
                                <TabsList className="grid w-full sm:w-[400px] grid-cols-2">
                                    <TabsTrigger value="academic" className="gap-2">
                                        <GraduationCap className="w-4 h-4" />
                                        {t('parcours.academicJourney.title')}
                                    </TabsTrigger>
                                    <TabsTrigger value="professional" className="gap-2">
                                        <Briefcase className="w-4 h-4" />
                                        {t('parcours.professionalJourney.title')}
                                    </TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="academic">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-background rounded-xl p-6 border border-border/50 shadow-sm"
                                >
                                    {academicItems.map((item, index) => (
                                        <TimelineItem key={index} {...item} />
                                    ))}
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="professional">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-background rounded-xl p-6 border border-border/50 shadow-sm"
                                >
                                    {professionalItems.map((item, index) => (
                                        <TimelineItem key={index} {...item} />
                                    ))}
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
