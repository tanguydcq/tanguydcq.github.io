import { FileText, Bot, Globe, Video, Image, AlertTriangle, BarChart3, Music, Car, ChartCandlestick, Presentation, Truck, Sparkles } from "lucide-react";

export interface Project {
  slug: string;
  tags: string[];
  date?: string;
  link?: string;
  repoUrl?: string;
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
    slug: slugify("ASES"),
    tags: [
      "Pitch Deck",
      "Hackathon",
      "Stanford Bootcamp",
      "ASES",
      "HEC"
    ],
    translationKey: "projects.ases",
    link: `${import.meta.env.BASE_URL}images/reports/ases.pdf`,
    icon: Presentation
  },
  {
    slug: slugify("Black-Scholes"),
    tags: [
      "Python",
      "Black-Scholes",
      "Monte Carlo",
      "Machine Learning",
      "Data Analysis",
      "Data Visualization"
    ],
    translationKey: "projects.blacksholes",
    link: `${import.meta.env.BASE_URL}images/reports/Black_Scholes_v2.pdf`,
    icon: ChartCandlestick,
    repoUrl: "https://github.com/tanguydcq/Black-Scholes"
  },
  {
    slug: slugify("Classification de Contrats"),
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
    slug: slugify("Diffusion Model DDPM"),
    tags: [
      "Deep Learning",
      "Diffusion Models",
      "DDPM",
      "Generative Models",
      "PyTorch"
    ],
    date: "2024",
    repoUrl: "https://github.com/tanguydcq/Diffusion",
    translationKey: "courseProjects.diffusion",
    icon: Sparkles
  },
  {
    slug: slugify("RPC Logistics Optimization"),
    tags: [
      "Optimization",
      "3D Bin Packing",
      "Operations Research",
      "Greedy Algorithms",
      "Logistics",
      "Python"
    ],
    repoUrl: "https://github.com/tanguydcq/RPC",
    translationKey: "courseProjects.rpc",
    icon: Truck
  },
  {
    slug: slugify("PFEE"),
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
    icon: BarChart3,
    repoUrl: "https://github.com/tanguydcq/dataviz_project"
  },
  {
    slug: slugify("Generateur de musique"),
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
    repoUrl: "https://github.com/tanguydcq/bda-mach-dataviz",
    icon: Car
  }
];
