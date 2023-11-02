import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/img/compte.png';
import { getNumberProduct } from "../Cart/cart";
import { useEffect, useState } from "react";
import { getToken, removeToken } from "../Token/Token";
import { FaRegUserCircle } from "react-icons/fa";



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
        <div className="flex flex-col sm:items-center sm:flex-row">
            <Link to={'/'} className="ml-4 p-1 hover:bg-blue-600 rounded-md">
                Accueil
            </Link>
            <Link to={'/cart'} className="ml-4  ">
                <span className="p-1 hover:bg-blue-600 rounded-md">
                Panier
                </span>
                {getNumberProduct() !== 0 ? (
                    <span className="bg-red-500 rounded-full py-1 px-3 ml-2">
                        {getNumberProduct()}
                    </span>
                ) : (
                    <></>
                )}
            </Link>
            {token ? (
                <div className="ml-4 relative flex items-center ">
                    <button onClick={handleDropdownClick} className="focus:outline-none p-1 hover:bg-blue-600 rounded-md">
                        <FaRegUserCircle className="text-xl" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 bg-blue-500 text-white mt-32 px-3 py-2 rounded shadow-lg border border-black">
                            <Link to="/account" className="block p-1 hover:bg-blue-600 rounded-md">
                                Mon compte
                            </Link>
                            <button onClick={handleLogout} className="block p-1 hover:bg-blue-600 rounded-md">
                                Déconnexion
                            </button>
                        </div>
                    )}
                </div>
            ) : (<>
                <Link to="/login" className="ml-4">
                    Connexion
                </Link>
                <Link to="/signin" className="ml-4">
                    Inscription
                </Link>
            </>
            )}
        </div>
    );
}