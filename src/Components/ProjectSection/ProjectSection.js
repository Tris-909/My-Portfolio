import React, { useState } from "react";
import styled from "styled-components";

import ProjectLeft from "components/Project/ProjectLeft";
import ProjectRight from "components/Project/ProjectRight";
import Seemore from "../Project/ProjectButton/Seemore";

import SavingApp1 from "./SavingApp/pic1.png";
import SavingApp2 from "./SavingApp/pic2.png";
import SavingApp3 from "./SavingApp/pic3.png";
import SavingApp4 from "./SavingApp/pic4.png";
import SavingApp5 from "./SavingApp/pic5.png";

//TODO: ProShop Image
import ProShop1 from "./ProShop Image/ProShop1-min.PNG";
import ProShop2 from "./ProShop Image/ProShop2-min.PNG";
import ProShop3 from "./ProShop Image/ProShop3-min.PNG";
import ProShop4 from "./ProShop Image/ProShop4-min.PNG";
import ProShop5 from "./ProShop Image/ProShop5-min.PNG";
import ProShop6 from "./ProShop Image/ProShop6-min.PNG";
import ProShop7 from "./ProShop Image/ProShop7-min.PNG";

import { FadeAnimation } from "components/Project/ProjectAnimation";

const Container = styled.div`
  background-color: #141414;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    justify-content: flex-start;
  }
`;

const IntroText = styled.div`
  color: white;
  border-radius: 10px;
  font-size: 4.25em;
  font-family: "Nunito Sans", sans-serif;
  margin-top: 2rem;
  margin-bottom: 55px;
  text-align: center;
`;

const Hidden = styled.div`
  display: ${(props) => (props.hidden ? "none" : "block")};
`;

export default function Projects() {
  const [hidden, setHidden] = useState(true);

  const hiddenHandlerFunc = () => {
    setHidden(!hidden);
  };

  return (
    <Container>
      <IntroText id="Projects"> My Projects </IntroText>

      <FadeAnimation>
        <ProjectRight
          name="Saving App"
          descriptions={[
            "A visual way to track your saving goal built by React and Firebase along with many features like drag-n-drop notes, descriptive step with emoji and milestones as sub-goals.",
            "I have always been passionate about building personal software for myself that I can use from date to date so I built this fullStack application. Please click ViewCode to read more.",
          ]}
          credentials="lrd30780@xcoxc.com - testtest"
          isShow={true}
          viewCodeLink="https://github.com/Tris-909/HabitTracker"
          liveDemoLink="https://cute-seahorse-5d3a81.netlify.app/"
          projectPictures={[
            SavingApp1,
            SavingApp2,
            SavingApp3,
            SavingApp4,
            SavingApp5,
          ]}
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
      </FadeAnimation>

      {/* <FadeAnimation>
        <ProjectRight
          projectName="Your Word"
          ProjectExplainForMobile="A drag-drop diaries customizable board created for you to store your memories, achievements, and more. Building using Serverless Architecture along with many AWS services to make it scale and easy for development."
          ProjectExplainOne="A drag-drop diaries customizable board created for you to store your memories, achievements, and more. Building using Serverless Architecture along with many AWS services to make it scale and easy for development."
          ProjectExplainTwo=" I have always been passionate about building personal software for myself that I can use from date to date so I built this fullStack application. Please click ViewCode to read more."
          ProjectAdminCredential="bachir.chanse@zoobug.org - Minhtri1!"
          isShow={true}
          ViewCodeLink="https://github.com/Tris-909/Your-Words"
          LiveDemoLink="https://master.dswswc5n7bb6c.amplifyapp.com"
          ProjectPicture={[Frei1, Frei2, Frei3, Frei4]}
        />
      </FadeAnimation> */}

      {/* <FadeAnimation>
        <ProjectLeft
          name="E-Commerce Proshop"
          descriptions={[
            "FullStack E-Commerce Websites built using React and NodeJS, MongoDB. I go to famous retailer websites like JB-Hifi, TheGoodGuy to implement features on their websites.",
            "Many businesses need an online store to sell their products so I go to famous retailer websites like JB-Hifi, TheGoodGuy to implement features on their websites to build real-world features and improve my skills as a developer.",
            "The Site is a combination between a content management system (admin page) and an e-commerce websites. Admin can perform CRUD operations through interfaces (Content Management System).",
          ]}
          credentials="admin@email.com - 123"
          isShow={true}
          viewCodeLink="https://github.com/Tris-909/Ecommerce-BradTraversy"
          liveDemoLink="https://proshop-tris.herokuapp.com/"
          projectPictures={[
            ProShop1,
            ProShop2,
            ProShop3,
            ProShop4,
            ProShop5,
            ProShop6,
            ProShop7,
          ]}
          projectSkills={[
            "React",
            "JavaScript",
            "MaterialUI",
            "Redux",
            "Responsive Layout",
            "MongoDB",
            "RESTful API",
            "Git",
          ]}
        />
      </FadeAnimation> */}

      {/* <Seemore hiddenHandler={hiddenHandlerFunc} hidden={hidden} /> */}
    </Container>
  );
}
