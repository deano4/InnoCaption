import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Flex, Box, Image, Text, Button, Heading } from '@chakra-ui/react';
import Rating from '../components/RatingStars';
const ProductPage = ({addToCart}) => {
  let productId = useParams()["id"];
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then((data) => {
      setProduct(data);
      console.log(product);
    });
  }, []);
  
  if (!product) {
    console.log(product)
    return <Box>Product not found</Box>;
  }

  return (
    <Box width="100%" margin="0 auto" padding="60px">
      <Flex  marginBottom="20px">
        <Box width="700px" height="700px">
          <Image src={product.thumbnail} alt={product.title} width="700px" objectFit="contain" marginRight="20px" borderRadius="5px" boxShadow="0 0 5px rgba(0, 0, 0, 0.1)" />
        </Box>
        <Box padding=" 0 60px 60px 60px" width="100%">
          <Heading>
            <Text fontSize="60px" marginBottom="10px">{product.title}</Text>
          </Heading>
          <Divider color="black" borderWidth="2px"/>
          <Flex alignItems="center" marginTop="10px">
          <Rating rating={product.rating} /> 
          <Text fontWeight="bold">{product.rating}</Text>
          </Flex>
          <Text fontSize="xxx-large"><strong>
          {product.discountPercentage && (
            <span>${Math.trunc(product.price*(1-product.discountPercentage*0.01))}</span>
          )}
          {product.discountPercentage ? (
            <span style={{textDecoration: 'line-through', color: 'gray' }}>${product.price}</span>
          ) : (
            <span>${product.price}</span>
          )}
          </strong></Text>
          <p>
            {product.discountPercentage && (
              <span style={{ marginLeft: 'auto', fontSize: "0.8em", color: "white", backgroundColor: 'red', padding: '2px 5px', borderRadius: '5px' }}>
                {product.discountPercentage}% off
              </span>
            )}
          </p>
          <Text fontSize="lg" marginBottom="20px">{product.description}</Text>
          <Button padding="10px 20px" onClick={() => addToCart(product)} borderRadius="5px" backgroundColor="#f0c14b" color="#111" cursor="pointer">Add to Cart</Button>
        </Box>
      </Flex>
    </Box>
  );


  
};

export default ProductPage;