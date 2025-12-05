import { FileText, Bot, Globe, Video, Image, AlertTriangle, BarChart3, Music, Car } from "lucide-react";

export interface Project {
  slug: string;
  image: string;
  tags: string[];
  date?: string;
  link?: string;
  translationKey: string;
  readonly reportUrl?: string;
  icon: React.ElementType;
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
    slug: slugify("Classification de Contrats"),
    image: `${import.meta.env.BASE_URL}images/project/classification_doc.png`,
    tags: [
      "NLP",
      "LLM",
      "Prompt Engineering",
      "Document Classification",
      "ChatGPT API",
      "Legal Tech"
    ],
    translationKey: "projects.classificationContrats",
    icon: FileText
  },
  {
    slug: slugify("Agent IA ChatGPT"),
    image: `${import.meta.env.BASE_URL}images/project/generateur_doc.png`,
    tags: [
      "Python",
      "LLM",
      "ChatGPT API",
      "Slack Bot",
      "Data Scraping",
      "Automation"
    ],
    translationKey: "projects.agentIA",
    link: `${import.meta.env.BASE_URL}images/reports/agentia_doc.pdf`,
    icon: Bot
  },
  {
    slug: slugify("Site Sterenova"),
    image: `${import.meta.env.BASE_URL}images/project/sterenova_site.png`,
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "shadcn/ui",
      "Web Development"
    ],
    translationKey: "projects.sterenovaSite",
    icon: Globe
  },
];

export const courseProjects: Project[] = [
  {
    slug: slugify("PFEE"),
    image: `${import.meta.env.BASE_URL}images/project/pfee.jpeg`,
    tags: [
      "Computer Vision",
      "YOLOv11",
      "Object Tracking",
      "Re-identification",
      "Sports Analytics",
      "SoccerNet"
    ],
    translationKey: "courseProjects.pfee",
    icon: Video
  },
  {
    slug: slugify("Classification d'images"),
    image: `${import.meta.env.BASE_URL}images/project/cnn.jpg`,
    tags: [
      "CNN",
      "Image Classification",
      "Deep Learning",
      "PyTorch",
      "Astronomy Data",
      "Computer Vision"
    ],
    translationKey: "courseProjects.imageClassification",
    link: `${import.meta.env.BASE_URL}images/reports/CNN_report.pdf`,
    icon: Image
  },
  {
    slug: slugify("Detection d'anomalies"),
    image: `${import.meta.env.BASE_URL}images/project/anomaly_detection.png`,
    tags: [
      "Anomaly Detection",
      "Unsupervised/Supervised Learning",
      "Data Preprocessing",
      "Scikit-learn",
      "Visualization"
    ],
    translationKey: "courseProjects.anomalyDetection",
    link: `${import.meta.env.BASE_URL}images/reports/anomaly_detection_report.pdf`,
    icon: AlertTriangle
  },
  {
    slug: slugify("Exploration de données"),
    image: `${import.meta.env.BASE_URL}images/project/exploration_data.jpeg`,
    tags: [
      "Data Analysis",
      "Python",
      "Pandas",
      "Data Visualization",
      "Sports Analytics",
      "Exploratory Data Analysis (EDA)"
    ],
    translationKey: "courseProjects.dataExploration",
    link: `${import.meta.env.BASE_URL}images/reports/dataviz_volley.pdf`,
    icon: BarChart3
  },
  {
    slug: slugify("Generateur de musique"),
    image: `${import.meta.env.BASE_URL}images/project/generateur_music.jpeg`,
    tags: [
      "NLP",
      "BERT",
      "Music Generation",
      "Sequence Modeling",
      "Deep Learning",
      "Creative AI"
    ],
    translationKey: "courseProjects.musicGenerator",
    icon: Music
  },
  {
    slug: slugify("Analyse et prédiction des accidents de la route"),
    image: `${import.meta.env.BASE_URL}images/project/exploration_analyse.png`,
    tags: [
      "Machine Learning",
      "Data Cleaning",
      "Supervised Learning",
      "Scikit-learn",
      "Data Visualization",
      "Road Safety"
    ],
    translationKey: "courseProjects.dataScience",
    link: `${import.meta.env.BASE_URL}images/reports/accident_report.pdf`,
    icon: Car
  }
];
