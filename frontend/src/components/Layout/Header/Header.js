
import React, {  useState } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBAvatar
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import ReactxagramLogo from '../../../assets/images/reactxagram.png'

const NavBarPage = props =>  {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    const LogoImage = styled.img`
        height: 3.5rem;
    `

    const AvatarImage = styled.img`
        border-radius : 50%;
        height: 20px;
        width: 20px;
        margin-top: -5px
    `;

        return (
            <Router>
                <MDBNavbar color="white" dark expand="md" className={'reactxagram-navbar'}>
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <LogoImage src={ReactxagramLogo} alt=""/>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBFormInline waves>
                                        <div className="md-form my-0">
                                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                        </div>
                                    </MDBFormInline>
                                </MDBNavItem>
                            </MDBNavbarNav>

                            <MDBNavbarNav right>
                                <MDBNavItem active>
                                    <MDBNavLink to="#!">
                                        <i className="fas fa-home fa-lg" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#!">
                                    <i className="fas fa-location-arrow fa-lg" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#!">
                                    <i className="far fa-compass fa-lg" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#!">
                                    <i className="far fa-heart fa-lg" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav >
                                            <AvatarImage
                                            tag="img"
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                                            className="rounded-circle z-depth-1 img-fluid"
                                            alt="Sample avatar"
                                            />
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu right>
                                            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </MDBNavbarNav>

                        </MDBCollapse>
                    </MDBContainer>

                </MDBNavbar>
            </Router>
        );
}

export default NavBarPage;