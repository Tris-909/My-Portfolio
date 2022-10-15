import React from 'react'
import styled from 'styled-components';

const ProjectTextMargin = styled.div`
    margin: ${props => props.margin};
    width: 60%;
    height: 70%;
    color: white;
    position: relative; 

    @media (max-width: 1400px) {
        width: 85%;
        height: 100%;
        margin: 5%;
    }
`;

export default function ProjectText(props) {
    return (
        <ProjectTextMargin margin={props.margin}>
            {props.children}
        </ProjectTextMargin>
    )
}
