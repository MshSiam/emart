import "./App.css"
import Home from "./components/home/Home"
import Navbar from "./components/Nav/Navbar"
import Products from "./components/products/Products"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./components/product/Product"
import Cart from "./components/cart/Cart"
import Login from "./components/Login/Login"
import Register from "./components/register/Register"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/regsiter" element={<Register></Register>}></Route>
          <Route path="/products/:id" element={<Product></Product>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
