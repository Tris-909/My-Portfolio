import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import styled from 'styled-components';

const GithubCalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2rem;
    color: #fff;

    @media (max-width: 550px) {
        margin-left: 1%;
        margin-right: 1%;
    }
`;

const GithubTitle = styled.p`
    font-size: 3rem;

    @media (max-width: 550px) {
        font-size: 2rem;
    }

    @media (max-width: 350px) {
        font-size: 1.5rem;
    }
`;

// Github Calender packages has some errors that display nothing
// Temporary remove it from App.js to see further fixing
const GithubCalendar = () => {
    const exampleTheme = {
        background: 'transparent',
        text: '#fff'
      };
    
    return (
        <GithubCalendarContainer>
            <GithubTitle> My Github Contributions</GithubTitle>
            <GitHubCalendar 
                username="Tris-909" 
                theme={exampleTheme} 
                blockSize={40} 
                fontSize={30} 
                showTotalCount
                years={[2020, 2021]}/>
        </GithubCalendarContainer>
    );
}

export default GithubCalendar
