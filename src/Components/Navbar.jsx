import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from "react-helmet";
import Kaustubh_Nawade_Resume from "../kaustubh_nawade_resume_.pdf";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("Home");

  return (
    <>
      <div>
        <Helmet>
          <title>{`Kaustubh | ${title}`}</title>
        </Helmet>
      </div>
      <Box
        id="nav-menu"
        pos={"sticky"}
        zIndex="7"
        top="0"
        textTransform={"capitalize"}
      >
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
            <Link
              onClick={() => setTitle("Home")}
              href="#home"
              className="nav-link home"
            >
              home
            </Link>
            <Link
              onClick={() => setTitle("About")}
              href="#about"
              className="nav-link about"
            >
              about
            </Link>
            <Link
              onClick={() => setTitle("Skills")}
              href="#skills"
              className="nav-link skills"
            >
              skills
            </Link>
            <Link
              onClick={() => setTitle("Projects")}
              href="#projects"
              className="nav-link projects"
            >
              projects
            </Link>
            <Link
              onClick={() => setTitle("Contact")}
              href="#contact"
              className="nav-link contact"
            >
              contact
            </Link>
            <Button
              width="max-content"
              colorScheme={"teal"}
              id="resume-button-1"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1H8W7AGE1t3B0WIe_Z8iOtpkGf4pvI2Ab/view?usp=share_link",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-1"
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
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
          <Box display={{ lg: "none" }} marginRight="10px">
            <Sidebar />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
