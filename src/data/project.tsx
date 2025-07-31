export interface Project {
  slug: string;
  image: string;
  tags: string[];
  date?: string;
  link?: string;
  translationKey: string;
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[éèêë]/g, "e")
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export const projects: Project[] = [
  // {
  //   slug: slugify("Sterenova"),
  //   image: `${import.meta.env.BASE_URL}images/sterenova.jpg`,
  //   tags: ["Gestion", "Communication", "Évènementiel"],
  //   date: "2023-06-01",
  //   translationKey: "projects.sterenova"
  // },
  {
    slug: slugify("Site Sterenova"),
    image: `${import.meta.env.BASE_URL}images/project/sterenova_site.png`,
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    date: "2023-06-10",
    translationKey: "projects.sterenovaSite"
  },
  {
    slug: slugify("Agent IA ChatGPT"),
    image: `${import.meta.env.BASE_URL}images/project/generateur_doc.png`,
    tags: ["Python", "OpenAI API", "LLM", "Slack"],
    date: "2024-01-15",
    translationKey: "projects.agentIA"
  },
  {
    slug: slugify("Mon Portfolio"),
    image: `${import.meta.env.BASE_URL}images/project/portfolio.webp`,
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    date: "2023-10-01",
    translationKey: "projects.portfolio"
  },
  {
    slug: slugify("Classification de Contrats"),
    image: `${import.meta.env.BASE_URL}images/project/classification_doc.png`,
    tags: ["NLP", "LLM", "Prompting", "Data Science"],
    date: "2024-03-12",
    translationKey: "projects.classificationContrats"
  }
];

export const courseProjects: Project[] = [
  {
    slug: slugify("Generateur de musique"),
    image: `${import.meta.env.BASE_URL}images/project/generateur_music.jpeg`,
    tags: ["Python", "BERT", "NLP"],
    date: "2022-11-01",
    translationKey: "courseProjects.musicGenerator"
  },
  {
    slug: slugify("Exploration de données"),
    image: `${import.meta.env.BASE_URL}images/project/exploration_data.jpeg`,
    tags: ["Python", "Spark", "Machine Learning", "Big Data"],
    date: "2023-04-01",
    translationKey: "courseProjects.dataExploration"
  },
  {
    slug: slugify("Classification d'images"),
    image: `${import.meta.env.BASE_URL}images/project/cnn.jpg`,
    tags: ["Python", "TensorFlow", "CNN", "Machine Learning"],
    date: "2023-02-01",
    translationKey: "courseProjects.imageClassification"
  },
  {
    slug: slugify("Mon Projet de Cours"),
    image: `${import.meta.env.BASE_URL}images/project/exploration_analyse.png`,
    tags: ["React", "TypeScript"],
    date: "2023-09-01",
    translationKey: "courseProjects.dataScience"
  }
];
