export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-sm text-center py-4 rounded-2xl">
      <div className="text-gray-400">
        © {new Date().getFullYear()} - Tanguy Ducrocq - Tous droits réservés
      </div>
    </footer>
  );
}
