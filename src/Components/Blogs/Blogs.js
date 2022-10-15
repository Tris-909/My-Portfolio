import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import lazyCat from './lazycat.jpg';
import BlogItem from './BlogItem';
import Pagination from "react-js-pagination";
import './BlogPagination.css';

const moveGradient = keyframes`
    50% {
        background-position: 100% 50%;
    }
`;

const GradientWidth = '9px';

const BlogContainer = styled.div`
    width: 90%;
    margin: 5% 5% 5% 5%;
    background-color: #fff;
    border-radius: 15px;

    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 1fr;
    grid-template-areas: "DevTO Blogs";
    position: relative;

    &::after {
        position: absolute;
        content: "";
        top: calc(-1 * ${GradientWidth});
        left: calc(-1 * ${GradientWidth});
        z-index: -1;
        width: calc(100% + ${GradientWidth} * 2);
        height: calc(100% + ${GradientWidth} * 2);
        background: linear-gradient(
          60deg,
          hsl(224, 85%, 66%),
          hsl(269, 85%, 66%),
          hsl(314, 85%, 66%),
          hsl(359, 85%, 66%),
          hsl(44, 85%, 66%),
          hsl(89, 85%, 66%),
          hsl(134, 85%, 66%),
          hsl(179, 85%, 66%)
        );
        background-size: 300% 300%;
        background-position: 0 50%;
        border-radius: calc(2 * ${GradientWidth});
        animation: ${moveGradient} 4s alternate infinite;
    }

    @media (max-width: 775px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const ProfileContainer = styled.div`
    grid-area: DevTO;
`;

const ProfileFlexContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const DevTOTitle = styled.div`
    font-family: 'Squada One', cursive;
    color: black;
    font-size: 5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 600;
`;

const DevTOName = styled.div`
    font-family: 'Squada One', cursive;
    color: black;
    font-weight: 600;
    font-size: 3rem;
    margin-top: 1rem;   
    margin-bottom: 1rem;
`;

const ProfileLinkContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    color: black;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid black;
`;

const BlogListContainer = styled.div`
    grid-area: Blogs;
`;

const BlogListFlexContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 1rem;
`;

const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;

    justify-self: flex-end;
`;

const BlogListTitle = styled(DevTOTitle)`
    font-size: 3rem;
`;

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(`https://dev.to/api/articles?username=tris909&per_page=3&page=0`);
            setBlogs(data);
        }

        fetchData();
    }, []);

    const onPaginationChangeHandler = async (pageNumberClicked) => {
        setCurrentPage(pageNumberClicked);
        const {data} = await axios.get(`https://dev.to/api/articles?username=tris909&per_page=3&page=${pageNumberClicked}`);
        setBlogs(data);
    }

    return(
        <BlogContainer id="Blogs">
            <ProfileContainer>
                <ProfileFlexContainer>
                    <DevTOTitle>DEV.TO</DevTOTitle>
                    <ProfileLinkContainer href="https://dev.to/tris909" target="_" alt="Link to myDevTO Profile">
                        <ProfileImage src={lazyCat} alt="ProfileImage" />
                    </ProfileLinkContainer>
                    <DevTOName>Tran Minh Tri</DevTOName>
                </ProfileFlexContainer>
            </ProfileContainer>

            <BlogListContainer>
                <BlogListFlexContainer>
                    <BlogListTitle>My Blogs</BlogListTitle>
                    {
                        blogs.map((blog) => {
                            return(
                                <BlogItem 
                                    key={blog.id}
                                    title={blog.title}
                                    date={blog.readable_publish_date}
                                    numberOfLikes={blog.positive_reactions_count}
                                    link={blog.url}
                                    tagsArray={blog.tag_list}
                                />
                            );
                        })
                    }

                    <PaginationContainer>
                        <Pagination
                          activePage={currentPage}
                          itemsCountPerPage={3}
                          totalItemsCount={4}
                          pageRangeDisplayed={3}
                          hideFirstLastPages={true}
                          hideNavigation={true}
                          onChange={(pageNumberClicked) => onPaginationChangeHandler(pageNumberClicked)}
                          activeLinkClass={`pageActive`}
                        />
                    </PaginationContainer>

                </BlogListFlexContainer>
            </BlogListContainer>
        </BlogContainer>
    );
}

export default Blog;