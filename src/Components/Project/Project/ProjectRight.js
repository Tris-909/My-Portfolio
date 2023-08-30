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

import TabBar from "./Tab-Bar";

import Button from "../../Button/Button";

const ProjectRight = ({
  name,
  credentials,
  descriptions,
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
          {name === "Saving App" ? (
            <TabBar
              descriptionActiveProshop={descriptionIsActive}
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
