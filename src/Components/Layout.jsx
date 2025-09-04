import React, { Children } from "react";
import { Box, Flex, Container } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Box bg="#121212" color="white">
      <Flex direction={{ base: "column", md: "row" }}>
        <Box 
        w={{ base: "100%", md: "20rem" }}
        h={{ base:"fit-content", md: "100vh" }}  color="white"
        display={{ base: "block", md: "block" }}
        >
          <Sidebar />
        </Box>
        <Box flex="1" display="flex" flexDirection="column" height="100%">
        <Box display={{ base: "none", lg: "block" }}>
            <Navbar />
          </Box>
          {/* Children */}
          <Box
            flex="1"
            overflowY={{base:"",md:"auto"}}
            maxH={{ base: "fit-content", lg: "90vh" }} 
            pb={"5rem"}// Adjust height for mobile and large screens
          >
            {children}
          </Box>
          
          {/* Navbar */}
          <Box
            display={{ base: "flex", lg: "none" }} // Show navbar only on mobile
            position="fixed"
            bottom="2"
            justifyContent={"center"}
            bg="transparent"
            w="100%"
          >
            <Navbar />
          </Box>
          
         
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
