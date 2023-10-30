export function Sidebar(props) {
  const { categorys } = props

  return (
    <div className="w-1/4">
      <h2 className="text-lg font-semibold mb-4">Catégories</h2>
      <ul>
        {categorys.map(category => <li key={category} className="mb-2"><a href="#" className="text-blue-500 hover:underline">{category}</a></li>)}
      </ul>
    </div>
  );
}