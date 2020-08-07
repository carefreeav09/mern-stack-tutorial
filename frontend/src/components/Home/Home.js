import React from 'react';
import styled from 'styled-components';
import {MDBContainer} from
        "mdbreact";
import StoryContainer from "./Stories";
import ReactxagramPosts from './Posts';
import AddPostsButton from './AddPosts'

const Stories = styled.img`
    position: absolute;
    top: -5px;
    left: -5px;
    width: 66px;
    height: 66px;
`;


const Home = props => {
    return (
        <MDBContainer >
            <StoryContainer {...props} />

            <ReactxagramPosts />

            <AddPostsButton />
        </MDBContainer>
    )
}

export default Home;
