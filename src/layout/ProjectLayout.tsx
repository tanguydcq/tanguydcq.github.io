import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 flex flex-col">
      <header className="sticky top-0 z-50 w-full bg-gray-800 border-b border-gray-700 px-4 sm:px-8 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-cyan-400 border border-cyan-400 px-3 py-1 rounded hover:bg-cyan-400 hover:text-white transition"
        >
          {t('header.backhome')}
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => i18n.changeLanguage("fr")}
            className="flex items-center gap-1 px-2 py-1 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-white transition"
          >
            <img src={`${import.meta.env.BASE_URL}images/fr.png`} alt="FR" className="w-5 h-4" />
            FR
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="flex items-center gap-1 px-2 py-1 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-white transition"
          >
            <img src={`${import.meta.env.BASE_URL}images/en.png`} alt="EN" className="w-5 h-4" />
            EN
          </button>
        </div>
      </header>

      <main className="flex-1 w-full px-4 sm:px-8 lg:px-24 py-8">{children}</main>
      <Footer />
    </div>
  );
}
