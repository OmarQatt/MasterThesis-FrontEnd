import { ListItem, UnorderedList, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Nav() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <UnorderedList
      display="flex"
      listStyleType="none"
      gap="20px"
      alignItems="center"
      flexDirection={isLargerThan768 ? "row" : "column"}
    >
      <ListItem
        color={currentTab === "home" ? "blue.500" : "gray.500"}
        fontWeight={currentTab === "home" ? "semibold" : "normal"}
        p={2}
        _hover={{ bg: "gray.100" }}
        textTransform="capitalize"
        onClick={() => {
          setCurrentTab("home");
          localStorage.removeItem("category");
          localStorage.removeItem("subCategory");
        }}
      >
        <Link to={"/"}>home</Link>
      </ListItem>
      <ListItem
        color={currentTab === "items" ? "blue.500" : "gray.500"}
        fontWeight={currentTab === "items" ? "semibold" : "normal"}
        p={2}
        _hover={{ bg: "gray.100" }}
        textTransform="capitalize"
        onClick={() => {
          setCurrentTab("items");
          localStorage.removeItem("category");
          localStorage.removeItem("subCategory");
        }}
      >
        <Link to={"/letter"}>Thesis</Link>
      </ListItem>
      <ListItem
        color={currentTab === "contact" ? "blue.500" : "gray.500"}
        fontWeight={currentTab === "contact" ? "semibold" : "normal"}
        p={2}
        _hover={{ bg: "gray.100" }}
        textTransform="capitalize"
        onClick={() => {
          setCurrentTab("contact");
          localStorage.removeItem("category");
          localStorage.removeItem("subCategory");
        }}
      >
        <Link to={"/contact"}>contact</Link>
      </ListItem>
      <ListItem
        color={currentTab === "about" ? "blue.500" : "gray.500"}
        fontWeight={currentTab === "about" ? "semibold" : "normal"}
        p={2}
        _hover={{ bg: "gray.100" }}
        textTransform="capitalize"
        onClick={() => {
          setCurrentTab("about");
          localStorage.removeItem("category");
          localStorage.removeItem("subCategory");
        }}
      >
        <Link to={"/about"}>about</Link>
        <Link to={"/admin"}>admin</Link>
      </ListItem>

    
    </UnorderedList>
  );
}
