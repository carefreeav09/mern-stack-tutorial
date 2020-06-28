import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border: 0;
    padding: 0.5rem;
    background: #fafafa;
    color: gray;
    width: 90%;
    border-right: none
    font-size: smaller;
    display: inline
`;

const InputSend = styled.a`
    border: 0;
    padding: 0.5rem;
    background: #fafafa;
    color : blue !important;
    display: inline;
    font-weight: bold
`;

const AddComment = () => {
    return (
        <div>
            <Input placeholder="Add a Comment..."/>
            <InputSend>Post</InputSend>
        </div>
    );
};

export default AddComment;