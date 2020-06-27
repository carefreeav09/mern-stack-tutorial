import React from 'react';
import styled from 'styled-components';
import {MDBContainer} from
        "mdbreact";
import StoryContainer from "./Stories";

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
        </MDBContainer>
    )
}

export default Home;
