import { useTranslation } from "react-i18next";
import "../i18n";
import { motion } from "framer-motion";

export function MusicComponent() {
  const { t } = useTranslation();

  return (
    <section
      id="music"
      className="mt-20 mb-10 px-4 sm:px-6 text-center flex flex-col items-center"
    >
      <motion.h1 className="py-10 text-3xl sm:text-4xl font-bold text-emerald-600 mb-4">
        {t("music.title")}
      </motion.h1>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl text-lg text-white mb-12"
      >
        {t("music.intro")}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Partie guitare */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center text-center bg-emerald-900 rounded-2xl shadow-lg p-6 hover:scale-105"
        >
          <img
            src="/images/music/guitar.png"
            alt="Guitare"
            className="rounded-xl w-full aspect-square object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">
            -- {t("music.guitarTitle")} --
          </h2>
          <p className="text-white">
            {t("music.guitar")}
          </p>
        </motion.div>

        {/* Partie DJ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center text-center bg-emerald-900 rounded-2xl shadow-lg p-6 hover:scale-105"
        >
          <img
            src="/images/music/dj.jpg"
            alt="DJ Sterenova"
            className="rounded-xl w-full aspect-square object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">
            -- {t("music.djTitle")} --
          </h2>
          <p className="text-white">
            {t("music.dj")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
