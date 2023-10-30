import { Link } from "react-router-dom";

export function Sidebar(props) {
  const { categorys } = props

  return (
    <div className="w-1/4">
      <h2 className="text-lg font-semibold mb-4">Catégories</h2>
      <ul>
        {categorys.map(category =>
          <li key={category} className="mb-2">
            <Link to={`/?category=${category}`} className="text-blue-500 hover:underline">{category}</Link>
          </li>)}
      </ul>
    </div>
  );
}