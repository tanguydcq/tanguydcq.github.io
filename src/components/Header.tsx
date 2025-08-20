import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../i18n";
import { LanguageSwitcher } from "./utils/LanguageSwitcher";


export function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("presentation");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["presentation", "parcours", "projects", "sterenova", "sports", "music"];
      let current = "presentation";

      const scrollPosition = window.scrollY + 200; // Offset for header height

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
          }
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = sections[sections.length - 1];
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { id: "presentation", label: t("header.presentation") },
    { id: "parcours", label: t("header.parcours") },
    { id: "projects", label: t("header.projects") },
    { id: "sterenova", label: "Sterenova" },
    { id: "sports", label: "Sports" },
    { id: "music", label: t("music.title") },
  ];

  // Scroll to section by id
  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-60 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="mx-4 p-4 flex justify-between items-center">
        {/* Profile */}
        <div className="flex items-center space-x-4">
          <a href="/">
            <img
              src={`${import.meta.env.BASE_URL}images/identite.jpg`}
              alt="Identité"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover aspect-square cursor-pointer"
            />
          </a>
          <h1 className="text-lg sm:text-2xl font-bold text-emerald-600">Tanguy Ducrocq</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className={`relative text-white hover:text-white transition ${activeSection === id ? "text-emerald-600 font-semibold" : ""
                }`}
            >
              {label}
              {activeSection === id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Langues + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:flex" />
          <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="sm:hidden flex flex-col bg-gray-900 bg-opacity-90 backdrop-blur-md px-4 pb-4 space-y-2">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className={`bg-cyan-400 text-left hover:text-white transition ${activeSection === id ? "font-semibold" : ""
                }`}
            >
              {label}
            </button>
          ))}
          <LanguageSwitcher className="mt-2" />
        </nav>
      )}
    </header>
  );
}
