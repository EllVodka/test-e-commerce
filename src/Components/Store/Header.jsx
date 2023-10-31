import { Link } from 'react-router-dom';
import { getNumberProduct } from '../Cart/cart';
import { getToken } from '../Token/Token';
import { useState } from 'react';
import logo from '../../assets/img/compte.png';

export function Header() {
  const token = getToken();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-bold">
          Ma Boutique
        </Link>
        <nav className='flex'>
          <Link to={'/'} className="ml-4">
            Accueil
          </Link>
          <Link to={'/cart'} className="ml-4">
            Panier
            {getNumberProduct() !== 0 ? (
              <span className="bg-red-500 rounded-full py-1 px-3 ml-2">
                {getNumberProduct()}
              </span>
            ) : (
              <></>
            )}
          </Link>
          {token ? (
            <div className="ml-4 relative">
              <button onClick={handleDropdownClick} className="focus:outline-none">
                <img  src={logo} alt="Compte" className="w-6 " />
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white text-gray-800 mt-2 p-2 rounded shadow-lg">
                  <Link to="/account" className="block py-1 hover:bg-blue-200">
                    Mon compte
                  </Link>
                  <Link to="/logout" className="block py-1 hover:bg-blue-200">
                    Déconnexion
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="ml-4">
              Connexion
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
