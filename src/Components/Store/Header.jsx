import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-bold">Ma Boutique</Link>
        <nav>
        <Link to={'/'} className="ml-4">Accueil</Link>
          <Link to={'/cart'} className="ml-4">Panier</Link>
          <a href="#" className="ml-4">Connexion</a>
        </nav>
      </div>
    </header>
  );
}
