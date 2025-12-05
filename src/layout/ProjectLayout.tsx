import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/utils/LanguageSwitcher";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollProgressBar from "@/components/ProgressBar";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <ScrollProgressBar />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 sm:px-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('header.backhome')}
          </Button>

          <div className="flex gap-2">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="flex-1 w-full px-4 sm:px-8 lg:px-24 py-8 relative">
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
