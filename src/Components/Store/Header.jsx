import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import { HeaderLink } from './HeaderLink';
import { getNumberProduct } from '../Cart/cart';

export function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-bold">
          Ma Boutique
        </Link>
        {!showDropdown ? (
          <div className="sm:hidden flex items-center md:hidden">
          <FaAlignJustify className="cursor-pointer" onClick={toggleDropdown} />
          {getNumberProduct() !== 0 ? (
            <span className="bg-red-500 rounded-full py-1 px-3 ml-2">
              {getNumberProduct()}
            </span>
          ) : (
            <></>
          )}
        </div>
        ):
        (
          <FaTimes className='sm:hidden mr-10 cursor-pointer' onClick={toggleDropdown}/>
        ) 
        }
        
        {showDropdown && (
          <div className="sm:hidden absolute right-10 mt-32 bg-blue-500 p-1 rounded shadow border border-black">
            <HeaderLink />
          </div>
        )}
        <nav className="hidden sm:flex">
          <HeaderLink />
        </nav>
      </div>
    </header>
  );
}
