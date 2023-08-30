import React, { useState } from "react";

import ProjectCard from "components/Project/ProjectCard";
import ProjectExplain from "components/Project/ProjectExplain";

import ProjectDescription from "../ProjectDescription";
import ProjectImage from "../ProjectImage";
import ProjectExplainMobile from "../ProjectExplain";
import ProjectTachStack from "../ProjectTechStack";
import ProjectName from "../Project Utilities/ProjectName";
import ProjectCredential from "../Project Utilities/ProjectCredential";
import ProjectContainer from "../Project Utilities/ProjectContainer";
import ButtonContainer from "../Project Utilities/ButtonContainer";
import TabBar from "./TabBar";
import Button from "../../Button/Button";

export default function ProjectLeft({
  name,
  ProjectExplainForMobile,
  ProjectExplainOne,
  ProjectExplainTwo,
  ProjectCredentials,
  ViewCodeLink,
  LiveDemoLink,
  ProjectPicture,
  ProjectAdminCredential,
}) {
  const [descriptionActiveProshop, setDescriptionActiveProshop] =
    useState(true);

  const toggleActiveDescription = (value) => {
    if (descriptionActiveProshop === true && value === "description") {
      setDescriptionActiveProshop(true);
    } else if (value === "tech-stacks" && descriptionActiveProshop === true) {
      setDescriptionActiveProshop(false);
    } else if (value === "description" && descriptionActiveProshop === false) {
      setDescriptionActiveProshop(true);
    }
  };

  return (
    <ProjectContainer>
      <ProjectCard top="0" left="35%">
        <ProjectImage
          imageArray={ProjectPicture}
          width="80%"
          height="75%"
          top="15%"
          left="-50%"
        />
        <ProjectDescription margin="7% 7% 7% 35%">
          <TabBar
            descriptionActiveProshop={descriptionActiveProshop}
            toggleActiveDescription={(val) => toggleActiveDescription(val)}
          />
          {descriptionActiveProshop ? (
            <>
              <ProjectName>{name}</ProjectName>
              <ProjectExplainMobile>
                {ProjectExplainForMobile}
              </ProjectExplainMobile>
              <ProjectExplain>{ProjectExplainOne}</ProjectExplain>
              <ProjectExplain>{ProjectExplainTwo}</ProjectExplain>
              <ProjectCredential
                projectName={name}
                ProjectCredentials={ProjectCredentials}
                ProjectAdminCredential={ProjectAdminCredential}
              />
              <ButtonContainer>
                <Button link={ViewCodeLink} content="View Code" />
                <Button link={LiveDemoLink} content="Live Demo" />
              </ButtonContainer>
            </>
          ) : (
            <ProjectTachStack projectName={name} />
          )}
        </ProjectDescription>
      </ProjectCard>
    </ProjectContainer>
  );
}
