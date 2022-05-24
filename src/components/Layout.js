import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        
        <ul>
         
        <button1>
            <Link to="/shop">Shop</Link>
           
        </button1>

        <button2>
             <Link to="/contact">Contact</Link>

        </button2>   
          
        <button4>
             <Link to="/art">Art</Link>
        </button4>   
      
        </ul>
   
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;