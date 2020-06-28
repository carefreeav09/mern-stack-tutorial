import React from 'react';
import styled from 'styled-components';
import AddComment from "./AddComment";

const Icons = styled.i`
    padding: 0 10px;
    cursor: pointer;
`;

const Comments = () => {
    return (
        <div className={'reactxagram-cards-comments'}>
            <div className="row">
                <div className="col-md-6">
                    <Icons className="far fa-heart fa-lg"/>
                    <Icons className="far fa-comment-alt" />
                    <Icons className="fas fa-location-arrow fa-lg"/>
                </div>
                <div className="col-md-6 text-right">
                    <Icons className="far fa-bookmark fa-lg "/>
                </div>
            </div>

            <div className="likes-count-div">
                <p> 16 likes</p>
            </div>

            <div className="captions-holder">
                <p><strong>avusann</strong> Before sunset Music sign</p>
            </div>

            <div className="view-all-comments-count-div">
                <a href={'#'}> View all 61 comments </a>
            </div>

            <div className="comments-list">
                <p><strong>avusann1</strong> Before sunset Music sign</p>
                <p><strong>avusan2</strong> Before sunset Music sign</p>
            </div>

            <div className="dayCount">
                <p> 1 day ago</p>
            </div>

            <AddComment />
        </div>
    );
};

export default Comments;