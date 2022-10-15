import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 3rem;
  height: 3rem;
  position: fixed;
  top: 20px;
  right: 25px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 999;
  display: none;

  @media (max-width: 870px) {
    display: flex;
  }

  div {
    width: 3rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#333" : "#f1f1f1")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.15s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default function BurgerIcon() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </React.Fragment>
  );
}
