import { FaTimes } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";

export function Sidebar(props) {
  const { categorys } = props;
  const [searchParams, setSearchParams] = useSearchParams();
    const searchCategory = searchParams.get('category');

  return (
    <div className="w-1/4 sm:w-44 fixed">
      <h2 className="text-lg font-semibold mb-4">Catégories</h2>
      <ul>
        {categorys.map(category =>
          <li key={category} className="mb-2 flex justify-between">
            <Link to={`/?category=${category}`} className="text-blue-500 hover:underline">{category}</Link>
            {category == searchCategory ? (
            <Link to={'/'} className="">
              <FaTimes className="bg-red-500 rounded-full p-1 w-6 h-6"/>
              </Link>
            ):(
            <></>
            )}
          </li>)}
      </ul>
    </div>
  );
}