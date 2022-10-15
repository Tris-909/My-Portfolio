import React from 'react';
import styled from 'styled-components';
import {ReactComponent as LoadingScreen} from './Eclipse-0.6s-201px.svg';

const LoaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 5;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: black;
`;

const LoaderScreen = () => {
    return(
        <LoaderContainer>
            <LoadingScreen />
        </LoaderContainer>
    )
}

export default LoaderScreen;