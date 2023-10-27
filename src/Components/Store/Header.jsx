export function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Ma Boutique</a>
        <nav>
          <a href="#" className="ml-4">Accueil</a>
          <a href="#" className="ml-4">Produits</a>
          <a href="#" className="ml-4">Contact</a>
        </nav>
      </div>
    </header>
  );
}
