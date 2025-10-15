import React from "react";
import My_test from "./brands";
import Counter from "./countmeter";
import Component from "./context_components";

function App() {
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
      <My_test />
      <Counter/>
      <Component/>
      
    </div>
  );
}

export default App;
