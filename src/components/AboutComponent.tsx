import { useTranslation } from "react-i18next";
import "../i18n";


export function AboutComponent() {
  const { t } = useTranslation();
  return (
    <section id="presentation" className="flex flex-col p-4 sm:p-6 rounded-2xl w-full text-left">
      <h2 className="text-xl sm:text-2xl x font-semibold mb-2 pb-4">{t('about.title')}</h2>
      <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
        {t('about.description')}
      </p>
    </section>
  );
}