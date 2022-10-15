import React from 'react';
import styled from 'styled-components';

const BlogItemContainer = styled.div`
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    border: 2px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
`;

const BlogItemTitle = styled.div`
    font-family: 'Squada One', cursive;
    color: black;
    font-size: 2rem;
`;

const BlogItemDateAndLikes = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
`;

const HeartContainer = styled.span`
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
`;

const DateContainer = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 1rem;
`;

const BlogItemBottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const BlogItemListTags = styled.div`
    display: flex;
    flex-direction: row;
`;

const BlogItemTagContainer = styled.div`
    background-color: #292325;
    border-radius: 5px;
    color: white;
    padding: 5px;
    font-size: 0.8rem;
    margin-right: 1rem;
`;

const LinkContainer = styled.a`
    font-size: 2.5rem;
    transition: all 0.5s;
    text-decoration: none;
    text-decoration-color: black;
    color: black;

    &:hover {
        transform: translateX(10px);
    }

    &:active {
        color: black;
    }

    &:visited {
        color: black;
    }
`;

const BlogItem = ({ title, date, numberOfLikes, link, tagsArray }) => {
    return(
        <BlogItemContainer>
            <LinkContainer href={link} target="_" alt="Link to blog">
                <BlogItemTitle>{title}</BlogItemTitle>
            </LinkContainer>

            <BlogItemDateAndLikes>
                <div>
                    <HeartContainer>{numberOfLikes}</HeartContainer>
                    <i className="fas fa-heart" style={{color: '#db1240'}}></i>
                </div>
                <DateContainer>
                    -
                </DateContainer>
                <div>
                    <DateContainer>{date}</DateContainer>
                </div>
            </BlogItemDateAndLikes>
            <BlogItemBottomContainer>
                <BlogItemListTags>
                    {tagsArray.map((tag, index) => {
                        return(
                            <BlogItemTagContainer key={index}>
                                # {tag}
                            </BlogItemTagContainer>
                        );
                    })}
                </BlogItemListTags>
                <LinkContainer href={link} target="_" alt='link to blogs'>
                    <i className="fas fa-caret-right" style={{color: 'black'}}></i>
                </LinkContainer>    
            </BlogItemBottomContainer>
        </BlogItemContainer>
    );
}

export default BlogItem;