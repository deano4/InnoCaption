import logo from './logo.svg';
import './App.css';
import { ChakraProvider} from '@chakra-ui/react'
import ProductsDisplayPage from './pages/ProductsDisplayPage'
import { useEffect, useState } from 'react';
function App() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
      setProducts(data["products"]);
      console.log(products);
    });
  }, []);

  return (
    <ChakraProvider>
      {products &&
      <ProductsDisplayPage products={products}/>
      }
    </ChakraProvider>
  );
}

export default App;
