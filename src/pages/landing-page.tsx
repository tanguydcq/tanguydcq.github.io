import HomeLayout from "../layout/HomeLayout";
import { AboutComponent } from "../components/AboutComponent"; 
import { ParcoursComponent } from "../components/ParcoursComponent";
import { ProjectsSection } from "../components/ProjectComponent";
import SterenovaSection from "../components/SterenovaComponent";

export default function LandingPage() {
  return (
    <HomeLayout>
      <AboutComponent />
      <ParcoursComponent />
      <ProjectsSection />
      <SterenovaSection />
    </HomeLayout>
  )
}
