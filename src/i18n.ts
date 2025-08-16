import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        presentation: "Home",
        parcours: "My Journey",
        projects: "My Projects",
        contact: "Contact Me",
        backhome: "Back to Home",
        persoProjects: "Enterprise & Personal Projects",
        courseProjects: "Course Projects",
        link: "Link",
        seeMore: "More",
      },
      about: {
        title: "Home",
        description: `Hi! I'm Tanguy, a student at EPITA majoring in SCIA-G (Data Science, AI & Graphs).
        This site is kind of my personal lab:
        I share what I learn, what I build, and what inspires me here.`,
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
              description:
                `Engineering cycle – Class of 2026
                Major SCIA-G: Data Science, Artificial Intelligence and Graphs`,
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
              description:
                `Specializations: mathematics and physics-chemistry
                Options: expert mathematics and sport`,
            },
          },
        },
        professionalJourney: {
          title: "Professional",
          items: {
            0: {
              title: "Internship",
              date: "September 2024 - January 2025",
              subtitle: "DiliTrust La Défense",
              description:
                `Part of the ML team at DiliTrust
                Working on intelligent agents and automation of document-related tasks.`,
            },
            1: {
              title: "Co-founder",
              date: "Since April 2023",
              subtitle: "Sterenova",
              description:
                "Founder of Sterenova events and equipment rental event planning corporate management",
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
            },
          },
        },
      },
      projects: {
        sterenovaSite: {
          title: "Sterenova WebSite",
          description: "Development of the website for Sterenova",
          longDescription: `I built this website using React, Vite, TypeScript, and the shadcn UI library. The goal was to create a clean and modern showcase for what we do.
We offer sound and lighting equipment rentals, as well as full DJ services for all kinds of events: birthdays, weddings, rally parties, classic parties, and more.
We DJ ourselves, adapt to the vibe you're looking for, and handle the technical side to make sure everything runs smoothly.
The website gives an overview of our services and includes practical info to get in touch with us.`,
        },
        agentIA: {
          title: "AI Agent ChatGPT",
          description:
            "Automatic generation of documentation with Slack + scraping",
          longDescription: `As part of my internship, I developed an automatic technical documentation generator.
The goal was to centralize and produce documentation by gathering content from various sources using web scraping.
I then used the ChatGPT API to generate structured texts based on that data, by designing prompts tailored to the type of information collected.
Once the service was ready, I integrated it into Slack as a bot, making it accessible to the entire team.
This project helped save time on writing and updating internal documents, while making information easier to access for everyone.`,
        },
        classificationContrats: {
          title: "Contract Classification",
          description: "Internal LLMs to recognize legal documents",
          longDescription: `During my internship, I worked on a project focused on automatic contract classification using the ChatGPT API.
The goal was to categorize contracts by type (service agreements, NDAs, partnership contracts, etc.) to simplify sorting and management.

I designed a multi-step pipeline, relying on crafted prompts to guide the LLM through its reasoning process.
The first step involved extracting key elements from the raw contract content. Then, the model would determine the contract type based on legal and structural cues.
I implemented a grouping system to organize contracts into broader categories, while handling ambiguous or conflicting cases through follow-up prompts designed to clarify context.

One of the key advantages of this approach is that it avoids the need to train a supervised model on a specific dataset.
Instead, it generalizes much better to new types of contracts even those with different formats or structures by focusing on content rather than layout.
The use of targeted prompts allows the LLM to adapt to a wide variety of documents while maintaining consistent and reliable classification.

This project laid the foundation for an internal tool capable of automating a typically manual task, while keeping the logic transparent and explainable throughout the process.`,
        },
        portfolio: {
          title: "My Portfolio",
          description: "Personal website to showcase my projects and skills",
          longDescription:
            "This portfolio website serves as a showcase for my projects and skills, highlighting my work and achievements in the field.",
        },
      },
      courseProjects: {
        pfee: {
          title: "PFEE",
          description:
            "AI-based football match analysis tool with player detection, ID tracking, and statistics generation from videos for amateur clubs.",
          longDescription: `In this ongoing project, we are developing an AI-based tool to automatically analyze football matches from videos, with a clear goal: to provide detailed statistics to amateur clubs, which often lack advanced technological means.
The first phase focuses on player tracking. We are using YOLOv11, the latest version of the well-known object detection model. Player tracking is done in three main steps:
Initial object detection (players, ball, referees) on each frame using YOLO.
Inter-frame tracking based on spatial proximity: if two detected objects in consecutive frames are close, we consider them to be the same player. This step relies on the "classic" tracking integrated into YOLO.
Re-identification (Re-ID): to handle cases where a player leaves and returns to the camera view, we generate a unique embedding for each player to assign a constant ID throughout the match, even after temporary disappearance.
We are using the SoccerNet dataset, which provides a large number of annotated videos, allowing us to evaluate our tracking system in a supervised manner.
In addition to tracking, we have applied clustering techniques to:
Identify referees,
Determine which team each player belongs to.
These initial steps will lay the groundwork for the next phases of the project, which will aim to detect match events (passes, shots, fouls, etc.) and automatically generate statistics that can be used by coaches and clubs.`,
        },
        musicGenerator: {
          title: "Music Generator",
          description:
            "Using BERT to generate music as part of a NLP course project",
          longDescription: `As part of an NLP project, I worked on a melody generator inspired by natural language processing concepts.
The idea was to treat music like a sequence of symbols, considering notes as letters or words, and predict the next note in a melody, similar to predicting the next word in a sentence.

The input consists of a chord progression (for example: G, A, D, Em). For each chord, we extract the notes of its arpeggio, which forms a coherent harmonic base.
From this base, the goal is to generate a melodic line that stays musical, respecting the chord progression while allowing for some variation.

To model the sequence, I used a BERT-based model adapted to this musical representation.
BERT is typically used to understand context within sentences; here, it is applied to understand the “harmonic context” and suggest the most relevant next note, step by step.
Thanks to this approach, we obtain melodies grounded in the given chords, while still leaving room for creative melodic continuation.`,
        },
        imageClassification: {
          title: "Image Classification",
          description:
            "Using CNNs to classify images as part of an image classification course project",
          longDescription: `In this project, I created a convolutional neural network (CNN) to classify ten different types of galaxies based on their photos.
I worked with a labeled image dataset, which allowed me to train the model in a supervised manner.

The CNN is well suited for this type of visual data due to its ability to automatically extract important features from images (shapes, textures, patterns) without the need for manual feature engineering.
I designed and trained a model capable of recognizing subtle differences between galaxy types by tuning convolutional layers, pooling layers, and fully connected layers to optimize performance.

The process also included an image preprocessing phase (resizing, normalization).
After several iterations and hyperparameter tuning, the model achieved good classification accuracy.
You can find a detailed report of this work here:`,
        },
        dataExploration: {
          title: "Data Exploration",
          description: "Data analysis for a data science course project",
          longDescription: `For this data exploration project, I chose to work with a dataset related to volleyball.
The goal was to explore various questions around both individual and team performance in the sport.

I focused on three main questions:
Who are the most high-performing players?
Does a player’s height influence their position on the court?
What are the key factors that determine a team’s victory?

The work involved preparing and cleaning the data, profiling the dataset, and creating visualizations to better understand emerging patterns.
Based on initial results, we iterated by refining the questions and digging deeper into the analysis.

This project offers a detailed look into how volleyball works from a data-driven perspective, highlighting key aspects for both players and teams.
You can find a full report detailing the entire analysis here:`,
        },
        dataScience: {
          title: "Road Accident Analysis and Prediction",
          description:
            "Road accident analysis and prediction using real-world data",
          longDescription: `As part of this project, I worked on a dataset related to road accidents, with the goal of understanding the factors that influence their severity, frequency, or location, and exploring predictive approaches using machine learning.

The project followed several key steps: data cleaning and preprocessing, exploratory analysis and visualizations, followed by modeling using both supervised and unsupervised approaches.
One of the initial questions explored was: can we predict the severity of an accident? Beyond that, we also investigated other angles and insights from the data.

Several models were tested, compared, and evaluated using appropriate metrics, and the results were interpreted through clear visualizations.

This project combines skills in data processing, machine learning, and visualization to extract meaningful insights from real-world data.
You can find all the details of the analysis and results in the following report:
`,
        },
      },
      sterenova: {
        title: "Sterenova – Custom Events",
        intro: `We’re three friends with a shared passion: music, lights, and mixing.
At first, we only had a bit of gear and a lot of enthusiasm. But gig after gig, we upgraded our setup, learned along the way, and watched our project grow with us.
Today, we bring all of that to your events—birthdays, weddings, rally nights, or just a get-together with friends. We handle the music, the lighting, and all the technical stuff so you can just enjoy the moment without worrying about anything.
Basically, we make sure your night feels the way we’d want ours to be: simple, smooth, and unforgettable.`,
button: "Our Website"
      },
      sports: {
        title: "My Sports",
        gym: {
          name: "Bodybuilding",
          img: "/images/sports/gym_43.jpg",
          description: "I've been weight training for a little over two years, sometimes alone, sometimes with friends. It's a great way to stay in shape and helps me stay consistent in everything I do."
        },
        tennis: {
          name: "Tennis",
          img: "/images/sports/tennis_43.jpg",
          description: "I have been playing tennis for about 15 years, and I have risen to a ranking of 15/3 in France. I love the competitive spirit it brings and the mental work that this sport requires."
        },
        climbing: {
          name: "Climbing",
          img: "/images/sports/climbing_43.jpg",
          description: "I started climbing in high school and even competed in the county competition during my senior year. Nowadays, I prefer climbing mountains on natural routes."
        },
        winterSports: {
          name: "Winter Sports",
          img: "/images/sports/snowboard_43.jpg",
          description: "I started skiing at a very young age, then took up snowboarding in recent years. I love speed and doing tricks on the slopes."
        },
        volley: {
          name: "Volleyball",
          img: "/images/sports/volley_43.jpg",
          description: "I played for two years in a club. It's a fun team sport, which is a change from the more solitary sports I usually play."
        }
      }
    },
  },
  fr: {
    translation: {
      header: {
        presentation: "Acceuil",
        parcours: "Mon parcours",
        projects: "Mes projets",
        contact: "Me contacter",
        backhome: "Retour à l'accueil",
        persoProjects: "Projets entreprise & personnels",
        courseProjects: "Projets de cours",
        link: "Lien",
        seeMore: "Voir plus",
      },
      about: {
        title: "Acceuil",
        description: `Bonjour! Moi c’est Tanguy, étudiant à EPITA en majeure SCIA-G (Data Science, IA & Graphes).
        Ce site, c’est un peu mon labo perso :
        J’y partage ce que j’apprends, ce que je construis, et ce qui m’inspire.`,
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
              description:
                `Cycle ingénieur – Promotion 2026
                Majeure SCIA-G : Data Science, Intelligence Artificielle et Graphes`,
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
              description:
                "Spécialités suivies : mathématiques et physique-chimie Options choisies : mathématiques expertes et sport",
            },
          },
        },
        professionalJourney: {
          title: "Professionnel",
          items: {
            0: {
              date: "Septembre 2024 - janvier 2025",
              title: "Stage mi- étude",
              subtitle: "DiliTrust La Défense",
              description:
                "Membre de l’équipe ML chez DiliTrust, impliqué dans le développement d’agents intelligents et l’automatisation de tâches liées au traitement de documents.",
            },
            1: {
              date: "Depuis avril 2023",
              title: "Co-créateur Sterenova",
              subtitle: "Paris",
              description:
                "Fondateur de Sterenova évènementiel et location de matériel planification d'évènement gestion d'entreprise",
            },
            2: {
              date: "Août 2022",
              title: "Serveur/Barman",
              subtitle: "Marius Café Pornic",
            },
            3: {
              date: "Mars 2021",
              title: "Manutentionnaire",
              subtitle: "PSL France M.I.N Rungis",
            },
            4: {
              date: "Août 2020",
              title: "Magasinier au service Pièces de Rechange",
              subtitle: "Renault Retail Group Paris",
            },
          },
        },
      },
      projects: {
        sterenovaSite: {
          title: "Site Internet Sterenova",
          description: "Développement du site web pour Sterenova",
          longDescription: `J’ai créé ce site avec React, TypeScript et la librairie UI shadcn. L’idée, c’était d’avoir une vitrine claire et moderne pour présenter notre activité.
On propose de la location de matériel son et lumière, mais aussi des prestations complètes pour animer différents types d’événements : anniversaires, mariages, soirées rallye, soirées classiques, etc.
On mixe en tant que DJ, on s’adapte à l’ambiance souhaitée et on s’occupe de la partie technique pour que tout se passe au mieux.
Le site est là pour donner un aperçu de ce qu’on fait, avec quelques infos pratiques pour nous contacter.`,
        },
        agentIA: {
          title: "Agent IA ChatGPT",
          description:
            "Génération automatique de documentation avec Slack + scraping",
          longDescription: `Dans le cadre de mon stage, j’ai développé un générateur de documentation technique.
L’objectif était de centraliser et produire automatiquement de la documentation à partir de différentes sources, en utilisant du scrapping pour récupérer les contenus.
J’ai ensuite utilisé l’API de ChatGPT pour générer des textes structurés à partir de ces données, en construisant des prompts adaptés selon le type d’information récupérée.
Une fois le service en place, je l’ai intégré à Slack sous forme de bot, accessible à tous les membres de l’équipe.
Ce projet a permis de gagner du temps sur la rédaction et la mise à jour des documents internes, tout en rendant l’accès à l’info plus simple pour tout le monde.`,
        },
        classificationContrats: {
          title: "Classification de Contrats",
          description: "LLM internes pour reconnaître des documents juridiques",
          longDescription: `Pendant mon stage, j’ai travaillé sur un projet de classification automatique de contrats à l’aide de l’API de ChatGPT.
L’objectif était de catégoriser des contrats selon leur type (prestations, confidentialité, partenariats, etc.), afin de faciliter leur tri et leur gestion.

J’ai conçu un pipeline en plusieurs étapes, en m’appuyant sur des prompts définis pour guider le LLM dans son raisonnement.
La première étape consistait à extraire les éléments clés du contrat à partir de son contenu brut. Ensuite, le modèle évaluait le type de contrat en se basant sur des critères juridiques ou structurels.
J’ai mis en place un système de regroupement par familles de contrats, tout en gérant les cas ambigus ou conflictuels via des relances ciblées ou des prompts supplémentaires permettant de préciser le contexte.

Un des avantages de cette approche est qu’elle ne nécessite pas d’entraîner un modèle supervisé sur un jeu de données spécifique.
Cela permet de s’adapter beaucoup plus facilement à de nouveaux contrats ayant une structure ou une mise en forme différente, tout en maintenant une classification cohérente.
L’utilisation de prompts bien construits permet au LLM de s’appuyer sur le fond plutôt que sur la forme, ce qui améliore la capacité de généralisation du système.

Ce projet a permis de poser les bases d’un outil interne capable d’automatiser une tâche normalement très manuelle, tout en gardant une logique transparente et explicable dans le traitement des documents.`,
        },
        portfolio: {
          title: "Mon Portfolio",
          description:
            "Site web personnel pour présenter mes projets et compétences",
          longDescription:
            "Ce site web portfolio sert de vitrine pour mes projets et compétences, mettant en avant mon travail et mes réalisations dans le domaine.",
        },
      },
      courseProjects: {
        pfee: {
          title: "PFEE",
          description:
            "Outil d’analyse automatique de matchs de football basé sur l’IA, avec détection des joueurs, suivi par ID et génération de statistiques à partir de vidéos, destiné aux clubs amateurs.",
          longDescription: `Dans ce projet toujours en cours, nous développons un outil basé sur l’intelligence artificielle pour analyser automatiquement les matchs de football à partir de vidéos, avec un objectif clair : fournir des statistiques détaillées aux clubs amateurs, souvent dépourvus de moyens technologiques avancés.
La première phase du projet se concentre sur le tracking des joueurs. Pour cela, nous utilisons YOLOv11, la dernière version du célèbre modèle de détection d’objets. Le suivi des joueurs se fait en trois étapes principales :
Détection initiale des objets (joueurs, ballon, arbitres) sur chaque frame grâce à YOLO.
Tracking inter-frames basé sur la proximité spatiale : si deux objets détectés sur des images consécutives sont proches, on considère qu’il s’agit du même joueur. Cette étape repose sur le tracking "classique" intégré à YOLO.
Re-identification (Re-ID) : pour gérer les cas où un joueur quitte et revient dans le champ de la caméra, nous générons un embedding unique pour chaque joueur afin de lui attribuer un ID constant tout au long du match, même après disparition temporaire.

Nous utilisons le dataset SoccerNet, qui propose un grand nombre de vidéos annotées, ce qui nous permet d’évaluer notre système de tracking de façon supervisée.
En complément du tracking, nous avons appliqué des techniques de clustering pour :
Identifier les arbitres,
Déterminer à quelle équipe appartient chaque joueur.
Ces premières étapes poseront les bases pour les phases suivantes du projet, qui viseront à détecter des événements de match (passes, tirs, fautes, etc.) et à générer automatiquement des statistiques exploitables pour les entraîneurs et clubs.`,
        },
        musicGenerator: {
          title: "Générateur de musique",
          description:
            "Utilisation de BERT pour générer de la musique dans le cadre d'un projet de cours NLP",
          longDescription: `Dans le cadre d’un projet en NLP, j’ai travaillé sur un générateur de mélodies basé sur un fonctionnement similaire à celui du traitement du langage naturel.
L’idée était d’aborder la musique comme une séquence de symboles, en considérant les notes comme des lettres ou des mots, pour ensuite prédire la prochaine note d’une mélodie, un peu comme on prédit le mot suivant dans une phrase.

En entrée, le modèle prend une grille d’accords (par exemple : G, A, D, Em). Pour chaque accord, on extrait les notes de son arpège, ce qui forme une base harmonique cohérente.
À partir de cette base, le but est de générer une ligne mélodique qui reste musicale, en respectant la progression d’accords tout en ayant une certaine variation.

Pour modéliser la séquence, j’ai utilisé un modèle de type BERT, adapté à cette représentation musicale.
BERT est généralement utilisé pour comprendre le contexte dans une phrase : ici, il est utilisé pour comprendre le "contexte harmonique" et proposer la suite la plus pertinente note par note.
Grâce à cette approche, on obtient une mélodie qui s’ancre dans les accords donnés, tout en laissant place à une certaine créativité dans la suite mélodique.`,
        },
        imageClassification: {
          title: "Classification d'images",
          description:
            "Utilisation de CNN pour classifier des images dans le cadre d'un projet de cours de classification d'images",
          longDescription: `Lors de ce projet, j’ai creer un réseau de neurones convolutifs (CNN) pour classifier dix types différents de galaxies à partir de leur photos.
J’ai travaillé avec un dataset d’images labellisées, ce qui m’a permis d’entraîner le modèle en supervision.

Le CNN est adapté à ce type de données visuelles, grâce à sa capacité à extraire des caractéristiques importantes dans les images (formes, textures, motifs) sans besoin de feature engineering manuel.
J’ai conçu et entraîné un modèle capable de reconnaître les différences subtiles entre les types de galaxies, en ajustant les couches convolutionnelles, de pooling et les couches fully connected pour optimiser les performances.

Le processus comprenait aussi une phase de prétraitement des images (redimensionnement, normalisation).
Après plusieurs itérations et ajustements d’hyperparamètres, le modèle a atteint une bonne précision de classification.
Vous pouvez retrouver un rapport détaillé de ce travail ici :
`,
        },
        dataExploration: {
          title: "Exploration de données",
          description:
            "Analyse de données pour un projet de cours de data science",
          longDescription: `Pour ce projet d’exploration de données, j'ai choisi de travailler sur un dataset lié au volleyball.
L’objectif était d’analyser différentes questions autour des performances individuelles et collectives dans ce sport.

J'ai gardé 3 questions:
Quels sont les joueurs les plus performants ?
La taille d’un joueur influence-t-elle le choix de son poste sur le terrain ?
Quels sont les facteurs clés qui déterminent la victoire d’une équipe ?

Le travail a consisté à préparer et nettoyer les données, réaliser un profil complet du dataset, puis créer des visualisations pour mieux comprendre les tendances.
À partir des premiers résultats, nous avons itéré en affinant les questions et en approfondissant l’analyse.

Ce projet permet d’explorer en détail le fonctionnement du volleyball à travers les données, en mettant en lumière des aspects importants tant pour les joueurs que pour les équipes.
Vous pouvez retrouver un rapport complet détaillant toute l’analyse ici :`,
        },
        dataScience: {
          title: "Data Science",
          description:
            "Analyse et prédiction des accidents de la route à partir de données réelles",
          longDescription: `Dans le cadre de ce projet, j’ai travaillé sur un dataset lié aux accidents de la route, avec pour objectif de comprendre les facteurs qui influencent leur gravité, leur fréquence ou leur localisation, et d’explorer des approches de prédiction à l’aide du machine learning.

Le projet s’est déroulé en plusieurs étapes : nettoyage et traitement des données, analyses exploratoires et visualisations, puis modélisation via des approches supervisées et non-supervisées.
L’une des premières questions étudiées était : peut-on prédire la sévérité d’un accident ? Mais nous avons également cherché à aller plus loin en explorant d’autres angles d’analyse.

Plusieurs modèles ont été testés, comparés et évalués à l’aide de métriques adaptées, et les résultats ont été interprétés à l’aide de visualisations.

Ce projet combine des compétences en traitement de données, machine learning, et visualisation pour tirer des enseignements concrets à partir de données réelles.
Vous pouvez retrouver tous les détails de l’analyse et des résultats dans le rapport suivant :`,
        },
      },
      sterenova: {
        title: "Sterenova – Événements sur mesure",
        intro: `On est trois amis avec une passion commune : le son, les lumières et les platines.
Au début, on avait juste un peu de matériel et beaucoup d’envie. Puis, de soirée en soirée, on s’est équipés, on a appris, et on a vu notre projet grandir avec nous.
Aujourd’hui, on met tout ça au service de vos événements : anniversaires, mariages, soirées rallye ou juste des moments entre proches. On s’occupe de la musique, des lumières et de toute la technique pour que vous puissiez profiter sans vous soucier de rien.
En gros, on fait en sorte que votre soirée se passe comme on aimerait vivre les nôtres : simple, fluide et mémorable.`,
        button: "Notre site"
      },
      sports: {
        title: "Mes Sports",
        gym: {
          name: "Musculation",
          img: "/images/sports/gym_43.jpg",
          description: "Je fais de la musculation depuis un peu plus de deux ans, parfois seul, parfois avec des amis. C’est un super moyen de rester en forme et ça m’aide à rester régulier dans tout ce que je fais."
        },
        tennis: {
          name: "Tennis",
          img: "/images/sports/tennis_43.jpg",
          description: "Je joue au tennis depuis environ 15 ans, et je suis monté jusqu’au classement 15/3 en France. J’adore l’esprit de compétition que ça apporte et le travail sur le mental que ce sport demande."
        },
        climbing: {
          name: "Escalade",
          img: "/images/sports/climbing_43.jpg",
          description: "J’ai commencé l’escalade au lycée et j’ai même participé à la compétition départementale ma dernière année. Aujourd’hui, je préfère grimper en montagne sur des voies naturelles."
        },
        winterSports: {
          name: "Sport d'hiver",
          img: "/images/sports/snowboard_43.jpg",
          description: "J’ai commencé le ski très jeune, puis je me suis mis au snowboard ces dernières années. J'aime la vitesse et faire des figures sur les pistes."
        },
        volley: {
          name: "Volleyball",
          img: "/images/sports/volley_43.jpg",
          description: "J’ai fait deux ans en club. C’est un sport d’équipe sympa qui change des sports plus solitaires que je pratique habituellement."
        }
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
