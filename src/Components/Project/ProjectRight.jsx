import React, { useState } from "react";
import ProjectCard from "./ProjectCard/index";
import ProjectExplain from "./ProjectExplain/index";
import ProjectDescription from "./ProjectDescription/index";
import ProjectImage from "./ProjectImage/index";
import ProjectTachStack from "./ProjectTechStack/index";
import {
  ProjectName,
  ProjectCredential,
  ProjectContainer,
  ButtonContainer,
} from "./Project Utilities/index";
import TabBar from "./TabBar/index";
import ProjectButton from "./ProjectButton/index";

const ProjectRight = ({
  name,
  credentials,
  descriptions,
  viewCodeLink,
  liveDemoLink,
  projectPictures,
  projectSkills,
}) => {
  const [descriptionIsActive, setDescriptionIsActive] = useState(true);

  const toggleDescriptionActive = (value) => {
    if (descriptionIsActive === true && value === "description") {
      setDescriptionIsActive(true);
    } else if (descriptionIsActive === true && value === "tech-stacks") {
      setDescriptionIsActive(false);
    } else if (value === "description" && descriptionIsActive === false) {
      setDescriptionIsActive(true);
    }
  };

  return (
    <ProjectContainer>
      <ProjectCard top="0" left="0">
        <ProjectImage
          imageArray={projectPictures}
          width="80%"
          height="70%"
          top="10%"
          left="70%"
        />
        <ProjectDescription margin="7%">
          {name === "Saving App" ? (
            <TabBar
              descriptionActive={descriptionIsActive}
              toggleActiveDescription={toggleDescriptionActive}
            />
          ) : null}
          {descriptionIsActive ? (
            <>
              <ProjectName name={name} />
              {descriptions.map((description, index) => (
                <ProjectExplain text={description} key={index} />
              ))}
              <ProjectCredential credentials={credentials} />
              <ButtonContainer>
                <ProjectButton link={viewCodeLink} content="View Code" />
                <ProjectButton link={liveDemoLink} content="Live Demo" />
              </ButtonContainer>
            </>
          ) : (
            <ProjectTachStack projectSkills={projectSkills} />
          )}
        </ProjectDescription>
      </ProjectCard>
    </ProjectContainer>
  );
};

export default ProjectRight;
