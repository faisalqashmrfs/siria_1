
import Products from './Components/Products/Products'
import {createBrowserRouter,Outlet, RouterProvider,ScrollRestoration} from 'react-router-dom'
import NavbarTop from './Components/NavbarAll/NavbarTop/NavbarTop';
import ProductDetailsPage from './Components/Products/ProductDetailsPage';
import ContactUs from './Components/Contact Us/ContactUs';
import Iso from './Components/ISO/Iso';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import { useState } from 'react';
import Home from './Components/Home/Home';
function App() {
  const [brandInfo, setBrandInfo] = useState(null);
  const products = brandInfo && brandInfo.products;
  console.log(products)
  
  const Layout=()=>{
    return(
      <div>
        <NavbarTop/>
        <ScrollRestoration/>
        <Outlet/>
        <Footer/>
      </div>
    )
  };
  
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
       
      },
      {
        path:"/Products",
        element:<Products/>,
       
      },
      {
        path:"/ProductDetailsPage/:id",
        element:<ProductDetailsPage/>,
       
      },
      {
        path:"/ContactUs",
        element:<ContactUs/>,
       
      },
      {
        path:"/Iso",
        element:<Iso/>,
       
      },
      {
        path:"/About",
        element:<About/>
       
      },
      
     

    ],
  },
]);
  return (
    <div>
    <RouterProvider
    router={router}/>
  </div>
  );
}

export default App;
