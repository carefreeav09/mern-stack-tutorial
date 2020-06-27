import React from 'react';
import TitleBar from "./Posts/TitleBar";
import MainContent from './Posts/MainContent';
import Comments from './Posts/Comments';

const Posts = () => {
    return (
        <div>
            <TitleBar />
            <MainContent />
            <Comments />
        </div>
    );
};

export default Posts;