import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

import { ProductList } from "./Components/Api/ProductsList"

import { Header } from "./Components/Store/Header"

import { Footer } from "./Components/Store/Footer"
import { ProductId } from "./Components/Api/ProductId"
import { Cart } from "./Components/Store/Cart"

const router = createBrowserRouter([
  {
    path: '/',
    element: (<div className="bg-gray-100 font-sans">
      <Header />
      <div className="container mx-auto my-8 flex">
        <Outlet />
      </div>
      <Footer />
    </div>),
    children: [
      {
        path: '',
        element: (
          <>
            <ProductList />
          </>
        )
      },
      {
        path: 'product/:id',
        element: (<ProductId />)
      },
      {
        path: 'cart',
        element: (<Cart />)
      }
    ]
  }
])


function App() {



  return <RouterProvider router={router} />
}

export default App


