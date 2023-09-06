import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import InnerIcon from "./InnerIcon";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { getWindowDimensions } from "../../utils/index";
import "react-vertical-timeline-component/style.min.css";
import "./Journey.css";

const Timeline = () => {
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
    <>
      <Text
        id="Journey"
        color="white"
        textAlign={"center"}
        fontSize="4.25rem"
        fontFamily={"Nunito Sans"}
      >
        My Journey
      </Text>

      <VerticalTimeline
        className="root"
        animate={currentScreenWidth > 1170 ? true : false}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#30302e",
            color: "#fff",
            boxShadow: "none",
            fontFamily: "Nunito Sans",
          }}
          dateClassName="date"
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date="December 2019 - March 2021"
          iconClassName="OutaIcon"
          icon={<InnerIcon />}
        >
          <h1 className="vertical-timeline-element-title">
            Start learning how to code
          </h1>
          <p>
            Learning Web Development using many online tutorials like Udemy,
            FreeCodeCamp. Building many personal projects using different
            technologies and then later on specialized in React.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#30302e",
            color: "#fff",
            boxShadow: "none",
            fontFamily: "Nunito Sans",
          }}
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date="March 2021 - Present"
          dateClassName="date"
          iconClassName="OutaIcon"
          icon={<InnerIcon />}
        >
          <h1 className="vertical-timeline-element-title">
            FullStack Developer
          </h1>
          <a
            className="sendFXLink"
            target="_blank"
            href="https://www.sendpayments.com/"
            rel="noreferrer"
          >
            SendPayments Gold Coast
          </a>
          <p>
            Building websites, APIs and infastructure to help people and
            companies transfer money around the world.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
