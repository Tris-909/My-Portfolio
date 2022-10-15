import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LoaderScreen from "./Components/LoaderScreen/LoaderScreen";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Timeline from "./Components/Journey/Journey";
import Projects from "./Components/ProjectSection/ProjectSection";
import AboutmeV2 from "./Components/Aboutme/AboutmeV2";
import Blog from "./Components/Blogs/Blogs";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Background = styled.div`
  background-color: #141414;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-top: -2em;
  font-family: "Open Sans Condensed", sans-serif;
  position: relative;
  z-index: 1;

  @media (max-width: 870px) {
    margin-top: 0px;
  }
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <LoaderScreen />
      ) : (
        <Background>
          <Navbar />
          <Home />
          <Timeline />
          <Projects />
          <AboutmeV2 />
          <Blog />
          <Footer />
          <ToastContainer />
        </Background>
      )}
    </>
  );
}

export default App;
