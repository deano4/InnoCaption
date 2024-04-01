import logo from './logo.svg';
import './App.css';
import { ChakraProvider} from '@chakra-ui/react'
import ProductsDisplayPage from './pages/ProductsDisplayPage'
function App() {
  const products = [
    {
      id: 1,
      name: 'Awesome Widget',
      price: '19.99',
      description: 'This widget is the best tool for your needs. It comes in various colors and sizes.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Fantastic Gadget',
      price: '29.99',
      description: 'A fantastic gadget that can solve all your problems. Sleek design and easy to use.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more products as needed
  ];
  return (
    <ChakraProvider>
      <ProductsDisplayPage products={products}/>
    </ChakraProvider>
  );
}

export default App;
