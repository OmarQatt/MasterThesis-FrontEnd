import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function UserMenu({ setCurrentTab }) {
  
  return (
    <Menu>
      <MenuButton _hover={{ color: "blue.500" }}>
        <IoPersonCircleOutline size="32px" />
      </MenuButton>
      <MenuList borderRadius="2xl" boxShadow="md">
        <Link>
          <MenuItem icon={<IoPersonCircleOutline size="20px" />}>Profile</MenuItem>
        </Link>
        <Link >
          <MenuItem icon={<IoLogOutOutline size="20px" />}>Logout</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
