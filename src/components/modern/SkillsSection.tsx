import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Terminal, Cpu, Globe, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SkillsSection() {
    const { t } = useTranslation();
    const skillsCategories = [
        {
            title: t("skills.categories.data"),
            icon: Cpu,
            skills: [
                "Machine Learning", "Deep Learning", "LLM", "Generative AI",
                "Computer Vision", "NLP", "MLOps", "Recommender Systems",
                "PyTorch", "Scikit-learn", "Pandas"
            ]
        },
        {
            title: t("skills.categories.software"),
            icon: Terminal,
            skills: [
                "Python", "C++", "Java", "C", "SQL",
                "React", "TypeScript", "Node.js", "FastAPI", "PostgreSQL"
            ]
        },
        {
            title: t("skills.categories.devops"),
            icon: Server,
            skills: ["Git", "Docker", "Linux", "CI/CD", "VS Code"]
        },
        {
            title: t("skills.categories.softSkills"),
            icon: Users,
            skills: [
                "Project Management", "Business Development", "Client Relations",
                "Team Management", "Communication", "Adaptability"
            ]
        },
        {
            title: t("skills.categories.languages"),
            icon: Globe,
            skills: ["Français (Natif)", "Anglais (Courant)"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{t("skills.title")}</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground">
                        {t("skills.description")}
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {skillsCategories.map((category, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full transition-colors hover:border-primary/50">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {category.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
