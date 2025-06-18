import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 py-10 px-44">
      <Header />
      <main className="flex-1 max-w-full w-full py-8 px-4">{children}</main>
      <Footer />
    </div>
  );
}
