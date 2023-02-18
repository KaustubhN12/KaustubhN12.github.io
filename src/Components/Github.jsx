import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <>
     <Heading marginTop="30px" mb="2rem" textAlign={"center"}>Github Stats</Heading>
     <Box>
        <Box width="870px" margin="auto" marginBottom="30px">
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
        <Box>
          <Link href="https://github.com/KaustubhN12"/>
          <Image
            id="github-streak-stats"
            width="500px"
            src="https://github-readme-streak-stats.herokuapp.com?user=KaustubhN12&theme=dark"
          />
        </Box>
        <Box>
          <Link href="https://github.com/KaustubhN12"/>
          <Image
            id="github-top-langs"
            width="500px"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=KaustubhN12&layout=compact&theme=dark"
          />
        </Box>
        <Box>
          <Link href="https://github.com/KaustubhN12"/>
          <Image
            width="500px"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=KaustubhN12&count_private=true&show_icons=true&theme=dark"
          />
        </Box>
      </Flex>
     </Box>
    </>
  )
}

export default Github
