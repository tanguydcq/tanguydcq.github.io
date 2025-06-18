import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import React from 'react';

// Typage des props pour TimelineItem
interface TimelineItemProps {
    date: string;
    icon: React.ReactElement;
    title: string;
    subtitle?: string;
    description?: string;
    bgColor?: string;
}

function TimelineItem({
    date,
    icon,
    title,
    subtitle,
    description,
    bgColor = 'rgb(33, 150, 243)',
}: TimelineItemProps) {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--custom"
            date={date}
            contentStyle={{ background: bgColor, color: '#fff' }}
            contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
            iconStyle={{ background: bgColor, color: '#fff' }}
            icon={icon}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            {subtitle && <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>}
            {description && <p>{description}</p>}
        </VerticalTimelineElement>
    );
}


function ParcoursAcademiqueSection() {
    return (
        <section className="flex flex-col p-6 rounded-2xl w-full text-left">
            <VerticalTimeline>
                <TimelineItem
                    date="2023 - present"
                    icon={<SchoolIcon />}
                    title="EPITA"
                    subtitle="Paris"
                    description="Cycle ingénieur – Promotion 2026 Majeure SCIA-G : Data Science, Intelligence Artificielle et Graphes"
                    bgColor="rgb(156, 39, 176)"
                />
                <TimelineItem
                    date="2021-2023"
                    icon={<SchoolIcon />}
                    title="Prepa CPGE"
                    subtitle="Sainte Marie Antony"
                    description="Filière suivie : MPSI/MP"
                    bgColor="rgb(33, 150, 243)"
                />
                <TimelineItem
                    date="2020-2021"
                    icon={<SchoolIcon />}
                    title="Baccalauréat"
                    subtitle="Lakanal Sceaux"
                    description="Spécialités suivies : mathématiques et physique-chimie Options choisies : mathématiques expertes et sport"
                    bgColor="rgb(255, 87, 34)"
                />
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </section>
    );
}


function ParcoursProSection() {
    return (
        <section className="flex flex-col p-6 rounded-2xl w-full text-left">
            <VerticalTimeline>
                <TimelineItem
                    date="Septembre 2024 - janvier 2025"
                    icon={<SchoolIcon />}
                    title="Stage mi- étude"
                    subtitle="DiliTrust La Défense"
                    description="Développement d’un agent intelligent en Python intégrant l’API ChatGPT pour automatiser la génération de documentation technique, avec interface Slack et scraping de données multi-sources Classification de contrats via LLM interne à l’aide de prompts multi-étapes optimisés, pour généraliser les types de documents non vus lors de l’entraînement initial"
                    bgColor="rgb(156, 39, 176)"
                />
                <TimelineItem
                    date="Depuis avril 2023"
                    icon={<WorkIcon />}
                    title="Co-créateur Sterenova"
                    subtitle="Paris"
                    description="Fondateur de Sterenova évènementiel et location de matériel planification d'évènement gestion d'entreprise"
                    bgColor="rgb(33, 150, 243)"
                />
                <TimelineItem
                    date="Août 2022"
                    icon={<WorkIcon />}
                    title="Serveur/Barman"
                    subtitle="Marius Café Pornic"
                    description=""
                    bgColor="rgb(33, 150, 243)"
                />
                <TimelineItem
                    date="Mars 2021"
                    icon={<WorkIcon />}
                    title="Manutentionnaire"
                    subtitle="PSL France M.I.N Rungis"
                    description=""
                    bgColor="rgb(33, 150, 243)"
                />
                <TimelineItem
                    date="Août 2020"
                    icon={<WorkIcon />}
                    title="Magasinier au service Pièces de Rechange"
                    subtitle="Renault Retail Group Paris"
                    description=""
                    bgColor="rgb(33, 150, 243)"
                />
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </section>
    );
}


export function ParcoursComponent() {
    return (
        <div id="parcours" className="mb-8 mt-4 flex flex-col w-full justify-center">
            <h2 className="text-2xl text-cyan-400 font-semibold mb-2 pb-4 pl-5">Parcours</h2>
            <Tabs defaultValue="academique" className="w-full">
                <div className="flex justify-center w-full">
                    <TabsList className="grid w-96 grid-cols-2 gap-2">
                        <TabsTrigger 
                            value="academique"
                            className="px-2 py-1 text-sm data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:shadow-lg"
                        >
                            Académique
                        </TabsTrigger>
                        <TabsTrigger 
                            value="pro"
                            className="px-2 py-1 text-sm data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:shadow-lg"
                        >
                            Professionnel
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="academique">
                    <ParcoursAcademiqueSection />
                </TabsContent>
                <TabsContent value="pro">
                    <ParcoursProSection />
                </TabsContent>
            </Tabs>
        </div>
    )
}

