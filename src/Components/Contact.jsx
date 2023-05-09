import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
  useColorMode
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@chakra-ui/react";

export default function Contact() {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await emailjs
      .sendForm(
        "service_pym1c3f",
        "template_npcgdkl",
        e.target,
        "Rb41FcMq-fbDOZtmM"
      )
      .then(
        (result) => {
          toast({
            title: "Message send Successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden" id="contact">
      <Flex>
        <Box
          bg={colorMode === "dark" ? "#1a202c" : "white"}

          color={colorMode === "dark" ? "white" : "black"}
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        id="contact-phone"
                        height="48px"
                        variant="ghost"
                        // color="#DCE2FF"
                        color={colorMode === "dark" ? "#DCE2FF" : "black"}
                        _hover={{ border: "2px solid #81e6d9" }}
                        leftIcon={<MdPhone color={colorMode === "dark" ? "#81e6d9" : "black"}  size="20px" />}
                      >
                        +91-9834143462
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color={colorMode === "dark" ? "#DCE2FF" : "black"}
                        id="contact-email"
                        _hover={{ border: "2px solid #81e6d9" }}
                        leftIcon={<MdEmail color={colorMode === "dark" ? "#81e6d9" : "black"} size="20px" />}
                      >
                        nawadekaustubh@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color={colorMode === "dark" ? "#DCE2FF" : "black"}
                        _hover={{ border: "2px solid #81e6d9" }}
                        leftIcon={<MdLocationOn color={colorMode === "dark" ? "#81e6d9" : "black"} size="20px" />}
                      >
                        Wardha, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
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
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg={colorMode === "dark" ? "#1a202c" : "white"} borderRadius="lg">
                  <Box m={8}>
                    <VStack spacing={5}>
                      <form onSubmit={handleSubmit}>
                        <FormControl id="name">
                          <FormLabel>Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              name="user_name"
                              required
                              borderColor={"teal"}
                              type="text"
                              placeholder="Enter your name"
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              name="user_email"
                              required
                              borderColor={"teal"}
                              type="email"
                              placeholder="Enter you email"
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            name="message"
                            required
                            borderColor={"teal"}
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            type="submit"
                            marginTop={"15px"}
                            colorScheme={"teal"}
                            _hover={{ boxShadow: "lg" }}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
//   <IconButton
//   aria-label="LinkedIn"
//   variant="ghost"
//   size="lg"
//   isRound={true}
//   _hover={{ bg: '#0D74FF' }}
//   icon={<ImLinkedin size="28px" />}
// />
// <IconButton
//   aria-label="github"
//   variant="ghost"
//   size="lg"
//   isRound={true}
//   _hover={{ bg: '#0D74FF' }}
//   icon={<BsGithub size="28px" />}
// />
// <IconButton
//   aria-label="discord"
//   variant="ghost"
//   size="lg"
//   isRound={true}
//   _hover={{ bg: '#0D74FF' }}
//   icon={<HiOutlineMail size="28px" />}
// />
