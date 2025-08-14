import { useState } from "react"; // this is a hook
import My_test from "./my_test.jsx";
import "./App.css";

const name = "om wadhwani";
const elemnt = <h2>This is from a js variable</h2>;

const Search = () => {
  return <input placeholder="Search for a movie?" />;
};

function MyButton() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <p className="prgrph">My button component with styling</p>
      <button>Submit button</button>
    </div>
  );
}

function App() {
  const [num, setNum] = useState(0);
  const [inputText, setInputText] = useState("");

  const onIncrementClick = () => {
    setNum((prev) => prev + 1);
    console.log(num + 1); // Logs updated value
  };

  const onSearchText = (event) => {
    setInputText(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" ,backgroundColor: "lightblue"}}>
      <h1>Hello this is my react application and my name is {name}</h1>
      {elemnt}
      <My_test />
      <Search />
      <MyButton />

      <button onClick={onIncrementClick}>Increment</button>
      <p>Current count: {num}</p>

      <input onChange={onSearchText} placeholder="Search..." />
      <p>Search text: {inputText}</p>
    </div>
  );
}

export default App;