import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

import { ProductList } from "./Components/Api/ProductsList"

import { Header } from "./Components/Store/Header"
import { Sidebar } from "./Components/Store/Sidebar"

import { Footer } from "./Components/Store/Footer"
import { ProductId } from "./Components/Api/ProductId"

const router = createBrowserRouter([
  {
    path: '/',
    element: (<div className="bg-gray-100 font-sans">
      <Header />
      <div className="container mx-auto my-8 flex">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>),  
  children: [
    {
      path: '',
      element: (<ProductList />)
    },
    {
      path: 'product/:id',
      element : (<ProductId />)
    }
  ]}
])


function App() {



  return <RouterProvider router={router} />
}

export default App


