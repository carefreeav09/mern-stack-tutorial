import React from 'react';
import styled from 'styled-components';
import Photo from '../../../assets/images/20898.jpg'

const Photos = styled.img`
    max-height: 614px;
    width: 100%;
    min-height: 500px;
    `;

const MainContent = () => {
    return (
        <Photos src={Photo} />
    );
};

export default MainContent;