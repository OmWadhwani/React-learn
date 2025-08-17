function AddToCart({ cart }) {
  return (
    <div>
      <h2 style={{ color: "white" }}>Your Cart:</h2>
      {cart.length === 0 ? (
        <p style={{ color: "white" }}>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ color: "white" }}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddToCart;
