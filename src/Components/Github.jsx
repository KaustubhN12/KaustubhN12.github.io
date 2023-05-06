import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { AiOutlineGithub } from "react-icons/ai";


const Github = () => {
  return (
    <>
      <Heading 
      // marginTop="90px"
       mb="2rem" 
       textAlign={"center"} 
       marginBottom={"60px"}
       marginTop="90px"
       >
        Github Stats 
      </Heading> 
      <Box>
        <Box
          width={["250px", "430px", "870px"]}
          margin="auto"
          marginBottom={["40px","60px","60px"]}
        >
          <GitHubCalendar
            username="KaustubhN12"
            className="react-activity-calendar"
          />
        </Box>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          margin={"1rem"}
          align={"center"}
          justify={"center"}
          gap="7"
        >
          <Box data-aos="zoom-out-right">
            <Link href="https://github.com/KaustubhN12" />
            <Image
              id="github-streak-stats"
              width={["auto","300px","390px"]}
              src="https://github-readme-streak-stats.herokuapp.com?user=KaustubhN12&theme=dark"
            />
          </Box>
          <Box data-aos="zoom-out-down">
            <Link href="https://github.com/KaustubhN12" />
            <Image
              id="github-top-langs"
              width={["auto","300px","390px"]}
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=KaustubhN12&layout=compact&theme=dark"
            />
          </Box>
          <Box data-aos="zoom-out-left">
            <Link href="https://github.com/KaustubhN12" />
            <Image
              width={["auto","300px","390px"]}
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=KaustubhN12&count_private=true&show_icons=true&theme=dark"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Github;
