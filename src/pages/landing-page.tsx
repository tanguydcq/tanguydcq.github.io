import HomeLayout from "../layout/HomeLayout";
import { HeroSection } from "../components/modern/HeroSection";
import { AboutSection } from "../components/modern/AboutSection";
import { SkillsSection } from "../components/modern/SkillsSection";
import { ProjectGrid } from "../components/modern/ProjectGrid";
import { ContactSection } from "../components/modern/ContactSection";
import { SterenovaSection } from "../components/modern/SterenovaSection";
import { SportSection } from "../components/modern/SportSection";

export default function LandingPage() {
  return (
    <HomeLayout>
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectGrid />
      <SterenovaSection />
      <SportSection />
      <ContactSection />
    </HomeLayout>
  )
}
