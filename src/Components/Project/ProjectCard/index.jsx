import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";

const ProjectCard = (props) => {
  const [isLargerThan1400] = useMediaQuery("(max-width: 1400px)");

  return (
    <Box
      backgroundColor="#30302e"
      top={isLargerThan1400 ? "0%" : props.top}
      left={isLargerThan1400 ? "0%" : props.left}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={isLargerThan1400 ? "center" : "flex-start"}
      alignItems={isLargerThan1400 ? "center" : "stretch"}
      position="relative"
      borderRadius="15px"
      height={"100%"}
      width={isLargerThan1400 ? "85%" : "65%"}
    >
      {props.children}
    </Box>
  );
};

export default ProjectCard;
