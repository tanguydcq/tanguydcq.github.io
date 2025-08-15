import { useTranslation } from "react-i18next";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import "../i18n";

export function AboutComponent() {
  const { t } = useTranslation();

  return (
    <section id="presentation" className="mt-20 mb-10 px-4 sm:px-6 text-center flex flex-col items-center">
      <h1 className="py-10 text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">
        Tanguy Ducrocq
      </h1>
      <p className="text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed mb-6 whitespace-pre-line">
        {t("about.description")}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          <span>Paris, France</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={18} />
          <a href="mailto:tanguyducrocq92@gmail.com" className="hover:text-white transition-colors">
            tanguyducrocq92@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin size={18} />
          <a href="https://www.linkedin.com/in/tanguy-ducrocq-4b580728a/" target="_blank" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Github size={18} />
          <a href="https://github.com/tanguydcq" target="_blank" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>

    </section>
  );
}
