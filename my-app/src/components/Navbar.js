import React, { useState } from 'react';
import {
    Flex,
    Text,
    useColorModeValue,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Button,
  } from '@chakra-ui/react';
import { useNavigate, createSearchParams, renderMatches, useLocation } from 'react-router-dom';
import DropdownMenu from './DropdownMenu'; // Import your DropdownMenu component

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const bg = useColorModeValue('gray.100', 'gray.900');
    const color = useColorModeValue('black', 'white');
    const navigate = useNavigate();

    const handleSearch = (event) => {
      event.preventDefault();
      // Implement your search logic here
      console.log(searchQuery);

      navigate({
        pathname: "/",
        search: `?${createSearchParams({
            query: searchQuery.toString()
        })}`})
      navigate(0);
    };

  return (
    <Flex bg={bg} color={color} px={5} py={4} justifyContent="space-between" alignItems="center">
      <Text fontSize="xl" fontWeight="bold">
        MyStore
      </Text>
      <Flex as="form" onSubmit={handleSearch} alignItems="center">
        <InputGroup>
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <InputRightElement children={<IconButton aria-label="Search database"  type="submit" background="none" />} />
        </InputGroup>
      </Flex>
      <Flex alignItems="center">
        <DropdownMenu />
      </Flex>
    </Flex>
  );
};

export default Navbar;
