import { useState } from "react";

const appBrands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Google" },
  { id: 4, name: "Nike" },
  { id: 5, name: "Puma" },
  { id: 6, name: "Adidas" },
];

function My_test() {
  const [searchTerm, setSearchTerm] = useState(""); //initially empty search term
  const [cart, setCart] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addToCart = (brand) => {
    // prevent duplicates
    if (!cart.find((item) => item.id === brand.id)) {
      setCart((prevCart) => [...prevCart, brand]);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const filteredBrands = appBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", backgroundColor: "#8a3434ff" }}>
      <h1 style={{ color: "white" }}>Brands & Cart</h1>

      {/* Search input */}
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search for a brand"
        style={{ padding: "10px", marginBottom: "20px" }}
      />

      {/* Available Brands */}
      <h2 style={{ color: "white" }}>Available Brands</h2>
      <ul>
        {filteredBrands.map((brand) => (
          <li key={brand.id} style={{ color: "white", marginBottom: "10px" }}>
            {brand.name}{" "}
            <button onClick={() => addToCart(brand)}>Add to cart</button>
          </li>
        ))}
      </ul>

      {/* Cart Section */}
      <h2 style={{ color: "white" }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={{ color: "white" }}>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ color: "white", marginBottom: "10px" }}>
              {item.name}{" "}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default My_test;
