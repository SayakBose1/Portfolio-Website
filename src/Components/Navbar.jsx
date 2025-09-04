import React from 'react'
import {
    Box,
    Flex,
    IconButton,
    Tooltip,
    
  } from "@chakra-ui/react";
  import {
    FaUser,
    FaGraduationCap,
    FaLaptopCode,
    FaEnvelope
  } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <Box display="flex" width="80vw" justifyContent="center" alignItems="center" mt="2">
    <Box
      bg="gray.800"            // Dark gray background
      color="white"            // White text color
      px="4"
      py="2"
      width="fit-content"
      zIndex="1000"
      boxShadow="md"
      borderRadius="md"
    >
      <Flex justify="space-between" align="center">
        <Tooltip
          label="About Me"
          aria-label="About Me"
          bg="gray.700"         // Slightly lighter gray for tooltip background
          color="white"         // White text color
          fontSize="13"
          borderRadius="md"
          p="1.5"
          hasArrow
        >
          <Link to={"/"}>
            <IconButton
              aria-label="About Me"
              icon={<FaUser />}
              bg="transparent"
              color={"gray.300"}
              _hover={{ bg: "gray.600" }}  // Darker gray for hover effect
              size="lg"
              isRound
            />
          </Link>
        </Tooltip>
        <Tooltip
          label="Skills"
          aria-label="Skills"
          bg="gray.700"
          color="white"
          fontSize="13"
          borderRadius="md"
          p="1.5"
          hasArrow
        >
          <Link to={"/skills"}>
            <IconButton
              aria-label="Skills"
              icon={<FaGraduationCap />}
              bg="transparent"
              _hover={{ bg: "gray.600" }}
              color={"gray.300"}
              size="lg"
              isRound
              ml="4"
            />
          </Link>
        </Tooltip>
        <Tooltip
          label="Projects"
          aria-label="Projects"
          bg="gray.700"
          color="white"
          fontSize="13"
          borderRadius="md"
          p="1.5"
          hasArrow
        >
          <Link to={"/projects"}>
            <IconButton
              aria-label="Projects"
              icon={<FaLaptopCode />}
              bg="transparent"
              _hover={{ bg: "gray.600" }}
              color={"gray.300"}
              size="lg"
              isRound
              ml="4"
            />
          </Link>
        </Tooltip>
        <Tooltip
          label="Contact Me"
          aria-label="Contact Me"
          bg="gray.700"
          color="white"
          fontSize="13"
          borderRadius="md"
          p="1.5"
          hasArrow
        >
          <Link to={"/contact"}>
            <IconButton
              aria-label="Contact Me"
              icon={<FaEnvelope />}
              bg="transparent"
              _hover={{ bg: "gray.600" }}
              color={"gray.300"}
              size="lg"
              isRound
              ml="4"
            />
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  </Box>
  
  )
}

export default Navbar