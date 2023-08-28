import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";

const ProjectCard = (props) => {
  const [isLargerThan1400] = useMediaQuery("(max-width: 1400px)");

  return (
    <Box
      backgroundColor="#30302e"
      top={isLargerThan1400 ? "0%" : props.top}
      left={isLargerThan1400 ? "0%" : props.left}
      display={isLargerThan1400 ? "flex" : "block"}
      flexDirection={isLargerThan1400 ? "column" : "row"}
      justifyContent={isLargerThan1400 ? "center" : "flex-start"}
      alignItems={isLargerThan1400 ? "center" : "flex-start"}
      width={isLargerThan1400 ? "85%" : "65%"}
      position="relative"
      height="100%"
      borderRadius="15px"
    >
      {props.children}
    </Box>
  );
};

export default ProjectCard;
