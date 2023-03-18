import React from 'react'
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Text,
  } from "@chakra-ui/react";

const About = () => {
  return (
    <>
    <Flex 
    height="55vh"
    border="1px solid red"
    width="85%"
    margin="auto"
    id="about"
    className="about section"
    >    
      
     <Box width="35%">
      <Image  className="home-img" margin="auto" border="4px solid teal" borderRadius="50%" src="https://i.ibb.co/D1QhFKy/portfolio-profile-pic.jpg"/>
     </Box>
     <Box padding="50px" alignItems="center" alignContent="center" height="100%" width="65%">
     <Text fontSize="4xl" fontWeight="600"   margin="auto"  textAlign="center" >About me</Text>
       <Text id='user-detail-intro'>
        A Full-Stack Web Developer specializing in MERN Stack with good
        proficiency in ReactJS, JavaScript, Redux, NodeJS, ExpressJS, Data
        Structures and Algorithms. Has a Problem-Solving mindset and the ability
        to perform well in a team. Acquired 1200+ hours of coding and hands-on
        experience in cloning websites. Looking forward to working as an
        accountable and competent professional in an exciting tech organization.
          </Text>
      </Box>
    </Flex>
    </>
  )
}

export default About

