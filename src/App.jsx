import React from 'react';
import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {

  return (

      <div className="container mx-auto">
          <Header></Header>
          <Products></Products>
          <Cart></Cart>
      </div>
  )
}

export default App
