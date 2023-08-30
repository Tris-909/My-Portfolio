import React from "react";
import { Box } from "@chakra-ui/react";

const ProjectName = ({ name }) => {
  return (
    <Box
      fontSize="3em"
      fontWeight="600"
      sx={{
        "@media (max-width: 550px)": {
          fontSize: "2em",
        },
        "@media (max-width: 350px)": {
          fontSize: "1.5em",
        },
      }}
    >
      {name}
    </Box>
  );
};

export default ProjectName;
