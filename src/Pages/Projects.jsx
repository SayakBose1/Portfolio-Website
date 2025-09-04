import React from "react";
import Layout from "../Components/Layout";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Link,
  Icon,
  Divider,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
      name: "Agritech",
      imageUrl: "harvesting.webp",
      description:
        "AI-powered platform promoting sustainable farming through disease detection, crop recommendation, and smart analytics.",
      liveLink: "",
      githubLink: "",
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
        bg="#121212" // Dark background
        color="#FFFFFF" // White text
        py={{ base: "0", md: "10" }}
        px={5}
        borderRadius="15"
        m="4"
      >
        <VStack spacing={5} align="start" maxW="1000px" mx="auto">
          <Box>
            <HStack gap="3" alignItems="center" mb="5">
              <Icon as={FaGithub} fontSize="30px" color="#BB86FC" />{" "}
              {/* Accent color */}
              <Heading as="h1" size="xl">
                Projects
              </Heading>
            </HStack>
            <Text fontSize="lg" mb={5}>
              Here are some of the projects I've worked on.
            </Text>
          </Box>
          <Divider orientation="horizontal" borderColor="#333333" />{" "}
          {/* Darker divider */}
          <Grid
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gap={6}
            width="100%"
          >
            {projects.map((project, index) => (
              <GridItem
                key={index}
                bg="#1E1E1E" // Dark gray background for each card
                p={5}
                borderRadius="md"
                boxShadow="md"
                display="flex"
                flexDirection="column"
                transition="all 0.3s ease-in-out"
                _hover={{
                  boxShadow: "0 0 12px 4px #BB86FC",
                }}
              >
                <VStack
                  align="start"
                  spacing={4}
                  height="100%"
                  justifyContent="space-between"
                >
                  {/* Project Heading */}
                  <Heading as="h3" size="md">
                    {project.name}
                  </Heading>

                  {/* Project Image with fixed height */}
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    borderRadius="md"
                    objectFit="cover"
                    width="100%"
                    height="150px" // Set a fixed height for images
                  />

                  {/* Project Description */}
                  <Text>{project.description}</Text>

                  {/* Buttons aligned at the bottom */}
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
            ))}
          </Grid>
        </VStack>
      </Box>
    </Layout>
  );
};

export default Projects;
