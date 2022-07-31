import "./App.css"
import Home from "./components/home/Home"
import Navbar from "./components/Nav/Navbar"
import Products from "./components/products/Products"

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Home></Home>
      <Products></Products>
    </div>
  )
}

export default App
