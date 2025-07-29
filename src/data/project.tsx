export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  date?: string;
  link?: string;
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[éèêë]/g, "e")
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export const projects: Project[] = [
  {
    title: "Sterenova",
    slug: slugify("Sterenova"),
    description: `Sterenova vise à fournir des services d'événementiel complets ainsi que des solutions de location de matériel de qualité, répondant aux besoins divers et spécifiques de nos clients. Ce projet a pour le but de simplifier l'organisation d'événements en offrant un guichet unique pour toutes les nécessités, de la planification à la mise en œuvre, en passant par la location de matériel nécessaire.`,
    image: `${import.meta.env.BASE_URL}images/sterenova.jpg`,
    tags: ["Gestion", "Communication", "Évènementiel"],
    date: "2023-06-01"
  },
  {
    title: "Site Sterenova",
    slug: slugify("Site Sterenova"),
    description: "Développement du site web pour Sterenova",
    image: `${import.meta.env.BASE_URL}images/sterenova-site.jpg`,
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    date: "2023-06-10"
  },
  {
    title: "Agent IA ChatGPT",
    slug: slugify("Agent IA ChatGPT"),
    description: "Génération automatique de documentation technique avec Slack + scraping",
    image: `${import.meta.env.BASE_URL}images/agentia.jpg`,
    tags: ["Python", "OpenAI API", "LLM", "Slack"],
    date: "2024-01-15"
  },
  {
    title: "Classification de Contrats",
    slug: slugify("Classification de Contrats"),
    description: "LLM internes pour reconnaître des documents juridiques",
    image: `${import.meta.env.BASE_URL}images/contracts.jpg`,
    tags: ["NLP", "LLM", "Prompting", "Data Science"],
    date: "2024-03-12"
  },
  {
    title: "Mon Portfolio",
    slug: slugify("Mon Portfolio"),
    description: "Site web personnel pour présenter mes projets et compétences",
    image: `${import.meta.env.BASE_URL}images/portfolio.jpg`,
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    date: "2023-10-01"
  }
];

export const courseProjects: Project[] = [
  {
    title: "Générateur de musique",
    slug: slugify("Generateur de musique"),
    description: "Utilisation de BERT pour générer de la musique dans le cadre d'un projet de cours NLP",
    image: `${import.meta.env.BASE_URL}images/music-generator.jpg`,
    tags: ["Python", "BERT", "NLP"],
    date: "2022-11-01"
  },
  {
    title: "Classification d'images",
    slug: slugify("Classification d'images"),
    description: "Utilisation de CNN pour classifier des images de galaxies selon leur label",
    image: `${import.meta.env.BASE_URL}images/image-classification.jpg`,
    tags: ["Python", "TensorFlow", "CNN", "Machine Learning"],
    date: "2023-02-01"
  },
  {
    title: "Exploration de données",
    slug: slugify("Exploration de données"),
    description: "Analyse de données d'accidents de la route avec des modèles ML. Le dataset était massif et l'approche libre pour simuler un cadre réel.",
    image: `${import.meta.env.BASE_URL}images/image-accident.jpg`,
    tags: ["Python", "Spark", "Machine Learning", "Big Data"],
    date: "2023-04-01"
  },
  {
    title: "Mon Projet de Cours",
    slug: slugify("Mon Projet de Cours"),
    description: "Description de mon projet de cours",
    image: `${import.meta.env.BASE_URL}images/projet-cours.jpg`,
    tags: ["React", "TypeScript"],
    date: "2023-09-01"
  }
];
