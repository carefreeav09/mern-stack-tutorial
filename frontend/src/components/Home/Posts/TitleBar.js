import React from 'react';
import styled from 'styled-components';

const AvatarImage = styled.img`
    vertical-align: middle;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: -5px;
    box-shadow : 0 0 0 0;
    `;

const TitleBar = (props) => {
    return (
        <div>
            <div className="reactxagram-cards">
                <div className="reactxagram-cards-title">
                    <div className="row">
                        <div className="col-1">
                            <AvatarImage
                                tag="img"
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                                className="rounded-circle img-fluid"
                                alt="Sample avatar"
                            />
                        </div>

                        <div className="col-10 px-0">
                            <strong>
                                {props.name}
                            </strong>
                        </div>

                        <div className="col-1">
                            <i className="fas fa-ellipsis-h mt-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleBar;