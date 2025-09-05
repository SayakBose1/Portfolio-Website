import React from "react";
import Layout from "../Components/Layout";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Icon,
  Divider,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"; // <-- Import motion

const Projects = () => {
  const projects = [
    {
      name: "Movie Ticket Booking Application",
      imageUrl: "Screenshot (58).png",
      description:
        "An intuitive movie ticket booking app that lets users browse shows, book seats, and receive email confirmations seamlessly.",
      liveLink: "https://movie-ticket-booking-application-cyan.vercel.app/",
      githubLink:
        "https://github.com/SayakBose1/MovieTicket_Booking_Application",
    },
    {
      name: "Green Pulse",
      imageUrl: "Screenshot (59).png",
      description:
        "A modern eco-technology platform providing interactive maps showcasing green hotspots, a comprehensive news section for environmental updates, resource guides, and AI-powered services designed to help communities engage in eco-conscious actions.",
      liveLink: "https://greencity-two.vercel.app/",
      githubLink: "https://github.com/SayakBose1/greencity",
    },
    {
      name: "Blog App",
      imageUrl: "/image copy.png",
      description:
        "A full stack Blog app created using reactJS and appwrite for backend, used tiny-mce for text-editor",
      liveLink: "",
      githubLink: "",
    },
    {
      name: "Code Care",
      imageUrl: "/image.png",
      description:
        "A code editor and executor created by React JS and Monaco code editor and API for execution",
      liveLink: "",
      githubLink: "",
    },
  ];

  return (
    <Layout>
      <Box
        bg="#121212"
        color="#FFFFFF"
        py={{ base: "0", md: "10" }}
        px={5}
        borderRadius="15"
        m="4"
      >
        <VStack spacing={5} align="start" maxW="1000px" mx="auto">
          <Box>
            <HStack gap="3" alignItems="center" mb="5">
              <Icon as={FaGithub} fontSize="30px" color="#BB86FC" />
              <Heading as="h1" size="xl">
                Projects
              </Heading>
            </HStack>
            <Text fontSize="lg" mb={5}>
              Here are some of the projects I've worked on.
            </Text>
          </Box>

          <Divider orientation="horizontal" borderColor="#333333" />

          <Grid
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gap={6}
            width="100%"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ height: "100%" }} // <-- Make motion div full height
              >
                <GridItem
                  bg="#1E1E1E"
                  p={5}
                  borderRadius="md"
                  boxShadow="md"
                  display="flex"
                  flexDirection="column"
                  height="100%" // <-- Make GridItem stretch fully
                  _hover={{
                    boxShadow: "0 0 12px 4px #BB86FC",
                  }}
                >
                  <VStack
                    align="start"
                    spacing={4}
                    height="100%" // <-- VStack takes full height
                    justifyContent="space-between"
                  >
                    <Heading as="h3" size="md">
                      {project.name}
                    </Heading>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      style={{ width: "100%" }}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.name}
                        borderRadius="md"
                        objectFit="cover"
                        width="100%"
                        height="150px"
                      />
                    </motion.div>

                    <Text>{project.description}</Text>

                    <HStack spacing={4} mt="auto">
                      <Button
                        colorScheme="purple"
                        as="a"
                        href={project.liveLink}
                        target="_blank"
                      >
                        Go Live
                      </Button>
                      <Button
                        colorScheme="gray"
                        as="a"
                        href={project.githubLink}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    </HStack>
                  </VStack>
                </GridItem>
              </motion.div>
            ))}
          </Grid>
        </VStack>
      </Box>
    </Layout>
  );
};

export default Projects;
