import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../i18n";
import { LanguageSwitcher } from "./utils/LanguageSwitcher";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "skills", "projects", "sterenova", "sports", "contact"];
      let current = "hero";

      const scrollPosition = window.scrollY + 100;

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

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  const navLinks = [
    { id: "hero", label: t("header.presentation") },
    { id: "about", label: t("header.parcours") },
    { id: "skills", label: t("header.skills") },
    { id: "projects", label: t("header.projects") },
    { id: "sterenova", label: t("header.sterenova") },
    { id: "sports", label: t("header.sports") },
    { id: "contact", label: t("header.contact") }
  ];

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false);
    } else {
      // Fallback for top
      if (id === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToId('hero')}>
          <span className="text-xl font-bold tracking-tight">TD.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(({ id, label }) => (
            <Button
              key={id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToId(id)}
              className={cn(
                "rounded-full text-muted-foreground hover:text-foreground relative",
                activeSection === id && "text-foreground font-medium"
              )}
            >
              {label}
              {activeSection === id && (
                <span className="absolute inset-0 bg-secondary/50 rounded-full -z-10" />
              )}
            </Button>
          ))}
          <div className="ml-4 pl-4 border-l border-border">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-5">
          <nav className="flex flex-col space-y-2">
            {navLinks.map(({ id, label }) => (
              <Button
                key={id}
                variant={activeSection === id ? "secondary" : "ghost"}
                className="justify-start w-full"
                onClick={() => scrollToId(id)}
              >
                {label}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
