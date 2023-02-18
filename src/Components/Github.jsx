import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <>
     <Heading mb="2rem" textAlign={"center"}>Github Stats</Heading>
     <Box>
        <Box width="1000px" margin="auto">
        <GitHubCalendar
            username="KaustubhN12"
            className="react-activity-calendar"
          />
        </Box>
        <Flex>
            <Box>
                
            </Box>
        </Flex>
     </Box>
    </>
  )
}

export default Github
