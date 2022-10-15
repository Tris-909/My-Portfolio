import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #30302e;
  font-family: "Nunito Sans", sans-serif;
`;

const FooterTextMargin = styled.div`
  width: 80%;
  height: 80%;
  margin: 0% 10% 0% 10%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const CopyRight = styled.div`
  color: #f7faff;
  font-size: 36px;

  @media (max-width: 800px) {
    align-items: flex-start;
    font-size: 30px;
  }
`;

const MoreInformation = styled.div`
  color: #f7faff;
  font-size: 25px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 800px) {
    align-items: flex-start;
    font-size: 20px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTextMargin>
        <CopyRight>Tri Minh Tran &copy; Copyright</CopyRight>
        <MoreInformation>
          <div>tranminhtri9090@gmail.com</div>
          <div>(+84) 395 002 471</div>
        </MoreInformation>
      </FooterTextMargin>
    </FooterContainer>
  );
}
