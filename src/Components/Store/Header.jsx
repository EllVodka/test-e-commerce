import { Link } from "react-router-dom";
import { getNumberProduct } from "../Cart/cart";


export function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-bold">Ma Boutique</Link>
        <nav>
          <Link to={'/'} className="ml-4">Accueil</Link>
          <Link to={'/cart'} className="ml-4">Panier
            {getNumberProduct() !== 0 ?
              (<span className="bg-red-500 rounded-full py-1 px-3 ml-2">{getNumberProduct()}</span>) : 
              (<></>)
              }
          </Link>
          <Link to={'/login'} className="ml-4">Connexion</Link>
        </nav>
      </div>
    </header>
  );
}
