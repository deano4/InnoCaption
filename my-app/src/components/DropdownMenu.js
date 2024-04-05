import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const DropdownMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<HamburgerIcon />} colorScheme="blue">
        Menu
      </MenuButton>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>Products</MenuItem>
        <MenuItem>About Us</MenuItem>
        {/* Add more MenuItems as needed */}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
