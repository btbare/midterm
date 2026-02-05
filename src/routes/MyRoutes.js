import { Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";
import Page1 from "../webform/page1";

export default function Menu() {
  return (
    <>

    <nav style={{ display:"flex", flexDirection:"column", float:"left"}}>
      <Link to="/webform/page1">Products</Link><br/>
    </nav>

    <Routes>
      <Route path="/webform/page2" element={<Page1/>} />
    </Routes>
    
    </>
    
  );
}