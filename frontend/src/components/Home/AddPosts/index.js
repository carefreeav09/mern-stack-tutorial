import React, {Fragment, useState, useEffect} from "react";
import { MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import './button.css';
import './upload.css'
import axios from 'axios'
import {getLocalStorage} from "../../../utils/storageUtil";

const Thumb = (props) => {
    const [thumb, setThumb] = useState([]);
    const [loading, setLoading] = useState(false);
    const { file } = props;

    useEffect(() => {
        if (file) {
            setLoading(true);
            let reader = new FileReader();
            reader.onloadend = () => {
                setLoading(false);
                setThumb(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }, [file]);

    if (!file) {
        return null;
    }

    if (loading) {
        return <p>loading...</p>;
    }

    return (
        <>
            <img
                src={thumb}
                alt={file.name}
                className="img-thumbnail upload-img"
            />
            <br />
        </>
    );
};

const ButtonPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageString, setImageString] = useState(null);
    const [captionString, setCaptionString] = useState(null);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        let query = {
            query : `
                mutation {
                  addPost(postInput:{
                    photo_url : "${await toBase64(imageString)}",
                    caption :  "${captionString}" 
                  })
                  {
                    photo_url,
                    caption,
                  }
                }
            `
        }

        axios.post('http://localhost:5000/graphql', query, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${getLocalStorage('reactxagram-token')}`
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            });

        setIsOpen(false);
    };

    const handleOnModalClose = () => {
        setImageString(null);
        setCaptionString(null);

    }

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                let image = document.createElement('img');
                image.src = reader.result;

                let canvas = document.createElement('canvas');
                let canvasContext = canvas.getContext('2d');

                while (image.height > 800) {
                    image.height = image.height / 2;
                    image.width = image.width / 2;
                }

                canvas.width = image.width * 0.5;
                canvas.height = image.height * 0.5;
                // canvasContext.scale(0.25, 0.25);
                canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);

                let base64String = canvas.toDataURL('image/png');
                resolve(base64String.split(',')[1]);
            };
            reader.onerror = (error) => reject(error);
        });


    return (
        <Fragment>
            <MDBBtn className={'btn btn-default floating-button'} onClick={toggle}>
                <MDBIcon icon="cloud-upload-alt" />
            </MDBBtn>

            <MDBModal size="lg" isOpen={isOpen} toggle={toggle} hiddenModal={() => handleOnModalClose()}>
                <MDBModalHeader toggle={toggle}>Upload Photo</MDBModalHeader>
                <MDBModalBody>
                    <div className="upload-warp">
                        <div
                            className={'upload-div'}
                            onClick={() => {
                                let el = document.getElementById(
                                    'citizenshipFront'
                                );
                                if (el.onclick) {
                                    el.onclick();
                                } else if (el.click) {
                                    el.click();
                                }
                            }}
                        >
                            <Thumb file={imageString} />
                        </div>
                        <input
                            className={'upload-input'}
                            id="citizenshipFront"
                            name="citizenshipFront"
                            type="file"
                            onChange={(event) => {
                                setImageString(
                                    event.currentTarget.files[0]
                                );
                            }}
                        />
                    </div>
                    <input type="text" className="form-control upload-caption-input" onInput={e => setCaptionString(e.target.value)} placeholder={"enter your caption"}/>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="blue-grey" onClick={(e) => handleSubmit(e)}>UPLOAD</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </Fragment>
    );
}

export default ButtonPage;