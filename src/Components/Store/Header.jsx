import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-bold">Ma Boutique</Link>
        <nav>
          <a href="#" className="ml-4">Accueil</a>
          <a href="#" className="ml-4">Panier</a>
          <a href="#" className="ml-4">Connexion</a>
        </nav>
      </div>
    </header>
  );
}
