import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Grid,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  FaCode,
  FaDatabase,
  FaCertificate,
  FaReact,
  FaCss3,
  FaJsSquare,
  FaPython,
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import Layout from "../Components/Layout";
import { RiNextjsFill } from "react-icons/ri";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: FaCode },
    { name: "CSS", icon: FaCss3 },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "React", icon: FaReact },
    { name: "NodeJs", icon: FaCss3 },
    { name: "Express", icon: FaCode },
    { name: "MongoDB", icon: FaDatabase },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "Java", icon: DiJava },
    { name: "SQL", icon: FaDatabase },
    // Add more technical skills here
  ];

  const csFundamentals = [
    { name: "DBMS", icon: FaDatabase },
    { name: "OOPS", icon: FaCode },
    { name: "Operating System", icon: FaCode },
    // Add more CS fundamentals here
  ];

  const certifications = [
    {
      name: "Angular Web Developer Certification",
      issuer: "Infosys Springboard",
      url: "/angular.pdf",
    },
    {
      name: "Angular Course Completion Certificate",
      issuer: "Infosys Springboard",
      url: "/angular_course.pdf",
    },
    {
      name: "Industrial Training Certificate",
      issuer: "ARDENT COMPUTECH PVT. LTD.",
      url: "/training.pdf",
    },

    // Add more certifications here
  ];

  const handleOpenPDF = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Layout>
      <Box
        py={{ base: "0", md: "10" }}
        px={5}
        bg="#121212" // Dark Background
        color="#FFFFFF" // White Text
        borderRadius="15"
        m={4}
      >
        <VStack spacing={5} align="start" maxW="1000px" mx="auto">
          <Heading as="h1" size="xl" mb={5}>
            Technical Skills
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={6}
          >
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </Grid>
        </VStack>

        {/* CS Fundamentals */}
        <VStack spacing={5} align="start" maxW="1000px" mx="auto" mt={10}>
          <Heading as="h1" size="xl" mb={5}>
            CS Fundamentals
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {csFundamentals.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </Grid>
        </VStack>

        {/* Certifications */}
        <VStack spacing={5} align="start" maxW="1000px" mx="auto" mt={10}>
          <Heading as="h1" size="xl" mb={5}>
            Certifications
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {certifications.map((certification, index) => (
              <CertificationCard
                key={index}
                name={certification.name}
                issuer={certification.issuer}
                onClick={() => handleOpenPDF(certification.url)}
              />
            ))}
          </Grid>
        </VStack>
      </Box>
    </Layout>
  );
};

const SkillCard = ({ name, icon }) => (
  <HStack
    bg="#1E1E1E" // Dark Gray Background
    p={4}
    borderRadius="md"
    boxShadow="md"
    justifyContent="center"
    alignItems="center"
    spacing={3}
    transition="all 0.3s ease-in-out"
    _hover={{
      boxShadow: "0 0 6px 3px #BB86FC",
    }}
  >
    <Icon as={icon} w={6} h={6} color="#BB86FC" /> {/* Accent Color */}
    <Text fontSize="lg" fontWeight="600">
      {name}
    </Text>
  </HStack>
);

const CertificationCard = ({ name, issuer, onClick }) => (
  <Box
    bg="#1E1E1E" // Dark Gray Background
    p={4}
    borderRadius="md"
    boxShadow="md"
    onClick={onClick}
    cursor="pointer"
    transition="all 0.3s ease-in-out"
    _hover={{
      boxShadow: "0 0 6px 3px #BB86FC",
    }}
  >
    <Heading as="h4" size="md" mb={2} color="#BB86FC">
      {" "}
      {/* Accent Color */}
      {name}
    </Heading>
    <Text fontSize="sm" color="#B0BEC5">
      {" "}
      {/* Light Gray Text */}
      Issued by: {issuer}
    </Text>
  </Box>
);

export default Skills;
