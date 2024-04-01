import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Item from '../components/Item';

const ProductsDisplayPage = ({ products }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="40px" p={5}>
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsDisplayPage;