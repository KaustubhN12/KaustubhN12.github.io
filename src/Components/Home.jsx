import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineArrowDown, AiOutlineDownload } from "react-icons/ai";
import Kaustubh_Nawade_Resume from "../Kaustubh_Nawade_Resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    Aos.init();
  }, []);

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
        marginBottom={["40px", "0px", "0px"]}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Flex
          maxWidth={{ base: "100%", lg: "40%" }}
          flexDir="column"
          gap="1rem"
          padding={"5px"}
        >
          <Heading id="user-detail-name">Hi I am Kaustubh</Heading>
          <Text fontSize={"1.4rem"}>Full stack web developer</Text>
          <Text>
            Aspiring Full Stack Web Developer Skilled in MERN stack with
            hands-on experience in developing scalable websites using a wide
            range of Front-end and Back-end skills like HTML, CSS, JavaScript,
            React, MongoDB, and Node JS. Looking forward to joining a
            progressive organization with opportunities to work on challenging
            projects.
          </Text>
          <Flex gap={"8"} align="center">
            <Button
              width="max-content"
              colorScheme={"teal"}
              id="resume-button-2"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1H8W7AGE1t3B0WIe_Z8iOtpkGf4pvI2Ab/view?usp=share_link",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-2"
                href={Kaustubh_Nawade_Resume}
                target="_blank"
                download="Kaustubh_Nawade_Resume.pdf"
              >
                Resume
              </a>
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>

            <Flex gap="3">
              <Link
                id="contact-linkedin"
                href="https://www.linkedin.com/in/kaustubh-nawade-1307751a0/"
                isExternal
              >
                <ImLinkedin fontSize={"1.6rem"} />
              </Link>
              <Link
                id="contact-github"
                href="https://github.com/KaustubhN12"
                isExternal
              >
                <FaGithub fontSize={"1.6rem"} />
              </Link>
              <Link
                id="contact-email"
                href="https://nawadekaustubh@gmail.com"
                isExternal
              >
                <HiOutlineMail fontSize={"1.6rem"} />
              </Link>
            </Flex>
          </Flex>
          <Box marginTop={"4rem"} display={{ base: "none", lg: "block" }}>
            <Link href="#about" className="nav-link about">
              <Flex align={"center"} gap="2">
                <span>
                  <BsMouse fontSize={"1.4rem"} />
                </span>
                <Text>scroll down</Text>
                <span>
                  <AiOutlineArrowDown />
                </span>
              </Flex>
            </Link>
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
