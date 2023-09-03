import React from "react";
import ProjectRight from "components/Project/ProjectRight";
import APP_DATA from "components/Project/Data";
import { Box, useMediaQuery } from "@chakra-ui/react";

const Projects = () => {
  const [isLargerThan550] = useMediaQuery("(max-width: 550px)");

  return (
    <Box
      backgroundColor="#141414"
      width="100%"
      marginBottom="1.5rem"
      display={"flex"}
      flexDirection={"column"}
      rowGap={"20px"}
      height={"100%"}
    >
      <Box
        color="white"
        borderRadius="10px"
        fontSize={"4.25em"}
        fontFamily={"Nunito Sans"}
        marginTop="2rem"
        marginBottom="55px"
        textAlign={"center"}
        sx={{
          "@media (max-width: 900px)": {
            marginBottom: "15px",
          },
        }}
      >
        My Projects
      </Box>

      <ProjectRight
        name={APP_DATA.SAVING_APP.name}
        descriptions={
          isLargerThan550
            ? [APP_DATA.SAVING_APP.descriptions[0]]
            : APP_DATA.SAVING_APP.descriptions
        }
        credentials={APP_DATA.SAVING_APP.credentials}
        viewCodeLink={APP_DATA.SAVING_APP.codeLink}
        liveDemoLink={APP_DATA.SAVING_APP.liveDemoLink}
        projectSkills={APP_DATA.SAVING_APP.skills}
        projectPictures={APP_DATA.SAVING_APP.pictures}
        isShow={true}
      />
    </Box>
  );
};

export default Projects;
