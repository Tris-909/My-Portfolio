import React from 'react'
import styled from 'styled-components';

const ProjectNameStyled = styled.div`
    font-size: 3em;
    font-weight: 600;

    @media (max-width: 550px) {
        font-size: 2em;
    }

    @media (max-width: 350px) {
        font-size: 1.5em;
    }
`;

export default function ProjectName(props) {
    return (
        <ProjectNameStyled>
            {props.children}
        </ProjectNameStyled>
    )
}
