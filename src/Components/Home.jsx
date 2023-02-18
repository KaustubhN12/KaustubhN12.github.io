import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { BsMouse } from "react-icons/bs";
  import { ImLinkedin } from "react-icons/im";
  import { FaGithub } from "react-icons/fa";
  import { HiOutlineMail } from "react-icons/hi";
  import { AiOutlineArrowDown, AiOutlineDownload } from "react-icons/ai";



  // import img from "./userPic.png";
  const Home = () => {
    return (
      <>
      <Flex
        height={{ base: "80vh", lg: "100vh" }}
        maxHeight={"750px"}
        className="background"
        id="home"
        flexDir={{ base: "column-reverse", lg: "row" }}
        align={"center"}
        justify="center"
        gap={{ base: "4", md: "6", lg: "8" }}
        // border="2px solid red"
      >
        <Flex
          maxWidth={{ base: "100%", lg: "40%" }}
          flexDir="column"
          gap="1rem"
          padding={"5px"}
        >
          <Heading id="user-detail-name">Hi I am Kaustubh</Heading>
          <Text fontSize={"1.4rem"} id="user-detail-intro">Full stack web develpor</Text>
          <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
          <Flex gap={"8"} align="center">
            <a target="_blank"  download>
              <Button
                id="resume-button-2"
                width="max-content"
                colorScheme={"teal"}
              >
                Resume
                <Text as="span" ml={"2"}>
                  <AiOutlineDownload fontSize={"1.2rem"} />
                </Text>
              </Button>
            </a>
            <Flex gap="3">
              <Link id="contact-linkedin" href='https://www.linkedin.com/in/kaustubh-nawade-1307751a0/' isExternal>
                <ImLinkedin fontSize={"1.6rem"} />
              </Link>
              <Link id="contact-github" href="https://github.com/KaustubhN12" isExternal>
                <FaGithub fontSize={"1.6rem"} />
              </Link>
              <Link  id="contact-email" href="https://nawadekaustubh@gmail.com" isExternal>
                <HiOutlineMail fontSize={"1.6rem"} />
              </Link>
            </Flex>
          </Flex>
          <Box marginTop={"4rem"} display={{ base: "none", lg: "block" }}>
            <Flex align={"center"} gap="2">
              <span>
                <BsMouse fontSize={"1.4rem"} />
              </span>
              <Text>scroll down</Text>
              <span>
                <AiOutlineArrowDown />
              </span>
            </Flex>
          </Box>
        </Flex>
        <Box
          height={{ base: "200px", md: "300px", lg: "400px" }}
          overflow="hidden"
          className="profile"
        >
          <Image
            src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif"
            borderRadius="1.2rem"
            height="100%"
          />
        </Box>
      </Flex>
      </>
    );
  };
  
  export default Home;
  //2// https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif
  //3 https://media.giphy.com/media/2ikwIgNrmPZICNmRyX/giphy.gif