import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";
import "./backGroundEffect.css";

const FadeInLeftAnimation = keyframes`${fadeInLeft}`;
const FadeInRightAnimation = keyframes`${fadeInRight}`;

const TextContainer = styled.div`
  width: 100%;
  height: 110vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  position: relative;
  background: radial-gradient(ellipse at bottom, #141414 0%, #141414 100%);
  overflow: hidden;

  @media (max-width: 870px) {
    position: relative;
    height: 100vh;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (max-width: 870px) {
    position: relative;
    top: 5%;
    display: flex;
    align-items: flex-start;
  }
`;

const Text = styled.div`
  color: white;
`;

const SmallerText = styled(Text)`
  font-size: 4em;
  font-family: "Nunito Sans", sans-serif;
  animation: 1.25s ${FadeInRightAnimation} ease-out;

  @media (max-width: 870px) {
    font-size: 9vw;
    margin-left: 10%;
  }
`;

const MainText = styled(Text)`
  font-size: 6em;
  letter-spacing: 5px;
  font-family: "Nunito Sans", sans-serif;
  animation: 1.25s ${FadeInLeftAnimation} ease-out;

  @media (max-width: 870px) {
    font-size: 17vw;
    letter-spacing: 5px;
    margin-left: 10%;

    & span {
      display: block;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  position: relative;
  left: -2%;

  a {
    margin-right: 25%;
  }

  @media (max-width: 870px) {
    margin-left: 10%;
    position: inherit;
    left: 0%;
  }
`;

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

export default function Home() {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setCurrentScreenWidth(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <TextContainer id="Home">
      <FlexContainer>
        <MainText>
          Hello,<span>I'm Tri Tran</span>
        </MainText>
        <SmallerText>Software Engineer</SmallerText>
        <IconContainer>
          <a
            href="https://www.linkedin.com/in/tr%C3%AD-tr%E1%BA%A7n-6861331a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-linkedin"
              style={{ color: "white", fontSize: "2.5rem", cursor: "pointer" }}
            ></i>
          </a>
          <a
            href="https://github.com/Tris-909"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-github"
              style={{ color: "white", fontSize: "2.5rem", cursor: "pointer" }}
            ></i>
          </a>
          <a
            href="https://dev.to/tris909"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-dev"
              style={{ color: "white", fontSize: "2.5rem", cursor: "pointer" }}
            ></i>
          </a>
        </IconContainer>
      </FlexContainer>
      {currentScreenWidth < 2000 ? (
        <>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </>
      ) : null}
    </TextContainer>
  );
}
