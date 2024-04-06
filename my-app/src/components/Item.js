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
import { Link } from 'react-router-dom';
import Rating from './RatingStars';
const Item = ({product, addToCart}) => {
  return (
    <Box width="300px" height="450px" borderWidth="0.5px" borderColor="black" borderRadius="lg" overflow="hidden" p="auto" mt={10}>
      <Link to={`/product/${product.id}`}>
        <Image src={product.thumbnail} resize="contain" width="300px" height="200px" alt={`Image of ${product.title}`}/>
      </Link>
      <Box p="6">
      <Link to={`/product/${product.id}`}>
        <Box d="flex" alignItems="baseline">
          <HStack spacing={2}>
            <Heading size="md" fontWeight="semibold" lineHeight="tight" isTruncated >
              {product.title}
            </Heading>
          </HStack>
        </Box>
      </Link>
        <VStack>
          <div style={{marginRight: "auto"}}>
          <Rating rating={product.rating} /></div>
          <Heading size="md" fontWeight="semibold" lineHeight="tight" isTruncated marginRight={"auto"}>
          <p>
            {product.discountPercentage && (
              <span style={{ marginLeft: 'auto', fontSize: "0.8em", color: "white", backgroundColor: 'red', padding: '2px 5px', borderRadius: '5px' }}>
                {product.discountPercentage}% off
              </span>
            )}
          </p>
          <Box style={{fontSize: "1.2em"}} width="300px" height="70px">
          {product.discountPercentage && (
            <span >${Math.trunc(product.price*(1-product.discountPercentage*0.01))}</span>
          )}
          {product.discountPercentage ? (
            <span style={{textDecoration: 'line-through', color: 'gray' }}>${product.price}</span>
          ) : (
            <span>${product.price}</span>
          )}
          </Box>
          </Heading>
          <Button colorScheme="blue" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Item;
