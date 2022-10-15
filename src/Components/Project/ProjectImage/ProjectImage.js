import React from 'react'
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'

const ProjectImageContainer = styled.div`
    position: absolute; 
    top: ${props => props.top};
    left: ${props => props.left};
    width: ${props => props.width};
    height: ${props => props.height};
    z-index: 10;

    @media (max-width: 1400px) {
        position: relative;
        top: 0%;
        left: 0%;
        margin-top: 5%;

        width: 85%;
    }
`;

const Image = styled.img`
    width: 100%; 
    height: 350px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden; 


    @media (max-width: 1400px) {
        height: 500px;
    }

    @media (max-width: 650px) {
        height: 300px;
    }

    @media (max-width: 450px) {
        height: 190px;
    }
`;

export default function ProjectImage({ imageArray, width, height, top, left }) {
    return (
        <ProjectImageContainer top={top} width={width} left={left} height={height}>
            <Carousel 
            autoPlay={false} 
            navButtonsAlwaysVisible={true} 
            animation="slide" 
            interval={300}
            style={{height: '100%'}}>
                {imageArray.map((oneImage, index) => {
                    return(
                        <Paper key={index} style={{ border: '5px solid white' }}>
                            <Image src={oneImage} alt="project 1" />
                        </Paper>
                    );
                })}
            </Carousel>
        </ProjectImageContainer>
    );
}
