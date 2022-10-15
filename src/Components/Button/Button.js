import React from 'react'
import styled from 'styled-components';

const LinkTag = styled.a`
text-transform: uppercase;
text-decoration: none;
cursor: pointer;
padding: 10px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
margin-top: 20px;
margin-right: 8%;
font-weight: 500;
font-size: 1.25rem;
background: #fff;
color: #000; 

&:hover {
    background: #404040;
    color: #fff ;

    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
}

@media (max-width: 400px) {
    font-size: 1rem;
    padding: 7px;
}
`;


export default function Button({ link, content }) {
    return (
        <LinkTag href={link} target="_blank" rel="nofollow">
            {content}
        </LinkTag>
    );
}
