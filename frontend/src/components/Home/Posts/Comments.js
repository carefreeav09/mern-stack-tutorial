import React from 'react';
import styled from 'styled-components';
import AddComment from "./AddComment";

const Icons = styled.i`
    padding: 0 10px;
    cursor: pointer;
`;

const Comments = (props) => {
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
                <p><strong>avusann</strong>{props.caption}</p>
            </div>

            <div className="comments-list">
                {props.comments.map((item, itemIndex) => (
                    <p key={itemIndex}><strong className={'mr-2'}>{item.userID?.username}</strong>{item.comment}</p>
                ))}

            </div>

            <div className="dayCount">
                <p> 1 day ago</p>
            </div>

            <AddComment {...props} />
        </div>
    );
};

export default Comments;