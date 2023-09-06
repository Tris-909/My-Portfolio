import React from "react";
import { Box, SimpleGrid, useMediaQuery } from "@chakra-ui/react";

const ProjectTechStack = ({ projectSkills }) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      width="100%"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SimpleGrid
        columns={isLargerThan600 ? 2 : 1}
        spacing={isLargerThan600 ? 10 : 5}
        minHeight={isLargerThan600 ? "150px" : "250px"}
      >
        {projectSkills.map((skill) => (
          <Box fontSize="1.5rem" key={skill}>
            {skill}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectTechStack;
