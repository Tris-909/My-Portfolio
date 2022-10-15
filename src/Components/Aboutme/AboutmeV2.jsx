import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Fade  from 'react-reveal/Fade';

const AboutMeContainer = styled.div`
    width: 90%;
    margin: 7% 5% 5% 5%;
    border-radius: 10px;
    z-index: 1;
    padding: 20px 0px;
    position: relative;
    background-color: #f7faff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Nunito Sans", sans-serif; 
`;

const AboutMeButton = styled.div`
    background-color: #f7faff;
    font-size: 25px;
    font-weight: 800;

    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
`;

const ButtonActive = styled.span`
    border-bottom: ${props => props.content ? '3px double black' : '0px'}
`;

const AboutMeText = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 30px;

    @media (max-width: 1300px) {
        font-size: 28px;
    }

    @media (max-width: 650px) {
        font-size: 24px;
    }

    @media (max-width: 450px) {
        font-size: 20px;
    }
`;

const AboutMeSection = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

const MySkillSection = styled.div`
    width: 90%;
    height: 90%;
`;

const WorkLink = styled.a`
    cursor: pointer;
    font-weight: 800;
    color: #f73bcb;
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: -50px;
    left: 0%;
    background: transparent;

    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
`;

const SkillHeader = styled.div`
    width: fit-content;
    font-size: 40px;
    font-weight: 700;
    border-bottom: 3px double black;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 970px) {
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;

    font-size: 25px;
    margin-top: 10px;
`;

const AboutMeTab = () => {
    return(
        <AboutMeSection>
            <AboutMeText> I'm a Full-Stack Developer at <WorkLink href="https://www.sendpayments.com/" target="_">SendFX</WorkLink> to help people and business transfer money around the world.</AboutMeText>
            <AboutMeText> At work, I work on new features, fix bugs, do code reviews and drink some more coffee. </AboutMeText>
            <AboutMeText> I love building web-applications using React and Amazon Web Services. </AboutMeText>
            <AboutMeText> Feel free to reach out to me <Link style={{ borderBottom: '2px solid black', cursor: 'pointer' }} activeClass="active" to="Contact" spy={true} smooth={true} offset={-100} duration={500}>here</Link>. </AboutMeText>
        </AboutMeSection>
    )
}

const MySkillTab = () => {
    return(
        <MySkillSection>
            <SkillHeader> Front-End : </SkillHeader>
            <Row>
                <Column>HTML5</Column>
                <Column>CSS3, SCSS, CSS libraries</Column>
                <Column>Responsive Layout</Column>
            </Row>
            <Row>
                <Column>JavaScript ( ES6+ )</Column>
                <Column>TypeScript</Column>
                <Column>Python</Column>
            </Row>
            <Row>
                <Column>React</Column>
                <Column>REST API</Column>
                <Column></Column>
            </Row>
            <SkillHeader> Back-End : </SkillHeader>
            <Row>
                <Column>NodeJS Express</Column>
                <Column>GraphQL</Column>
                <Column>NoSQL : DynamoDB / MongoDB</Column>
            </Row>
            <Row>
                <Column>Working experience with Amazon Web Services : IAM, Cognito, DynamoDB, Amplify, Appsync, CloudFront, CloudFormation, Route53, ...</Column>
            </Row>
            <Row>
                <Column>Working experience with Serverless Stack : Lambda, CloudWatch, Cognito, API Gateway, ...</Column>
            </Row>
            <SkillHeader> Others : </SkillHeader>
            <Row>
                <Column> Git Work Flow </Column>
                <Column> Gitlab CI-CD </Column>
            </Row>
            <Row>
                <Column> Agile & Scrum </Column>
            </Row>
        </MySkillSection>
    );
}

const AboutMeV2 = () => {
    const [content, setContent] = useState('aboutMe');

    const onSwitchTabHandler = (tabName) => {
        setContent(tabName);
    }

    return(
        <Fade left>  
        <AboutMeContainer id="Aboutme">
            <ButtonContainer>
                <AboutMeButton left="0%" onClick={() => onSwitchTabHandler('aboutMe')}> <ButtonActive content={content === 'aboutMe'}>About Me</ButtonActive> </AboutMeButton>
                <AboutMeButton left="-20%" onClick={() => onSwitchTabHandler('mySkill')}> <ButtonActive content={content === 'mySkill'}>My Skill</ButtonActive> </AboutMeButton>
            </ButtonContainer>
            {
                content === 'aboutMe' ? <AboutMeTab /> : <MySkillTab />
            }
        </AboutMeContainer>
        </Fade>
    )
}

export default AboutMeV2;