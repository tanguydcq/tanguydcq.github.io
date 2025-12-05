export function Footer() {
  return (
    <footer className="py-6 mt-8 text-sm text-center border-t bg-background/50 backdrop-blur-sm border-border text-muted-foreground">
      <div className="container mx-auto">
        © {new Date().getFullYear()} - Tanguy Ducrocq - All rights reserved
      </div>
    </footer>
  );
}
