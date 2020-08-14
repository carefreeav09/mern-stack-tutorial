import React from 'react';
import './footer.css'
import styled from 'styled-components';

const Stories = styled.img`
    width: 66px;
    height: 66px;
    border-radius: 50%;
`;

const Suggestion = styled.img`
    width: 33px;
    height: 33px;
    border-radius: 50%;
`;

const Footer = () => {
    return (
        <div className={'fixed-footer'}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                            Math.random() * 100
                        )}.jpg`} />
                    </div>

                    <div className={'col-md-8 d-flex justify-content-center'}>
                        <p className={'mt-2'}>
                            <strong>avusann</strong>
                            <br/>
                            <span className={'text-muted small'}>
                                carefreeav
                            </span>
                        </p>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-md-8">
                        <h6 className={'text-muted font-weight-bold small'}>
                            Suggestions For You
                        </h6>
                    </div>

                    <div className="col-md-4">
                        <h6 className={'text-muted font-weight-bold small'}>
                            See all
                        </h6>
                    </div>
                </div>

                <ul className="list-group list-group-flush">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a className="text-white btn-floating btn-fb btn-sm">
                                <Suggestion src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                    Math.random() * 100
                                )}.jpg`} />
                            </a> Cras justo odio
                        </li>
                        <li className="list-group-item">
                            <a className="btn-floating btn-tw btn-sm">
                                <Suggestion src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                    Math.random() * 100
                                )}.jpg`} />
                            </a>Dapibus ac facilisis in
                        </li>
                        <li className="list-group-item">
                            <a className="text-white btn-floating btn-li btn-sm">
                                <Suggestion src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                Math.random() * 100
                            )}.jpg`} />
                            </a>Morbi leo risus
                        </li>
                        <li className="list-group-item">
                            <a className="text-white btn-floating btn-slack btn-sm">
                                <Suggestion src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                    Math.random() * 100
                                )}.jpg`} />
                            </a>Porta ac
                            consectetur
                            ac
                        </li>
                        <li className="list-group-item">
                            <a className="text-white btn-floating btn-yt btn-sm">
                                <Suggestion src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                Math.random() * 100
                            )}.jpg`} />
                            </a>
                            Vestibulum at eros
                        </li>
                    </ul>
                </ul>

                <br/>

            </div>
        </div>
    )
}

export default Footer
