import React from 'react'
import styled from 'styled-components';

const ProjectExplainForMobile = styled.div`
    font-size: 1.5em;
    margin-top: 1rem;
    display: none;

    @media (max-width: 550px) {
        display: initial;
    }
`;

export default function ProjectExplainMobile(props) {
    return (
        <ProjectExplainForMobile>
            {props.children}
        </ProjectExplainForMobile>
    )
}
