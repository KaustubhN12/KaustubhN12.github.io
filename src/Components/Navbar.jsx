import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
// import Sidebar from "./Sidebar";
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from "react-helmet";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [title,setTitle] = useState("Home");

  return (
    <>
       <div>
      <Helmet>
        <title>{`Kaustubh | ${title}`}</title>
      </Helmet>
      </div>
    <Box id="nav-menu" pos={"sticky"} top="0" textTransform={"capitalize"}>
      <Flex
        justify={"space-between"}
        height="4rem"
        align={"center"}
        transition={"all 1s"}
      >
        <Box height="3.5rem" marginLeft={{ base: "2px", lg: "2rem" }}>
          <Link href="#">
            <Image
              src={
                colorMode == "dark"
                  ? "https://i.ibb.co/bW9Lsw5/portfolio-name-dark.png"
                  : "https://i.ibb.co/G5ZzNCp/portfolio-name-light2.png"
              }
              height={"3.5rem"}
            />
          </Link>
        </Box>

        <Flex
          display={{ base: "none", lg: "flex" }}
          width={"50%"}
          justify="space-around"
          align={"center"}
          marginRight="2rem"
        >
          <Link onClick={()=>setTitle("Home")} href="#home" className="nav-link home">
            home
          </Link>
          <Link onClick={()=>setTitle("About")} href="#about" className="nav-link about">
            about
          </Link>
          <Link onClick={()=>setTitle("Skills")} href="#skills" className="nav-link skills">
            skills
          </Link>
          <Link onClick={()=>setTitle("Projects")} href="#projects" className="nav-link projects">
            projects
          </Link>
          <Link onClick={()=>setTitle("Contact")} href="#contact" className="nav-link contact">
            contact
          </Link>
          <Button
            className="nav-link resume"
            colorScheme={"teal"}
            id="resume-button-1"
          >
            Resume
            <Text as="span" ml={"2"}>
              <AiOutlineDownload fontSize={"1.2rem"} />
            </Text>
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
        {/* <Box display={{ lg: "none" }} marginRight="2rem">
          <Sidebar />
        </Box> */}
      </Flex>
    </Box>
    </>
  );
};

export default Navbar;