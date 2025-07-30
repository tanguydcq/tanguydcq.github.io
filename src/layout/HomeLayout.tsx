import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ScrollProgressBar from "../components/ProgressBar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 flex flex-col">
      <ScrollProgressBar />
      <Header />
      <main className="flex-1 w-full px-4 sm:px-8 lg:px-24 py-8">{children}</main>
      <Footer />
    </div>
  );
}
