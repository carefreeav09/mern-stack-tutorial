import React, {useEffect, useState} from 'react';
import TitleBar from "./Posts/TitleBar";
import MainContent from './Posts/MainContent';
import Comments from './Posts/Comments';
import axios from 'axios'
import {getLocalStorage} from "../../utils/storageUtil";
import {dataURItoBlob} from "../../utils/commonUtil";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let requestBody = {
            query: `
                query{
                    posts {
                        photo_url
                        caption
                        userID{
                            username
                        }
                    }
                }
            `
        }
        console.log(getLocalStorage((`reactxagram-token`)))
        axios.post('http://localhost:5000/graphql', requestBody, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${getLocalStorage('reactxagram-token')}`
            }
        })
            .then(response=> setPosts(response.data.data.posts))
            .catch(error => console.log(error));

    }, []);

    return (
        <div>
            {posts.map((item, itemIndex) =>
                <React.Fragment key={itemIndex}>
                    <TitleBar name={item.userID.username}/>
                    <MainContent photo={item.photo_url ? dataURItoBlob(`data:image/png;base64,${item.photo_url}`, 'photo') : undefined} />
                    <Comments caption={item.caption}/>
                </React.Fragment>
            )}

        </div>
    );
};

export default Posts;