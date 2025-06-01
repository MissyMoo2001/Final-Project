import { Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import Library from './Library'
import Shelf from './Shelf'
import './App.css'
import Home from './Home'

// routes for pages on the main page, nav is the only one that lives here.
export default function App() {
  return (
    <>
      <Navbar/>

      <div className="container mt-4">
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Shelf" element={<Shelf />} />
      </Routes>
      </div>
     
    </>
  )
}
