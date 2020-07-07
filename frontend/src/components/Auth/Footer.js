import React from 'react';

const Footer = () => {
    return (
        <div className={'nav-footer'}>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active font-weight-bold" href="#">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">HELP</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">PRESS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">API</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">JOBS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">PRIVACY</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">TERMS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">LOCATIONS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">TOP ACCOUNTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">HASHTAGS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">LANGUAGE</a>
                </li>

                <li className="nav-item float-right">
                    <a className={'font-weight-bold text-muted'}>
                        2020 REACTXAGRAM FROM AABHUSHAN GAUTAM
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;