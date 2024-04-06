import logo from './logo.svg';
import './App.css';
import { ChakraProvider} from '@chakra-ui/react'
import ProductsDisplayPage from './pages/ProductsDisplayPage'
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState({})
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
      setProducts(data["products"]);
      console.log(products);
    });
  },[]);

  const addToCart = (product) => {
    if (product["id"] in cart)
    {
      cart[product["id"]]["quantity"] += 1;
    } else
    {
      cart[product["id"]] = {
        "id": product["id"],
        "quantity": 1
      };
    }
    alert('Added to cart!')
    console.log(cart);
  };

  const removeFromCart = (productID) => {
    delete cart[productID];
    console.log(cart);
  };

  const getCart = () => {
    return cart;
  }

  const updateQuantityCart = (productID, count) => {
    cart[productID]["quantity"] = count;
  };

  return (
    <ChakraProvider>
      <Router>
      <Navbar />
      <Routes>
        <Route index exact path="/" element={products && <ProductsDisplayPage products={products} addToCart={addToCart}/>} />
        <Route exact path="/product/:id" element={<ProductPage addToCart={addToCart} products={products}/>} />
        <Route exact path="/cart" element={<CartPage cart={getCart} removeFromCart={removeFromCart} updateCart={updateQuantityCart}/>}/>
      </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
