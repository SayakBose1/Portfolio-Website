import React from "react";
import { Box, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import {
  FaUser,
  FaGraduationCap,
  FaLaptopCode,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      display="flex"
      width="80vw"
      justifyContent="center"
      alignItems="center"
      mt="2"
    >
      <Box
        bg="gray.800"
        color="white"
        px="4"
        py="2"
        width="fit-content"
        zIndex="1000"
        boxShadow="md"
        borderRadius="md"
      >
        <Flex justify="space-between" align="center">
          {/* About Me */}
          <Tooltip
            label="About Me"
            aria-label="About Me"
            bg="gray.700"
            color="white"
            fontSize="13"
            borderRadius="md"
            p="1.5"
            hasArrow
          >
            <NavLink to="/" end>
              {({ isActive }) => (
                <IconButton
                  aria-label="About Me"
                  icon={<FaUser />}
                  bg={isActive ? "gray.600" : "transparent"} // Active background
                  color={isActive ? "white" : "gray.300"} // Active icon color
                  _hover={{ bg: "gray.600" }}
                  size="lg"
                  isRound
                />
              )}
            </NavLink>
          </Tooltip>

          {/* Skills */}
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
            <NavLink to="/skills">
              {({ isActive }) => (
                <IconButton
                  aria-label="Skills"
                  icon={<FaGraduationCap />}
                  bg={isActive ? "gray.600" : "transparent"}
                  color={isActive ? "white" : "gray.300"}
                  _hover={{ bg: "gray.600" }}
                  size="lg"
                  isRound
                  ml="4"
                />
              )}
            </NavLink>
          </Tooltip>

          {/* Projects */}
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
            <NavLink to="/projects">
              {({ isActive }) => (
                <IconButton
                  aria-label="Projects"
                  icon={<FaLaptopCode />}
                  bg={isActive ? "gray.600" : "transparent"}
                  color={isActive ? "white" : "gray.300"}
                  _hover={{ bg: "gray.600" }}
                  size="lg"
                  isRound
                  ml="4"
                />
              )}
            </NavLink>
          </Tooltip>

          {/* Contact */}
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
            <NavLink to="/contact">
              {({ isActive }) => (
                <IconButton
                  aria-label="Contact Me"
                  icon={<FaEnvelope />}
                  bg={isActive ? "gray.600" : "transparent"}
                  color={isActive ? "white" : "gray.300"}
                  _hover={{ bg: "gray.600" }}
                  size="lg"
                  isRound
                  ml="4"
                />
              )}
            </NavLink>
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
