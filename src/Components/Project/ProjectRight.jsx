import React, { useState } from "react";
import ProjectCard from "components/Project/ProjectCard";
import ProjectImage from "components/Project/ProjectImage";
import ProjectTachStack from "components/Project/ProjectTechStack";
import ProjectDescription from "components/Project/ProjectDescription";
import ProjectExplain from "components/Project/ProjectExplain";
import ProjectName from "components/Project/Project Utilities/ProjectName";
import ProjectCredential from "components/Project/Project Utilities/ProjectCredential";
import ProjectContainer from "components/Project/Project Utilities/ProjectContainer";
import ButtonContainer from "components/Project/Project Utilities/ButtonContainer";
import TabBar from "components/Project/TabBar";
import ProjectButton from "components/Project/ProjectButton";

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
              toggleActiveDescription={(value) =>
                toggleDescriptionActive(value)
              }
            />
          ) : null}
          {descriptionIsActive ? (
            <>
              <ProjectName name={name} />
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

export default ProjectRight;
