import HomeLayout from "../layout/HomeLayout";
import { AboutComponent } from "../components/AboutComponent"; 
import { ParcoursComponent } from "../components/ParcoursComponent";
import { ProjectsSection } from "../components/ProjectComponent";
import SterenovaComponent from "../components/SterenovaComponent";
import { SportComponent } from "../components/SportComponent";


export default function LandingPage() {
  return (
    <HomeLayout>
      <AboutComponent />
      <ParcoursComponent />
      <ProjectsSection />
      <SterenovaComponent />
      <SportComponent />
    </HomeLayout>
  )
}
