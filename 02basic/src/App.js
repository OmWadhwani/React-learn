import "./App.css";

const mylist = ["shirt", "pants", "jeans", "chips"];
const list2 = ["apple", "banana", "mango"];

function App() {
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
    </div>
  );
}

export default App;
