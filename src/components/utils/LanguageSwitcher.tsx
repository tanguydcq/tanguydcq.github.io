import i18n from "../../i18n";

export function LanguageSwitcher({ className }: { className?: string }) {
  const languages = [
    { code: "fr", label: "FR", flag: "fr.png" },
    { code: "en", label: "EN", flag: "en.png" },
  ];

  return (
    <div className={`flex gap-2 ${className || ""}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`flex items-center gap-1 px-2 py-1 border rounded transition ${
            i18n.language.startsWith(lang.code)
              ? "bg-cyan-400 text-white border-cyan-400"
              : "border-cyan-400 hover:bg-cyan-400 hover:text-white"
          }`}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/${lang.flag}`}
            alt={lang.label}
            className="w-5 h-4"
          />
          {lang.label}
        </button>
      ))}
    </div>
  );
}
