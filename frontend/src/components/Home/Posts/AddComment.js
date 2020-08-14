import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {getLocalStorage} from "../../../utils/storageUtil";
import axios from 'axios'

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

const AddComment = (props) => {
    const [inputText, setInputText] = useState(null);
    const handleAddComment = () => {
       let requestBody = {
           query : `
                mutation{
                    addComment(commentInput: {
                        comment : "${inputText}"
                        postID: "${props.id}"
                    })
                    {
                        comment
                    }
                }
           `
       };

        axios.post('http://localhost:5000/graphql', requestBody, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${getLocalStorage('reactxagram-token')}`
            }})
            .then(response => props.setPostAdded(true))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Input placeholder="Add a Comment..."  onInput={(e) => setInputText(e.target.value)}/>
            <InputSend onClick={() => handleAddComment()}>Post</InputSend>
        </div>
    );
};

export default AddComment;