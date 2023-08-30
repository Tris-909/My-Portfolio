import React, { useState } from "react";
import ProjectCard from "components/Project/ProjectCard";
import ProjectExplain from "components/Project/ProjectExplain";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";
import ProjectTachStack from "./ProjectTechStack";
import ProjectName from "./Project Utilities/ProjectName";
import ProjectCredential from "./Project Utilities/ProjectCredential";
import ProjectContainer from "./Project Utilities/ProjectContainer";
import ButtonContainer from "./Project Utilities/ButtonContainer";
import TabBar from "./TabBar";
import ProjectButton from "components/Project/ProjectButton";

const ProjectLeft = ({
  name,
  descriptions,
  credentials,
  viewCodeLink,
  liveDemoLink,
  projectPictures,
  projectSkills,
}) => {
  const [descriptionIsActive, setDescriptionIsActive] = useState(true);

  const toggleActiveDescription = (value) => {
    if (descriptionIsActive === true && value === "description") {
      setDescriptionIsActive(true);
    } else if (value === "tech-stacks" && descriptionIsActive === true) {
      setDescriptionIsActive(false);
    } else if (value === "description" && descriptionIsActive === false) {
      setDescriptionIsActive(true);
    }
  };

  return (
    <ProjectContainer>
      <ProjectCard top="0" left="35%">
        <ProjectImage
          imageArray={projectPictures}
          width="80%"
          height="75%"
          top="15%"
          left="-50%"
        />
        <ProjectDescription margin="7% 7% 7% 35%">
          <TabBar
            descriptionActive={descriptionIsActive}
            toggleActiveDescription={(val) => toggleActiveDescription(val)}
          />
          {descriptionIsActive ? (
            <>
              <ProjectName>{name}</ProjectName>
              {descriptions.map((description) => (
                <ProjectExplain text={description} />
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

export default ProjectLeft;
