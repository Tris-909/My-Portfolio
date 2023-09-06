import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";

const ProjectDescription = (props) => {
  const [isLargerThan1400] = useMediaQuery("(max-width: 1400px)");

  return (
    <Box
      margin={isLargerThan1400 ? "5%" : props.margin}
      width={isLargerThan1400 ? "85%" : "60%"}
      height={isLargerThan1400 ? "100%" : "70%"}
      color="white"
      position="relative"
    >
      {props.children}
    </Box>
  );
};

export default ProjectDescription;
