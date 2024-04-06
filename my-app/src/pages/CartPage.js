import React, { useState, useEffect } from 'react';
import ItemListForm from '../components/ItemListForm';
import { Button, Box, Text, Flex, VStack} from '@chakra-ui/react'
const CartPage = ({ cart, removeFromCart, updateCart }) => {
  const [cartProducts, setCartProducts] = useState({});
  const [cartHelper, setcartHelper] = useState(cart());
  const updateCartHelper = (productID, quantity) => {
    updateCart(productID, quantity);
    setcartHelper(cart());
    console.log(cart())
    getCart(cartProducts);
  };
  const removeFromCartHelper = (productID) => {
    removeFromCart(productID);
    setcartHelper(cart());
    getCart(cartProducts);
  };
    const getCart = (productIDs) =>
    {
        fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: 1,
            products: Object.values(cartHelper)
        })})
        .then(res => res.json())
        .then(setCartProducts);
    }
    useEffect(() => {
      getCart(cart);
    }, [cart]);
    if (! ("id" in cartProducts)) {
        return <div>Your cart is empty</div>;
    }
    return (
        <div>
          <Flex width="60%" margin="60px auto" borderWidth="1px" borderColor="black">
          <VStack width="100%">
            <Box w="100%">
              <Text fontWeight="bold" fontSize="30px">Your Cart</Text>
            </Box>
            {cartProducts.products.map((product) => (
              <ItemListForm onUpdateQuantity={updateCartHelper} onRemove={removeFromCartHelper} item={product}></ItemListForm>
            ))}
          
          <Box w="100%" h="100%">
            <Text fontWeight="bold" fontSize="22px" textAlign="right">Subtotal({cartProducts.totalQuantity} items): ${cartProducts.discountedTotal}</Text>
            <Flex justifyContent="right">
            <Button colorScheme="yellow" onClick={() => alert("Checked out!")}>
            Checkout
            </Button>
            </Flex>
          </Box>
          import React from 'react';
          
  );
};

export default CheckoutButton;

          </VStack>
          </Flex>
        </div>
      );
    
};

export default CartPage;
