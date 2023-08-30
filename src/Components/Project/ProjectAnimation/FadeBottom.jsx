import React from "react";
import Fade from "react-reveal/Fade";

export const FadeAnimation = ({ children }) => {
  return <Fade bottom>{children}</Fade>;
};
