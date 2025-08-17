import { useState } from "react";

const appBrands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Google" },
  { id: 4, name: "Nike" },
  { id: 5, name: "Puma" },
  { id: 6, name: "Adidas" },
];

function My_test({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBrands = appBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ color: "white" }}>This is from brands.jsx file.</h1>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search for a brand"
        style={{ padding: "10px", marginBottom: "20px" }}
      />

      <ul>
        {filteredBrands.map((brand) => (
          <li key={brand.id} style={{ color: "white", marginBottom: "10px" }}>
            {brand.name}{" "}
            <button onClick={() => addToCart(brand)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default My_test;
