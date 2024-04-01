import React from 'react';
import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  Heading
} from '@chakra-ui/react';

const Item = ({product}) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} m="auto" mt={10}>
      <Image src={product.imageUrl} alt={`Image of ${product.name}`} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <HStack spacing={2}>
            <Heading size="md" fontWeight="semibold" lineHeight="tight" isTruncated>
              {product.name}
            </Heading>
            <Text color="green.500">${product.price}</Text>
          </HStack>
        </Box>

        <Box>
          <Text mt={2}>{product.description}</Text>
        </Box>

        <VStack>
          <Button colorScheme="blue" onClick={() => alert('Added to cart!')}>
            Add to Cart
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Item;
