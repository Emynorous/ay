import React, { useState } from 'react';
const ProductDetail = ({ product, addToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};
const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} 
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const ProductList = ({ products, addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h2>Products</h2>
      {filteredProducts.map(product => (
        <ProductDetail key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};
const App = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'MRBEEEEEEAST', description: 'rich', price: 9999999999999999999999999, },
    { id: 2, name: 'Minecraft', description: 'game', price: 20 },
    { id: 3, name: 'Mitsubishi Eclipse', description: 'Cool car', price: 10000 }
  ]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };
  return (
    <div>
      <h1>Online Shop</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <ProductList products={products} addToCart={addToCart} />
        </div>
        <div style={{ flex: '1' }}>
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
};
export default App;