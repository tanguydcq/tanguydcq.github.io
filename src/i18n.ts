import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            header: {
                presentation: "Home",
                parcours: "My Journey",
                projects: "My Projects",
                contact: "Contact Me",
                backhome: "Back to Home",
                persoProjects: "Personal Projects",
                courseProjects: "Course Projects",
                viewReport: "View Report"
            },
            about: {
                title: "Home",
                description: `Hi! I'm Tanguy, a student at EPITA majoring in SCIA-G (Data Science, AI & Graphs). This site is kind of my personal lab: I share what I learn, what I build, and what inspires me here.`
            },
            parcours: {
                title: "My Journey",
                academicJourney: {
                    title: "Academic",
                    items: {
                        0: {
                            title: "EPITA",
                            date: "2023 - present",
                            subtitle: "Paris",
                            description: "Engineering cycle – Class of 2026 Major SCIA-G: Data Science, Artificial Intelligence and Graphs",
                        },
                        1: {
                            title: "CPGE Prep",
                            date: "2021-2023",
                            subtitle: "Sainte Marie Antony",
                            description: "Field of study: MPSI/MP",
                        },
                        2: {
                            title: "Baccalaureate",
                            date: "2020-2021",
                            subtitle: "Lakanal Sceaux",
                            description: "Specializations: mathematics and physics-chemistry Options: expert mathematics and sport",
                        }
                    }
                },
                professionalJourney: {
                    title: "Professional",
                    items: {
                        0: {
                            title: "Internship",
                            date: "September 2024 - January 2025",
                            subtitle: "DiliTrust La Défense",
                            description: "Part of the ML team at DiliTrust, working on intelligent agents and automation of document-related tasks.",
                        },
                        1: {
                            title: "Co-founder",
                            date: "Since April 2023",
                            subtitle: "Sterenova",
                            description: "Founder of Sterenova events and equipment rental event planning corporate management",
                        },
                        2: {
                            title: "Waiter/Bartender",
                            date: "August 2022",
                            subtitle: "Marius Café Pornic",
                        },
                        3: {
                            title: "Warehouse Worker",
                            date: "March 2021",
                            subtitle: "PSL France M.I.N Rungis",
                        },
                        4: {
                            title: "Spare Parts Warehouseman",
                            date: "August 2020",
                            subtitle: "Renault Retail Group Paris",
                        }
                    }
                }
            },
            projects: {
                // sterenova: {
                //     title: "Sterenova",
                //     description: `Sterenova aims to provide comprehensive event services as well as quality equipment rental solutions, meeting the diverse and specific needs of our clients. This project aims to simplify event organization by offering a one-stop shop for all necessities, from planning to implementation, including the rental of necessary equipment.`
                // },
                sterenovaSite: {
                    title: "Sterenova Site",
                    description: "Development of the website for Sterenova",
                    longDescription: "The Sterenova site is designed to provide users with a comprehensive overview of the services offered by Sterenova, including event planning and equipment rental."
                },
                agentIA: {
                    title: "AI Agent ChatGPT",
                    description: "Automatic generation of technical documentation with Slack + scraping",
                    longDescription: "This project involves the use of AI to automatically generate technical documentation by integrating with Slack and utilizing web scraping techniques."
                },
                classificationContrats: {
                    title: "Contract Classification",
                    description: "Internal LLMs to recognize legal documents",
                    longDescription: "This project focuses on using internal large language models (LLMs) to accurately identify and classify legal documents." 
                },
                portfolio: {
                    title: "My Portfolio",
                    description: "Personal website to showcase my projects and skills",
                    longDescription: "This portfolio website serves as a showcase for my projects and skills, highlighting my work and achievements in the field."
                },
            },
            courseProjects: {
                musicGenerator: {
                    title: "Music Generator",
                    description: "Using BERT to generate music as part of a NLP course project"
                },
                imageClassification: {
                    title: "Image Classification",
                    description: "Using CNNs to classify images as part of an image classification course project"
                },
                dataExploration: {
                    title: "Data Exploration",
                    description: "Data analysis for a data science course project"
                },
                dataScience: {
                    title: "Data Science",
                    description: "Data science project using advanced data analysis techniques"
                }
            }
            
        }
    },
    fr: {
        translation: {
            header: {
                presentation: "Acceuil",
                parcours: "Mon parcours",
                projects: "Mes projets",
                contact: "Me contacter",
                backhome: "Retour à l'accueil",
                persoProjects: "Projets personnels",
                courseProjects: "Projets de cours",
                viewReport: "Voir le rapport"
            },
            about: {
                title: "Acceuil",
                description: `Bonjour! Moi c’est Tanguy, étudiant à EPITA en majeure SCIA-G (Data Science, IA & Graphes). Ce site, c’est un peu mon labo perso : j’y partage ce que j’apprends, ce que je construis, et ce qui m’inspire`
            },
            parcours: {
                title: "Mon parcours",
                academicJourney: {
                    title: "Académique",
                    items: {
                        0: {
                            title: "EPITA",
                            date: "2023 - présent",
                            subtitle: "Paris",
                            description: "Cycle ingénieur – Promotion 2026 Majeure SCIA-G : Data Science, Intelligence Artificielle et Graphes",
                        },
                        1: {
                            title: "Prépa CPGE",
                            date: "2021-2023",
                            subtitle: "Sainte Marie Antony",
                            description: "Filière suivie : MPSI/MP",
                        },
                        2: {
                            title: "Baccalauréat",
                            date: "2020-2021",
                            subtitle: "Lakanal Sceaux",
                            description: "Spécialités suivies : mathématiques et physique-chimie Options choisies : mathématiques expertes et sport",
                        }
                    }
                },
                professionalJourney: {
                    title: "Professionnel",
                    items: {
                        0: {
                            date: "Septembre 2024 - janvier 2025",
                            title: "Stage mi- étude",
                            subtitle: "DiliTrust La Défense",
                            description: "Membre de l’équipe ML chez DiliTrust, impliqué dans le développement d’agents intelligents et l’automatisation de tâches liées au traitement de documents.",
                        },
                        1: {
                            date: "Depuis avril 2023",
                            title: "Co-créateur Sterenova",
                            subtitle: "Paris",
                            description: "Fondateur de Sterenova évènementiel et location de matériel planification d'évènement gestion d'entreprise",
                        },
                        2: {
                            date: "Août 2022",
                            title: "Serveur/Barman",
                            subtitle: "Marius Café Pornic"
                        },
                        3: {
                            date: "Mars 2021",
                            title: "Manutentionnaire",
                            subtitle: "PSL France M.I.N Rungis"
                        },
                        4: {
                            date: "Août 2020",
                            title: "Magasinier au service Pièces de Rechange",
                            subtitle: "Renault Retail Group Paris"
                        }
                    }
                }
            },
            projects: {
                // sterenova: {
                //     title: "Sterenova",
                //     description: `Sterenova vise à fournir des services d'événementiel complets ainsi que des solutions de location de matériel de qualité, répondant aux besoins divers et spécifiques de nos clients. Ce projet a pour le but de simplifier l'organisation d'événements en offrant un guichet unique pour toutes les nécessités, de la planification à la mise en œuvre, en passant par la location de matériel nécessaire.`,
                // },
                sterenovaSite: {
                    title: "Site Sterenova",
                    description: "Développement du site web pour Sterenova",
                    longDescription: "Le site Sterenova est conçu pour fournir aux utilisateurs un aperçu complet des services offerts par Sterenova, y compris la planification d'événements et la location de matériel."
                },
                agentIA: {
                    title: "Agent IA ChatGPT",
                    description: "Génération automatique de documentation technique avec Slack + scraping",
                    longDescription: "Ce projet implique l'utilisation de l'IA pour générer automatiquement de la documentation technique en intégrant Slack et en utilisant des techniques de scraping web."
                },
                classificationContrats: {
                    title: "Classification de Contrats",
                    description: "LLM internes pour reconnaître des documents juridiques",
                    longDescription: "Ce projet se concentre sur l'utilisation de modèles de langage de grande taille (LLM) internes pour identifier et classer avec précision des documents juridiques."
                },
                portfolio: {
                    title: "Mon Portfolio",
                    description: "Site web personnel pour présenter mes projets et compétences",
                    longDescription: "Ce site web portfolio sert de vitrine pour mes projets et compétences, mettant en avant mon travail et mes réalisations dans le domaine."
                },
            },
            courseProjects: {
                musicGenerator: {
                    title: "Générateur de musique",
                    description: "Utilisation de BERT pour générer de la musique dans le cadre d'un projet de cours NLP"
                },
                imageClassification: {
                    title: "Classification d'images",
                    description: "Utilisation de CNN pour classifier des images dans le cadre d'un projet de cours de classification d'images"
                },
                dataExploration: {
                    title: "Exploration de données",
                    description: "Analyse de données pour un projet de cours de data science"
                },
                dataScience: {
                    title: "Data Science",
                    description: "Projet de data science utilisant des techniques avancées d'analyse de données"
                }
            }
        }
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


