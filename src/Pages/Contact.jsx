import React, { useRef } from "react";
import Layout from "../Components/Layout";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Icon,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const ref = useRef();
  const toast = useToast();
  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000); // Show form after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ed7befcf-3cfe-405c-a6b8-b871ea4ea2ff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast({
        title: "Success!",
        description: "Your message was sent successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      // Clear the form inputs
      event.target.reset();
    } else {
      toast({
        title: "Error!",
        description: "There was an issue sending your message.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <Layout>
      <Box
        py={{ base: "0", md: "10" }}
        px={5}
        bg="#121212" // Dark background
        color="#FFFFFF" // White text
        borderRadius="15"
        m={4}
        minH={"fit-content"}
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          p={{ base: "0", md: "10" }}
          // Slightly lighter dark background for inner box
        >
          {/* Left Section */}
          <Box flex="1" mr={{ md: 10 }} mb={{ base: 10, md: 0 }}>
            <VStack align="start" spacing={{ base: "3", md: "5" }}>
              <Heading
                as="h1"
                size="2xl"
                mt={{ base: "0", md: "6" }}
                mb={{ base: "1", md: "6" }}
                color="#FFFFFF"
              >
                Let's Work Together
              </Heading>
              <HStack>
                <Icon as={MdEmail} w={6} h={6} color="#BB86FC" />
                <Text fontSize="lg">bosesayak70@gmail.com</Text>
              </HStack>
              <HStack>
                <Icon as={MdLocationOn} w={6} h={6} color="#BB86FC" />
                <Text fontSize="lg">Kolkata, India</Text>
              </HStack>
            </VStack>
          </Box>

          {/* Right Section */}
          <Box flex="1">
            {!showForm ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                ref={ref}
              >
                {/* Replace this with your desired SVG */}
                <Box
                  h="full"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <svg
                    width="300px"
                    height="300px"
                    viewBox="0 0 32.666 32.666"
                    fill="none"
                    stroke="#BB86FC"
                  >
                    <motion.path
                      strokeWidth={0.2}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 0.86 }}
                      transition={{ duration: 3 }}
                      d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                  M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                  C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                  c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                  c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                  c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                  c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                  c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                  c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                  c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                  c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                  l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                  C32.666,7.326,25.339,0,16.333,0z"
                    />
                  </svg>
                </Box>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <VStack
                    spacing={5}
                    p={{ base: "0", md: "8" }}
                    bg={{ base: "#121212", md: "#2c2c2c" }}
                    borderRadius="lg"
                  >
                    <Input
                      placeholder="Name"
                      size="lg"
                      name="name"
                      bg="#424242"
                      color="#FFFFFF"
                      border="none"
                      focusBorderColor="#BB86FC"
                      autoComplete="off"
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      size="lg"
                      name="email"
                      bg="#424242"
                      color="#FFFFFF"
                      border="none"
                      focusBorderColor="#BB86FC"
                      autoComplete="off"
                    />
                    <Textarea
                      placeholder="Message"
                      size="lg"
                      name="message"
                      bg="#424242"
                      color="#FFFFFF"
                      border="none"
                      focusBorderColor="#BB86FC"
                      autoComplete="off"
                    />
                    <Button colorScheme="purple" size="lg" type="submit">
                      Submit
                    </Button>
                  </VStack>
                </motion.div>
              </form>
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
