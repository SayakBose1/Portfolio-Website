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
  FaHtml5,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import Layout from "../Components/Layout";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "React", icon: FaReact },
    { name: "NodeJs", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "Java", icon: DiJava },
    { name: "SQL", icon: FaDatabase },
  ];

  const csFundamentals = [
    { name: "DBMS", icon: FaDatabase },
    { name: "OOPS", icon: FaCode },
    { name: "Operating System", icon: FaCode },
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
  ];

  const handleOpenPDF = (url) => {
    window.open(url, "_blank");
  };

  // Motion variants for staggered animation
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <Box
        py={{ base: "0", md: "10" }}
        px={5}
        bg="#121212"
        color="#FFFFFF"
        borderRadius="15"
        m={4}
      >
        {/* Technical Skills */}
        <VStack spacing={5} align="start" maxW="1000px" mx="auto">
          <Heading as="h1" size="xl" mb={5}>
            Technical Skills
          </Heading>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap={6}
            >
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <SkillCard name={skill.name} icon={skill.icon} />
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </VStack>

        {/* CS Fundamentals */}
        <VStack spacing={5} align="start" maxW="1000px" mx="auto" mt={10}>
          <Heading as="h1" size="xl" mb={5}>
            CS Fundamentals
          </Heading>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={6}
            >
              {csFundamentals.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <SkillCard name={skill.name} icon={skill.icon} />
                </motion.div>
              ))}
            </Grid>
          </motion.div>
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
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <HStack
      bg="#1E1E1E"
      p={4}
      borderRadius="md"
      boxShadow="md"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      transition="all 0.3s ease-in-out"
      _hover={{ boxShadow: "0 0 6px 3px #BB86FC" }}
    >
      <Icon as={icon} w={6} h={6} color="#BB86FC" />
      <Text fontSize="lg" fontWeight="600">
        {name}
      </Text>
    </HStack>
  </motion.div>
);

const CertificationCard = ({ name, issuer, onClick }) => (
  <Box
    bg="#1E1E1E"
    p={4}
    borderRadius="md"
    boxShadow="md"
    onClick={onClick}
    cursor="pointer"
    transition="all 0.3s ease-in-out"
    _hover={{ boxShadow: "0 0 6px 3px #BB86FC" }}
  >
    <Heading as="h4" size="md" mb={2} color="#BB86FC">
      {name}
    </Heading>
    <Text fontSize="sm" color="#B0BEC5">
      Issued by: {issuer}
    </Text>
  </Box>
);

export default Skills;
