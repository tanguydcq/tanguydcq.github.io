import HomeLayout from "../layout/HomeLayout";
import { AboutComponent } from "../components/AboutComponent"; 
import { ParcoursComponent } from "../components/ParcoursComponent";
import { ProjectsSection } from "../components/ProjectComponent";

export default function LandingPage() {
  return (
    <HomeLayout>
      <AboutComponent />
      <ParcoursComponent />
      <ProjectsSection />
    </HomeLayout>
  )
}
