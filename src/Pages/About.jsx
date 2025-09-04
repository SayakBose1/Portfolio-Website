import React from "react";
import Layout from "../Components/Layout";
import {
    Box,
    Heading,
    Text,
    VStack,
    Divider,
    useColorModeValue,
    Icon,
    HStack,
} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import { EducationTimeline } from "../Components/EducationTimeline";

const About = () => {
    const bg = useColorModeValue("gray.100", "gray.800"); // Light/Dark mode background
    const textColor = useColorModeValue("gray.800", "white");

    return (
        <Layout>
            <Box
                bg="#121212" // Dark Background
                color="#FFFFFF" // White Text
                py={{ base: "0", md: "10" }}
                px={5}
                borderRadius={"15"}
                m={"4"}
                minH={"fit-content"}
            >
                <VStack
                    spacing={5}
                    align="start"
                    maxW="1000px"
                    mx={{ base: "0", md: "20" }}
                >
                    {/* Developer Introduction */}
                    <Box>
                        <HStack gap={"3"} alignItems="center" mb={"5"}>
                            <Icon
                                as={FiUser}
                                fontSize={"30px"}
                                color="#BB86FC"
                            />{" "}
                            {/* Accent Color */}
                            <Heading as="h1" size="xl">
                                About Me
                            </Heading>
                        </HStack>
                        <Text fontSize="lg" mb={5}>
                            Hello! I am Sayak. I am a passionate MERN Stack
                            Developer with expertise in building dynamic and
                            responsive web applications. I have a strong
                            foundation in Data Structures and Algorithms using
                            Java, along with comprehensive knowledge in Database
                            Management Systems. My version control skills are
                            backed by Git and GitHub, ensuring smooth
                            collaboration and code management. I am always eager
                            to learn new technologies and improve my existing
                            skills. Whether it's through personal projects.
                        </Text>
                    </Box>
                    {/* Divider */}
                    <Divider
                        orientation="horizontal"
                        borderColor="#444444"
                    />{" "}
                    {/* Dark Gray Divider */}
                    {/* Education Section */}
                    <Box width={"100%"}>
                        <HStack gap={"3"} alignItems="center" mb={"5"}>
                            <Icon
                                as={GiBookshelf}
                                fontSize={"30px"}
                                color="#BB86FC"
                            />
                            <Heading as="h1" size="xl" lineHeight="1.2">
                                Education
                            </Heading>
                        </HStack>
                        <Box display={"flex"} justifyContent={"center"} w={"100%"}>
                            <EducationTimeline />
                        </Box>
                    </Box>
                </VStack>
            </Box>
        </Layout>
    );
};



export default About;
