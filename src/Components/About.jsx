import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Text fontSize="4xl" fontWeight="600" margin="auto" textAlign="center">
        About me
      </Text>
      <Flex
        height={{ base: "95vh", md: "60vh", lg: "55vh" }}
        width="85%"
        margin="auto"
        id="about"
        className="about section"
        flexDir={{ base: "column", md: "row", lg: "row" }}
      >
        <Box width={{ base: "100%", md: "50%", lg: "35%" }} marginTop={"30px"}>
          <Image
            className="home-img"
            margin="auto"
            border="4px solid teal"
            borderRadius="50%"
            src="https://i.ibb.co/D1QhFKy/portfolio-profile-pic.jpg"
          />
        </Box>
        <Box
          padding={{ base: "0px", md: "40px", lg: "50px" }}
          marginTop={{ base: "30px", md: "20px", lg: "30px" }}
          alignItems="center"
          alignContent="center"
          height="100%"
          width={{ base: "100%", md: "50%", lg: "65%" }}
        >
          <Text id="user-detail-intro">
            A Full-Stack Web Developer specializing in MERN Stack with good
            proficiency in ReactJS, JavaScript, Redux, NodeJS, ExpressJS, Data
            Structures and Algorithms. Has a Problem-Solving mindset and the
            ability to perform well in a team. Acquired 1200+ hours of coding
            and hands-on experience in cloning websites. Looking forward to
            working as an accountable and competent professional in an exciting
            tech organization.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default About;
