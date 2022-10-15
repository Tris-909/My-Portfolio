import React from 'react'
import styled from 'styled-components';
import './Seemore.css';

const ArrowContainer = styled.a`
    display: block;
    width: 100px;
    height: 100px;
    position: relative;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(${props => props.hidden ? "0deg" : "180deg"});
    cursor: pointer;
    margin-top: 30px;

      &:hover {
        cursor: pointer;
      }
      &:hover .arrow {
        top: 50%;
      }
      &:hover .arrow:before {
        transform: translate(-50%, -50%) rotateZ(-30deg);
      }
      &:hover .arrow:after {
        transform: translate(-50%, -50%) rotateZ(30deg);
      }
    
      @media (max-width: 1400px) {
        left: 10%;
    }
`;

//Hidden Components, wrap it around a component to toggle it by clicking on a button

export default function Seemore(props) {
    return (
        // eslint-disable-next-line
        <ArrowContainer hidden={props.hidden} onClick={() => props.hiddenHandler()}>
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>  
        </ArrowContainer>
    );
}
