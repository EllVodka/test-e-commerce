import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/img/compte.png';
import { getNumberProduct } from "../Cart/cart";
import { useEffect, useState } from "react";
import { getToken, removeToken } from "../Token/Token";



export function HeaderLink() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [token, setToken] = useState(getToken());
    const location = useLocation();

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    

    useEffect(() => {
        setToken(getToken());
    }, [location]);

    const handleLogout = () => {
        removeToken();
        window.location.href = '/';
    };


    return (
        <div className="flex flex-col sm:flex-row">
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
                        <div className="absolute bg-blue-500 text-white mt-2 p-2 rounded shadow-lg border border-black">
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
        </div>
    );
}