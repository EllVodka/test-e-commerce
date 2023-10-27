export function Sidebar() {
    return (
      <div className="w-1/4">
        <h2 className="text-lg font-semibold mb-4">Catégories</h2>
        <ul>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Catégorie 1</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Catégorie 2</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Catégorie 3</a></li>
        </ul>
      </div>
    );
  }