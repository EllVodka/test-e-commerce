import { Link, useSearchParams } from "react-router-dom";

export function Sidebar(props) {
  const { categorys } = props;
  const [searchParams, setSearchParams] = useSearchParams();
    const searchCategory = searchParams.get('category');

  return (
    <div className="w-1/4">
      <h2 className="text-lg font-semibold mb-4">Catégories</h2>
      <ul>
        {categorys.map(category =>
          <li key={category} className="mb-2">
            <Link to={`/?category=${category}`} className="text-blue-500 hover:underline">{category}</Link>
            {category == searchCategory ? (<Link to={'/'} className="bg-red-500 rounded-full px-3 py-1 ml-5 text-white">X</Link>):(<></>)}
          </li>)}
      </ul>
    </div>
  );
}