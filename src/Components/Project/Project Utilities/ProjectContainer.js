import React from "react";
import styled from "styled-components";

const ProjectContainerStyled = styled.div`
  display: flex;
  font-family: "Nunito Sans", sans-serif;
  flex-direction: column;
  position: relative;
  margin: 0% 10% 5% 10%;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0% 0% 5% 0%;
    height: initial;
  }

  @media (min-width: 1800px) {
    margin: 0% 15% 5% 15%;
  }

  @media (min-width: 2200px) {
    margin: 0% 20% 5% 20%;
  }

  @media (min-width: 2600px) {
    margin: 0% 25% 5% 25%;
  }

  @media (min-width: 3000px) {
    margin: 0% 30% 5% 30%;
  }
`;

export default function ProjectContainer(props) {
  return <ProjectContainerStyled>{props.children}</ProjectContainerStyled>;
}
