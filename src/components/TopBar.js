import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
// import MainPage from "./MainPage";
import Shop from "./Shop";
import Contact from "./Contact";

export default function TopBar() {
  return (
    
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<Layout />}>
        {/* <Route path="mainpage" element={<MainPage />} /> */}
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TopBar />);



