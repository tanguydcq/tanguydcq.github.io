import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ScrollProgressBar from "../components/ProgressBar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
