import React from "react";
import { Box } from "@chakra-ui/react";

const ProjectExplain = ({ text }) => {
  return (
    <Box as="div" fontSize="1.5rem" marginTop="1rem">
      {text}
    </Box>
  );
};

export default ProjectExplain;
