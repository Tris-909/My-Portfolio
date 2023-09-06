import React, { useState } from "react";
import ProjectCard from "components/Project/ProjectCard/ProjectCard";
import ProjectImage from "components/Project/ProjectImage/ProjectImage";
import ProjectTachStack from "components/Project/ProjectTechStack/ProjectTechStack";
import ProjectDescription from "components/Project/ProjectDescription";
import ProjectExplain from "components/Project/ProjectExplain";
import {
  ProjectName,
  ProjectCredential,
  ProjectContainer,
  ButtonContainer,
} from "./Project Utilities";
import TabBar from "components/Project/TabBar";
import ProjectButton from "components/Project/ProjectButton/ProjectButton";

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
