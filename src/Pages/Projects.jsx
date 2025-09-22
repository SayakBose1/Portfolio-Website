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
        "A modern eco-tech platform with interactive green maps, environmental news, resource guides, and AI tools to empower eco-conscious communities.",
      liveLink: "https://greencity-two.vercel.app/",
      githubLink: "https://github.com/SayakBose1/greencity",
    },
    {
      name: "Tourizio",
      imageUrl: "/Screenshot (95).png",
      description:
        "Tourizio is a sleek tourism web app that helps users discover, explore, and plan trips with curated destinations and travel resources.",
      liveLink: "https://tourizio-five.vercel.app/",
      githubLink: "https://github.com/SayakBose1/tourizio",
    },
    {
      name: "QuickeyIt",
      imageUrl: "/Screenshot (110).png",
      description:
        "QuickeyIt is an online grocery app for easy browsing, ordering, and doorstep delivery of daily essentials.",
      liveLink: "https://quickeyit.vercel.app/",
      githubLink: "https://github.com/SayakBose1/QuickeyIt",
    },
    {
      name: "Quiz App",
      imageUrl: "/Screenshot (60).png",
      description:
        "A lightweight and responsive quiz app built with HTML, CSS, and JavaScript that lets users answer MCQs, track scores, and view rankings",
      liveLink: "https://question-bank-pro.netlify.app/",
      githubLink: "https://github.com/SayakBose1/Question-Bank",
    },
    {
      name: "Memory Game",
      imageUrl: "/Screenshot (63).png",
      description:
        "A fun and engaging Memory Game built with HTML, CSS, and JavaScript, where you flip cards, match animal pairs, and challenge your memory skills.",
      liveLink: "https://memory-game-pro.netlify.app/",
      githubLink: "https://github.com/SayakBose1/Memory-Game",
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
