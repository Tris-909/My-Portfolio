import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const AboutMeContainer = styled.div`
  width: 90%;
  margin: 7% 5% 5% 5%;
  border-radius: 10px;
  z-index: 1;
  padding: 20px 0px;
  position: relative;
  background-color: #f7faff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
`;

const AboutMeButton = styled.div`
  background-color: #f7faff;
  font-size: 25px;
  font-weight: 800;

  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonActive = styled.span`
  border-bottom: ${(props) => (props.content ? "3px double black" : "0px")};
`;

const AboutMeText = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 30px;

  @media (max-width: 1300px) {
    font-size: 28px;
  }

  @media (max-width: 650px) {
    font-size: 24px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

const AboutMeSection = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const MySkillSection = styled.div`
  width: 90%;
  height: 90%;
`;

const WorkLink = styled.a`
  cursor: pointer;
  font-weight: 800;
  color: #f73bcb;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: -50px;
  left: 0%;
  background: transparent;

  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
`;

const AboutMeTab = () => {
  return (
    <AboutMeSection>
      <AboutMeText>
        {" "}
        I'm a Full-Stack Developer at{" "}
        <WorkLink href="https://www.sendpayments.com/" target="_">
          SendFX
        </WorkLink>{" "}
        to help people and business transfer money around the world.
      </AboutMeText>
      <AboutMeText>
        {" "}
        At work, I work on new features, fix bugs, do code reviews and drink
        some more coffee.{" "}
      </AboutMeText>
      <AboutMeText>
        {" "}
        I love building web-applications using React and Amazon Web Services.{" "}
      </AboutMeText>
    </AboutMeSection>
  );
};

const AboutMeV2 = () => {
  return (
    <Fade left>
      <AboutMeContainer id="Aboutme">
        <ButtonContainer>
          <AboutMeButton left="0%">
            <ButtonActive>About Me</ButtonActive>
          </AboutMeButton>
        </ButtonContainer>
        <AboutMeTab />
      </AboutMeContainer>
    </Fade>
  );
};

export default AboutMeV2;
