import logo from './logo.svg';
import './App.css';
import { ChakraProvider} from '@chakra-ui/react'
import ProductsDisplayPage from './pages/ProductsDisplayPage'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
      setProducts(data["products"]);
      console.log(products);
    });
  },[]);

  return (
    <ChakraProvider>
      <Router>
      <Navbar />
      <Routes>
        <Route index exact path="/" element={products && <ProductsDisplayPage products={products}/>} />
        <Route exact path="/product/:id" element={ProductPage} />
      </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
