import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LoaderScreen from "./components/LoaderScreen/LoaderScreen";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Timeline from "./components/Journey/Journey";
import Projects from "./components/ProjectSection/ProjectSection";
import AboutmeV2 from "./components/Aboutme/AboutmeV2";
import Blog from "./components/Blogs/Blogs";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

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
