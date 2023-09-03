import React from "react";
import ProjectRight from "components/Project/ProjectRight";
import { FadeAnimation } from "components/Project/ProjectAnimation";
import APP_DATA from "components/Project/Data";
import { Box } from "@chakra-ui/react";

const Projects = () => {
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
      >
        My Projects
      </Box>

      <ProjectRight
        name={APP_DATA.SAVING_APP.name}
        descriptions={APP_DATA.SAVING_APP.descriptions}
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
