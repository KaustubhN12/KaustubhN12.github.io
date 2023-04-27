import { Badge, Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Fitness Blender",
      description:
        "Fitness Blender is a fitness website that provides workout programs for fitness",
      image: "https://i.ibb.co/Ydhvg24/Screenshot-1848.png",
      techStack: ["HTML", "CSS", "json-server", "Javascript", "bootStrap css"],
      github: "https://github.com/MrVivek30/violet-support-6758",
      demo: "https://relaxed-douhua-b76152.netlify.app/",
    },
    {
      id: 2,
      name: "BrandStore",
      description:
        "Brandstore is a clone of Finish Line which is a retail chain that sells athletic shoes and related apparel and accessories.",
      image: "https://i.ibb.co/0DpTvW4/Screenshot-2024.png",
      techStack: ["HTML", "CSS", "React js", "Firebase", "chakra ui"],
      github: "https://github.com/KaustubhN12/-kind-bushes-4533",
      demo: "https://playful-malabi-6fe0d3.netlify.app/",
    },
    {
      id: 3,
      name: "GlamUp",
      description:
        "Glamup is a clone of e-commerce website nykaa which sells beauty,wellness and fashion products.",
      image: "https://i.ibb.co/FVQC87T/Screenshot-2029.png",
      techStack: [
        "HTML",
        "CSS",
        "React Js",
        "Redux-Thunk",
        "Firebase",
        "chakra ui",
      ],
      github: "https://github.com/KaustubhN12/nappy-prose-7608",
      demo: "https://glam-up.vercel.app/",
    },
    {
      id: 4,
      name: "DoorStep",
      description:
        "DoorStep is MERN Stack web application which is a clone of Nearbuy.com that allows you to buy voucher and coupons.",
      image: "https://i.ibb.co/4Sw5vXY/Screenshot-2082.png",
      techStack: [
        "React Js",
        "Redux-Thunk",
        "Firebase",
        "chakra ui",
        "Node.js",
        "Mongo-DB",
        "jwt-Authentication",
      ],
      github: "https://github.com/KaustubhN12/dizzy-stitch-9009",
      demo: "https://doorstep-iota.vercel.app/",
    },
    {
      id: 5,
      name: "Todo App",
      description:
        "This is a simple web application that I created using HTML, CSS, and JavaScript. It allows users to create, edit, and delete tasks that they need to accomplish.",
      image: "https://i.ibb.co/JK97q29/Screenshot-2255.png" ,
      techStack: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/MrVivek30/violet-support-6758",
      demo: "https://tubular-kitten-001b69.netlify.app/",
    },
  ];

  return (
    <>
      <Text
        id="projects"
        fontSize="4xl"
        fontWeight="600"
        margin="auto"
        textAlign="center"
      >
        Projects
      </Text>
      <Box
        // height={["325vh", "190vh", "135vh"]}
        height={{ base: "200vh", md: "135vh", lg: "135vh" }}
        // marginBottom={{ base: "870px", md: "20px", lg: "0px" }}
        // marginBottom={['55em', '0em', '0em', '0em', '0em', '0em']}
        marginBottom={['50em', '0em', '0em']}
        display="grid"
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        gap="20px"
        marginTop={"30px"}
      >
        {projects.map((el) => {
          return (
            <Box border="3px solid teal" height="auto" >
              <Image src={el.image} />
              <Box className="description" padding={"10px"}>
                <Box className="project-tech-stack">
                  {el.techStack.map((tech) => {
                    return (
                      <Badge
                        marginRight={"10px"}
                        borderRadius="full"
                        px="2"
                        colorScheme="teal"
                      >
                        {tech}
                      </Badge>
                    );
                  })}
                </Box>
                <Text fontSize="2xl" marginTop={"10px"} marginBottom={"10px"}>
                  {el.name}
                </Text>
                <Text marginBottom={"10px"}>{el.description}</Text>
                <Flex justifyContent="space-around" marginBottom={"0px"}>
                  <Box>
                    <Link href={el.demo} isExternal>
                      <Button>
                        Demo
                        <Text as="span" ml={"2"}>
                          <ExternalLinkIcon />
                        </Text>
                      </Button>
                    </Link>
                  </Box>
                  <Box>
                    <Link href={el.github} isExternal>
                      <Button>
                        Github
                        <Text as="span" ml={"2"}>
                          <ExternalLinkIcon />
                        </Text>
                      </Button>
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Projects;
