import React, { useState } from "react";
import My_test from "./brands";
import AddToCart from "./AddToCart";

function App() {
  const [cart, setCart] = useState([]);

  // Function to add brand to cart (passed down to My_test)
  const addToCart = (brand) => {
    if (!cart.find((item) => item.id === brand.id)) {
      setCart((prevCart) => [...prevCart, brand]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#8a3434ff",
      }}
    >
      <h1>Basic Vite React App</h1>
      <h2>and this is the 2nd header</h2>

      {/* Pass addToCart down so My_test can call it */}
      <My_test addToCart={addToCart} />

      {/* Pass cart so AddToCart can display it */}
      <AddToCart cart={cart} />
    </div>
  );
}

export default App;
