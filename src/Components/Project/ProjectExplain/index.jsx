import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";

const ProjectExplain = ({ text }) => {
  const [isLargerThan550] = useMediaQuery("(max-width: 550px)");

  return (
    <Box
      as="div"
      fontSize="1.5rem"
      marginTop="1rem"
      display={isLargerThan550 ? "none" : "block"}
    >
      {text}
    </Box>
  );
};

export default ProjectExplain;
