import React from 'react'
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
    background-color: #30302e;
    position: relative;
    top: ${props => props.top};
    left: ${props => props.left};
    height: 100%;
    width: 65%;
    border-radius: 15px;
    
    @media (max-width: 1400px) {
        position: relative;
        top: 0%;
        left: 0%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 85%;
    }

`;

export default function ProjectCard(props) {
    return (
        <ProjectCardContainer top={props.top} left={props.left}>
            {props.children}
        </ProjectCardContainer>
    )
}
