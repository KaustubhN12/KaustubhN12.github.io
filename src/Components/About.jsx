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
   <Text fontSize="4xl" fontWeight="600"  margin="auto" textAlign="center" >About me</Text>
    <Flex 
    className="about section"
    id="about"
    height="65vh"
    border="1px solid red"
    width="85%"
    margin="auto"
    >    
     <Box width="35%">
      <Image  className="home-img" margin="auto" border="4px solid teal" borderRadius="50%" src="https://i.ibb.co/D1QhFKy/portfolio-profile-pic.jpg"/>
     </Box>
     <Box padding="50px" alignItems="center" alignContent="center" height="100%" width="65%">
       <Box alignItems="center" >
       <Text >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
       </Box>
      </Box>
    </Flex>
    </>
  )
}

export default About
