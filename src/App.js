import { Routes, Route } from "react-router-dom";
import './App.css'
import PageSummary from "./webform/pageSummary";

export default function App() {
  return (
    <>      
      <Routes>
      <Route path="/" element={<PageSummary/>} />
      </Routes>
    </>
  )
}