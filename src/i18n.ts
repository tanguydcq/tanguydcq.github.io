import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            header: {
                presentation: "About Me",
                parcours: "My Journey",
                contact: "Contact Me"
            },
            about: {
                title: "About Me",
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
                            description: "Development of an intelligent agent in Python integrating the ChatGPT API to automate the generation of technical documentation, with Slack interface and multi-source data scraping Classification of contracts via internal LLM using optimized multi-step prompts, to generalize unseen document types during initial training",
                        },
                        1: {
                            title: "Co-founder",
                            date: "Since April 2023",
                            subtitle: "Sterenova",
                            description: "Founder of Sterenova events and equipment rental event planning corporate management",
                        },
                        2: {
                            title: "Server/Bartender",
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
            }
        }
    },
    fr: {
        translation: {
            header: {
                presentation: "À propos de moi",
                parcours: "Mon parcours",
                contact: "Me contacter"
            },
            about: {
                title: "À propos de moi",
                description: `Salut ! Moi c’est Tanguy, étudiant à EPITA en majeure SCIA-G (Data Science, IA & Graphes). Ce site, c’est un peu mon labo perso : j’y partage ce que j’apprends, ce que je construis, et ce qui m’inspire`
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
                            description: "Développement d’un agent intelligent en Python intégrant l’API ChatGPT pour automatiser la génération de documentation technique, avec interface Slack et scraping de données multi-sources Classification de contrats via LLM interne à l’aide de prompts multi-étapes optimisés, pour généraliser les types de documents non vus lors de l’entraînement initial",
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
            }
        }
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


