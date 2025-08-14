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
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the brands based on searchTerm
  const filteredBrands = appBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", backgroundColor: "#8a3434ff" }}>
      <h1>This is from brands.jsx file.</h1>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search for a brand"
        style={{ padding: "10px" }}
      />
      <ul>
        {filteredBrands.map((brand) => (
          <li key={brand.id} style={{ color: "white" }}>
            {brand.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default My_test;
