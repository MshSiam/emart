import "./App.css"
import Home from "./components/home/Home"
import Navbar from "./components/Nav/Navbar"
import Products from "./components/products/Products"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./components/product/Product"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/products/:id" element={<Product></Product>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
