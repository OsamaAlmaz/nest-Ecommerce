import {
  createBrowserRouter,
  RouterProvider,
  Route, Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from "./pages/Products/products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import "./App.scss";
import "../index.css"

const Layout = () => {
  return (
    <div className="app" href="./">
      <Navbar/>
        <Outlet/>
      <Footer/>

    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>

      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  }

]);

function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
