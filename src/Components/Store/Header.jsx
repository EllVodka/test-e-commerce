import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNumberProduct } from '../Cart/cart';
import { getToken, removeToken } from '../Token/Token';
import logo from '../../assets/img/compte.png';

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [token, setToken] = useState(getToken());
  const location = useLocation();

  useEffect(() => {
    setToken(getToken());
  }, [location]);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    removeToken();
    window.location.href = '/';
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-bold">
          Ma Boutique
        </Link>
        <nav className="flex">
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
                <img src={logo} alt="Compte" className="w-6" />
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white text-gray-800 mt-2 p-2 rounded shadow-lg">
                  <Link to="/account" className="block py-1 hover:bg-blue-200">
                    Mon compte
                  </Link>
                  <button onClick={handleLogout} className="block py-1 hover:bg-blue-200">
                    Déconnexion
                  </button>
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
