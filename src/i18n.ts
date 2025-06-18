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
                description: `Salut ! Moi c’est Tanguy, étudiant à EPITA en majeure SCIA-G (Data Science, IA & Graphes). Ce site, c’est un peu mon labo perso : j’y partage ce que j’apprends, ce que je construis, et ce qui m’inspire.`
            },
            // Ajoute d'autres clés ici
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


