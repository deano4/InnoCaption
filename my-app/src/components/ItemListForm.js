import React from 'react';
import { Box, Image, Text, Button, Stack, IconButton, Flex } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
const ItemListForm = ({ item, onRemove, onUpdateQuantity }) => {
    const navigate = useNavigate();
    return (
        <Box width="100%" height="200px" borderWidth="1px" borderColor="black">
            <Flex key={item.id} align="center" mb={4}>
            <Box height="200px" width="200px">
                <Image resize="contain" src={item.thumbnail} alt={item.title} height="200px"/>
            </Box>
            <Box marginLeft="40px" h="200px" w="100%" >
                <Stack flex={1} direction="column" spacing={1}>
                <Text marginTop="20px" textAlign="left" fontSize="30px" fontWeight="bold">{item.title}</Text>
                
                <Text>Quantity: {item.quantity}</Text>
                </Stack>
                <Box marginTop="20px">
                    <Button size="sm" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
                    <Button size="sm" ml={2} onClick={() => item.quantity > 1 ? onUpdateQuantity(item.id, item.quantity - 1) : null}>-</Button>
                    <IconButton size="sm" ml={2} aria-label={`Remove ${item.title} from cart`}
                    icon={<FaTrash />}
                    onClick={() => {onRemove(item.id); navigate("/cart");}}
                    />
                </Box>
            </Box>
            <Box h="200px" w="300px">
            <Flex w="100%" justifyContent="center" direction="column" alignItems="left" marginTop="10px">
                <Text fontWeight="bold" fontSize="30px">${item.discountedPrice.toFixed(2)} </Text>
                <Text fontSize="20px" color="gray.600" textDecoration="line-through">${item.price.toFixed(2)}</Text>
                
            </Flex>
            </Box>
            </Flex>
        </Box>
      );
};

export default ItemListForm;
