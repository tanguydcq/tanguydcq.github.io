import { useTranslation } from "react-i18next";
import "../i18n";


export function Header() {
  const { i18n } = useTranslation();
  return (

    <header className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 gap-4 sm:gap-0">
      <div className="flex flex-row items-center space-x-4">
        <img src="/images/identite.jpg" alt="Identité" className="w-16 h-16 sm:w-16 sm:h-16 rounded-full object-cover aspect-square" />
        <h1 className="text-xl sm:text-2xl font-bold">Tanguy Ducrocq</h1>
      </div>
      {/* <nav className="space-x-4">
        <a href="#presentation" className="hover:text-blue-400">{t('header.presentation')}</a>
        <a href="#parcours" className="hover:text-blue-400">{t('header.parcours')}</a>
        <a href="#contact" className="hover:text-blue-400">{t('header.contact')}</a>
      </nav> */}
      <div className="flex justify-end">
        <button
          onClick={() => i18n.changeLanguage('fr')}
          className="mr-2 px-3 py-1 rounded transition-colors duration-200 hover:bg-cyan-400 hover:text-white border border-cyan-400"
        >
          FR
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className="px-3 py-1 rounded transition-colors duration-200 hover:bg-cyan-400 hover:text-white border border-cyan-400"
        >
          EN
        </button>
      </div>
    </header>
  );
}