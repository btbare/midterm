import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom"
import PageSummary from "../webform/pageSummary";
import Page1 from "../webform/page1";
import Page2 from "../webform/page2";
import Page3 from "../webform/page3";

export default function PageRoutes() {
  return (
    <>    

      <Link to="/webform/page1">Page1</Link>
      <br/>
      <br/>
      <Link to="/webform/page2">Page2</Link>
      <br/>
      <br/>
      <Link to="/webform/page3">Page3</Link>

      <Routes>
      <Route path="/" element={<PageSummary/>} />
      <Route path="/page1" element={<Page1/>} />
      <Route path="/page2" element={<Page2/>} />
      <Route path="/page3" element={<Page3/>} />
      </Routes>
    </>
  )
}