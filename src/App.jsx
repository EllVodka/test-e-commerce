import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

import { ProductList } from "./Components/Api/ProductsList"

import { Header } from "./Components/Store/Header"

import { Footer } from "./Components/Store/Footer"
import { ProductId } from "./Components/Api/ProductId"
import { Cart } from "./Components/Store/Cart"
import { Login } from "./Components/Account/Login"
import { Logout } from "./Components/Account/Logout"
import { Account } from "./Components/Account/Account"


const router = createBrowserRouter([
  {
    path: '/',
    element: (<div className="font-sans">
      <Header />
      <div className="container mx-auto mt-20 my-8 flex">
        <Outlet />
      </div>
      <Footer />
    </div>),
    children: [
      {
        path: '',
        element: (
            <ProductList />
        )
      },
      {
        path: 'product/:id',
        element: (<ProductId />)
      },
      {
        path: 'cart',
        element: (<Cart />)
      },
      {
        path: 'login',
        element: (<Login />)
      },
      {
        path: 'logout',
        element: (<Logout/>)
      },
      {
        path: 'account',
        element: (<Account />)
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App