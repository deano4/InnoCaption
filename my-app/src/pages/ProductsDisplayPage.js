import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Item from '../components/Item';

const ProductsDisplayPage = ({ products }) => {
  console.log(products);
  return (
    <SimpleGrid minChildWidth="300px" spacing="10px" p={5}>
      {products.map((product) => (
        <Item key={product.title} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsDisplayPage;