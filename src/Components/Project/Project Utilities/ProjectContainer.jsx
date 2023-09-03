import React from "react";
import { Box } from "@chakra-ui/react";

const ProjectContainer = ({ children }) => {
  return (
    <Box
      display="flex"
      fontFamily="Nunito Sans"
      flexDirection="column"
      position="relative"
      margin="0% 10% 0% 10%"
      sx={{
        "@media (min-width: 3000px)": {
          margin: "0% 30% 5% 30%",
        },
        "@media (min-width: 2600px)": {
          margin: "0% 25% 5% 25%",
        },
        "@media (min-width: 2200px)": {
          margin: "0% 20% 5% 20%",
        },
        "@media (min-width: 1800px)": {
          margin: "0% 15% 5% 15%",
        },
        "@media (max-width: 1400px)": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0% 0% 5% 0%",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ProjectContainer;
