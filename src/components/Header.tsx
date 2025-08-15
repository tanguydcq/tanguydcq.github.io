import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../i18n";

export function Header() {
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("presentation");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["presentation", "parcours", "projects", "sterenova"];
      let current = "presentation";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            current = id;
          }
        }
      });
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
    { id: "sterenova", label: "Sterenova" }
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
          <h1 className="text-lg sm:text-2xl font-bold text-white">Tanguy Ducrocq</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className={`relative text-white hover:text-cyan-400 transition ${activeSection === id ? "text-cyan-400 font-semibold" : ""
                }`}
            >
              {label}
              {activeSection === id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 rounded"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Langues + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => i18n.changeLanguage("fr")}
            className="hidden sm:flex px-2 py-1 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-white transition items-center gap-1"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/fr.png`}
              alt="FR"
              className="w-5 h-4"
            />
            FR
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="hidden sm:flex px-2 py-1 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-white transition items-center gap-1"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/en.png`}
              alt="EN"
              className="w-5 h-4"
            />
            EN
          </button>

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
              className="text-white text-left hover:text-cyan-400"
            >
              {label}
            </button>
          ))}

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => i18n.changeLanguage("fr")}
              className="flex items-center gap-1 px-2 py-1 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-white transition"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/fr.png`}
                alt="FR"
                className="w-5 h-4"
              />
              FR
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="flex items-center gap-1 px-2 py-1 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-white transition"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/en.png`}
                alt="EN"
                className="w-5 h-4"
              />
              EN
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
