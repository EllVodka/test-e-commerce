import { Link, NavLink, RouterProvider, createBrowserRouter } from "react-router-dom"

import { ProductList } from "./Components/Api/ProductsList"

import { Header } from "./Components/Store/Header"
import { Sidebar } from "./Components/Store/Sidebar"

import { Footer } from "./Components/Store/Footer"

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="bg-gray-100 font-sans">
        <Header />
        <div className="container mx-auto my-8 flex">
          <Sidebar />
          <ProductList />
        </div>
        <Footer />
      </div>
    )
  },
  {
    path: '/login',
    element: (<div>
      Login
      <nav>
        <Link to="/">Accueil</Link>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>)
  }
])

function App() {



  return <RouterProvider router={router} />
}

export default App
