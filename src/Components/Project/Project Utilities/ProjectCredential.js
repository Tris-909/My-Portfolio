import React from "react";
import styled from "styled-components";

const ProjectCredentials = styled.div`
  font-size: 1.5em;
  margin-top: 1rem;
  background-color: #fff;
  clip-path: polygon(88% 0%, 100% 50%, 88% 100%, 0% 100%, 0 51%, 0% 0%);
  color: black;
  padding: 10px;
  width: ${(props) => (props.width ? "100%" : "112%")};

  @media (max-width: 550px) {
    display: none;
  }
`;

export default function ProjectCredential(props) {
  if (props.projectName === "E-Commerce Proshop") {
    return (
      <ProjectCredentials>
        <span style={{ fontWeight: 700 }}>Paypal Testing Account :</span>
        <p style={{ marginTop: "6px", marginBottom: "12px" }}>
          {props.ProjectCredentials}
        </p>
        <span style={{ fontWeight: 700 }}>Admin Account :</span>
        <p style={{ marginTop: "3px", marginBottom: "0px" }}>
          {props.ProjectAdminCredential}
        </p>
      </ProjectCredentials>
    );
  } else if (props.projectName === "Personal Tool") {
    return (
      <ProjectCredentials width={true}>
        <span style={{ fontWeight: 700 }}>Testing Account :</span>
        <p style={{ marginTop: "3px", marginBottom: "0px" }}>
          {props.ProjectAdminCredential}
        </p>
      </ProjectCredentials>
    );
  } else if (props.projectName === "Saving App") {
    return (
      <ProjectCredentials width={true}>
        <span style={{ fontWeight: 700 }}>Testing Account :</span>
        <p style={{ marginTop: "3px", marginBottom: "0px" }}>
          {props.ProjectAdminCredential}
        </p>
      </ProjectCredentials>
    );
  }
  return null;
}
