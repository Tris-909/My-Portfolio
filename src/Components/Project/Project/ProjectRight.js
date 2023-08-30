import React, { useState } from "react";

import ProjectCard from "components/Project/ProjectCard";
import ProjectImage from "components/Project/ProjectImage";
import ProjectTachStack from "components/Project/ProjectTechStack";
import ProjectDescription from "components/Project/ProjectDescription";
import ProjectExplain from "components/Project/ProjectExplain";

import TabBar from "./Tab-Bar";
import ProjectName from "../Project Utilities/ProjectName";
import ProjectCredential from "../Project Utilities/ProjectCredential";
import ProjectContainer from "../Project Utilities/ProjectContainer";
import ButtonContainer from "../Project Utilities/ButtonContainer";

import Button from "../../Button/Button";

const ProjectRight = ({
  projectName,
  descriptions,
  ProjectCredentials,
  ProjectAdminCredential,
  ViewCodeLink,
  LiveDemoLink,
  ProjectPicture,
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
          imageArray={ProjectPicture}
          width="80%"
          height="70%"
          top="10%"
          left="70%"
        />
        <ProjectDescription margin="7%">
          {projectName === "Saving App" ? (
            <TabBar
              descriptionActiveProshop={descriptionIsActive}
              toggleActiveDescription={(value) =>
                toggleDescriptionActive(value)
              }
            />
          ) : null}
          {descriptionIsActive ? (
            <>
              <ProjectName>{projectName}</ProjectName>
              {descriptions.map((description) => (
                <ProjectExplain text={description} />
              ))}
              <ProjectCredential
                projectName={projectName}
                ProjectCredentials={ProjectCredentials}
                ProjectAdminCredential={ProjectAdminCredential}
              />
              <ButtonContainer>
                <Button link={ViewCodeLink} content="View Code" />
                <Button link={LiveDemoLink} content="Live Demo" />
              </ButtonContainer>
            </>
          ) : (
            <ProjectTachStack
              projectSkills={[
                "React",
                "TypeScript",
                "JavaScript",
                "Zustand",
                "Responsive Layout",
                "ChakraUI",
                "Firebase",
                "CloudFireStore",
                "Git / Github",
              ]}
            />
          )}
        </ProjectDescription>
      </ProjectCard>
    </ProjectContainer>
  );
};

export default ProjectRight;
