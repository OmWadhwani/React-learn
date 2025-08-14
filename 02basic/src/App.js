import "./App.css";
import React, { useState } from "react";

const mylist = ["shirt", "pants", "jeans", "chips"];
const list2 = ["apple", "banana", "mango"];

const Increment = (props) => {
  const adCount = () => {
    props.setCount(props.count + 1);
  };
  return <button onClick={adCount}>Increment{props.count}</button>;
};

const Decrement = (props) => {
  const lesCount = () => {
    props.setCount(props.count - 1);
  };
  return <button onClick={lesCount}>Decrement{props.count}</button>;
};

function App() {
  const [count, setCount] = useState(0);
  const[search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: "blanchedalmond",
        minHeight: "100vh",
        margin: 0,
        padding: "20px",
      }}
    >
      <h1>Hello and welcome</h1>
      <input onChange={handleSearch} placeholder="Search"></input>
      <h4>Search text: {search}</h4>
      {/* First list */}
      {mylist.map((i, index) => (
        <h3 key={index} style={{ margin: "5px 0" }}>
          {i}
        </h3>
      ))}

      {/* Second list */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {list2.map((item, index) => (
          <li
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? "#f9e79f" : "#d5d8dc",
              padding: "8px 12px",
              marginBottom: "5px",
              borderRadius: "4px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <h3>The value is {count}</h3>

      {/* Passing props properly */}
      <Increment count={count} setCount={setCount} />
      <Decrement count={count} setCount={setCount} />
    </div>
  );
}

export default App;
