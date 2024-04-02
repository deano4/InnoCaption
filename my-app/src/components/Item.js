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
    <Box width="300px" height="450px" borderWidth="1px" borderRadius="lg" overflow="hidden" p="auto" mt={10}>
      <Image src={product.thumbnail} resize="contain" width="300px" height="200px" alt={`Image of ${product.title}`}/>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <HStack spacing={2}>
            <Heading size="md" fontWeight="semibold" lineHeight="tight" isTruncated>
              {product.title}
            </Heading>
            <Text color="green.500">${product.price}</Text>
          </HStack>
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
