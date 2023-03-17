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
   <Text fontSize="4xl" fontWeight="600"   id="about" className="about section"  margin="auto" textAlign="center" >About me</Text>
    <Flex 
    height="55vh"
    border="1px solid red"
    width="85%"
    margin="auto"
    >    
     <Box width="35%">
      <Image  className="home-img" margin="auto" border="4px solid teal" borderRadius="50%" src="https://i.ibb.co/D1QhFKy/portfolio-profile-pic.jpg"/>
     </Box>
     <Box padding="50px" alignItems="center" alignContent="center" height="100%" width="65%">
       <Box alignItems="center" >
       <Text>
       Aspiring Full Stack Web Developer Skilled in MERN stack with hands-on experience in developing scalable websites using a wide range of Front-end and Back-end skills like HTML, CSS, JavaScript, React, MongoDB, and Node JS. Looking forward to joining a progressive organization with opportunities to work on challenging projects.
          </Text>
       </Box>
      </Box>
    </Flex>
    </>
  )
}

export default About
