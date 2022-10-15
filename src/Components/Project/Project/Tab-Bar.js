import React from 'react';
import styled from 'styled-components';

const Absolute = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
`;

const ProjectTab = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas: "description tech-stacks";
`;

const Tab = styled.div`
    grid-area: ${props => props.category === 'description' ? 'description' : 'tech-stacks'};
    color: white;
    background-color: #30302e;
    
    cursor: pointer;
    border-radius: 15px;
    padding: 1rem;

    text-align: center;
    font-size: 1.7rem;
    font-weight: 700;

    @media (max-width: 1175px) {
        display: none;
    }
`;

const BorderBottom = styled.div`
    padding-bottom: 0.5rem;
    border-bottom: ${props => props.isActive === true ? '3px solid #ff2e2e;' : 'none'}; 
    transition: border 0.1s;
`;

const TabBar = (props) => {
    return(
    <Absolute>
        <ProjectTab>
            <Tab 
                category='description' 
                onClick={() => props.toggleActiveDescription('description')}>
                <BorderBottom isActive={props.descriptionActiveProshop}>Description</BorderBottom>
            </Tab>
            <Tab 
                category='tech-stacks' 
                onClick={() => props.toggleActiveDescription('tech-stacks')}>
                <BorderBottom isActive={!props.descriptionActiveProshop}>Tech-Stacks</BorderBottom>
            </Tab>
        </ProjectTab>
    </Absolute>
    );
}

export default TabBar;