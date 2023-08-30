import React from "react";
import ProjectRight from "components/Project/ProjectRight";
import { FadeAnimation } from "components/Project/ProjectAnimation";
import APP_DATA from "components/Project/Data";
import { Box, useMediaQuery } from "@chakra-ui/react";

const Projects = () => {
  const [isLargerThan1400] = useMediaQuery("(max-width: 1400px)");

  return (
    <Box
      backgroundColor="#141414"
      width="100%"
      marginBottom="1.5rem"
      display={isLargerThan1400 ? "flex" : "block"}
      flexDirection={isLargerThan1400 ? "column" : "row"}
      alignItems={isLargerThan1400 ? "center" : "start"}
      rowGap={"20px"}
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

      <FadeAnimation>
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
      </FadeAnimation>
    </Box>
  );
};

export default Projects;
