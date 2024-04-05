import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Button, VStack, Heading } from '@chakra-ui/react';

const ProductPage = ({ products }) => {
  let { productId } = useParams();
  const product = products.find(p => p.id.toString() === productId);

  if (!product) {
    return <Box>Product not found</Box>;
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} m="auto" mt={10}>
      <Image src={product.imageUrl} alt={`Image of ${product.name}`} />
      <Box p="6">
        <Heading size="lg" fontWeight="semibold" lineHeight="tight" isTruncated>
          {product.name}
        </Heading>
        <Text color="green.500" fontSize="xl">
          ${product.price}
        </Text>
        <Text mt={2}>{product.description}</Text>
        <VStack>
          <Button colorScheme="blue">Add to Cart</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ProductPage;