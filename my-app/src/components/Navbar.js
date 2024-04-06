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
import { useNavigate, createSearchParams, renderMatches, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const bg = useColorModeValue('#141920', '#141920');
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
      <Text textColor="white" fontSize="xl" fontWeight="bold">
        <Link to={"/"}>MyStore</Link>
      </Text>
      <Flex bg="white" width="70%" maxWidth="700" as="form" onSubmit={handleSearch} alignItems="center">
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
      <Text textColor="white" fontSize="xl" fontWeight="bold">
        <Link to={"/cart"}>Cart</Link>
      </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
