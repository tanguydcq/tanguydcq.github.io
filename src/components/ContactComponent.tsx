import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, FileDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../i18n";


export function ContactComponent() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="mt-20 mb-10 px-4 sm:px-6 text-center flex flex-col items-center"
    >
      <h1 className="py-10 text-3xl sm:text-4xl font-bold text-emerald-600 mb-4">
        {t("contact.title")}
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl text-lg text-gray-300 mb-12"
      >
        {t("contact.description")}
      </motion.p>

      {/* Liens de contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full mb-10">
        <motion.a
          href="mailto:ton.email@example.com"
          className="flex items-center gap-4 bg-gray-800 rounded-xl p-4 text-gray-200 hover:text-emerald-400 transition"
        >
          <Mail className="w-6 h-6 text-emerald-400" />
          tanguyducrocq92@gmail.com
        </motion.a>

        <motion.a
          href="https://github.com/tanguydcq"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-gray-800 rounded-xl p-4 text-gray-200 hover:text-emerald-400 transition"
        >
          <Github className="w-6 h-6 text-emerald-400" />
          GitHub
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/tanguy-ducrocq-4b580728a/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 bg-gray-800 rounded-xl p-4 text-gray-200 hover:text-emerald-400 transition"
        >
          <Linkedin className="w-6 h-6 text-emerald-400" />
          LinkedIn
        </motion.a>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 bg-gray-800 rounded-xl p-4 text-gray-200"
        >
          <Phone className="w-6 h-6 text-emerald-400" />
          +33 7 68 36 46 48
        </motion.div>
      </div>

      {/* Téléchargement CV */}
      <div className="flex gap-6">
        <a
          href="/images/cv/CV_2025-10-15_Tanguy_DUCROCQ.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-900 text-white px-6 py-3 rounded-full shadow-lg transition"
        >
          <FileDown className="w-5 h-5" />
          Resume
        </a>

        {/* <a
          href="/images/cv/cv_en.pdf"
          download
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-900 text-white px-6 py-3 rounded-full shadow-lg transition"
        >
          <FileDown className="w-5 h-5" />
          Resume
        </a> */}
      </div>
    </section>
  );
}
