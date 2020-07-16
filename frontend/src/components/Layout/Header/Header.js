import React, {useEffect, useRef, useState, useContext} from "react";
import { AuthContext } from "../../../contexts/auth";

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBAvatar
} from "mdbreact";
import {BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';

import ReactxagramLogo from '../../../assets/images/reactxagram.png';

const LogoImage = styled.img`
        height: 3.5rem;
    `
const AvatarImage = styled.img`
        border-radius : 50%;
        height: 20px;
        width: 20px;
        margin-top: -5px
    `;

const NavBarPage = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState(null);
    const inputEl = useRef('');
    const authContextData = useContext(AuthContext);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    const handleSearchFocus = () => {
        setIsSearchFocused(true);
    }

    useEffect(()=> {
        isSearchFocused && inputEl.current.focus()
    }, [isSearchFocused])

    const handleSearchBlur = () => {
        setIsSearchFocused(false);
    }

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
    }


    return (
        <Router>
            <MDBNavbar color="white" dark expand="md" className={'reactxagram-navbar'}>
                <MDBContainer>
                    <MDBNavbarBrand>
                        <LogoImage src={ReactxagramLogo} alt=""/>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={toggleCollapse}/>
                    <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                {isSearchFocused ? <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text reactxagram-search-span">
                                          <i className="fas fa-search fa-xs" />
                                        </span>
                                    </div>

                                    <input type="text" className="form-control reactxagram-search-input" ref={inputEl} placeholder="Search"
                                           aria-label="Username" onBlur={handleSearchBlur}
                                           onInput={(e) => handleSearchInput(e)}
                                           value={searchValue}
                                     />

                                    <div className="input-group-prepend" onClick={handleSearchBlur}>
                                        <span className="input-group-text reactxagram-close-span">
                                          <i className="fas fa-times-circle" />
                                        </span>
                                    </div>

                                </div>:
                                <div>
                                    <input type="text" placeholder="&#xF002; Search" s
                                           style={{fontFamily:`Arial, FontAwesome`}}
                                           className="reactxagram-search-input no-focus"
                                           onClick={handleSearchFocus}
                                           onInput={(e) => handleSearchInput(e)}
                                           value={searchValue}
                                    />
                                </div>
                                }
                            </MDBNavItem>
                        </MDBNavbarNav>

                        <MDBNavbarNav right>
                            <MDBNavItem active>
                                <MDBNavLink to="#!">
                                    <i className="fas fa-home fa-lg"/>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">
                                    <i className="fas fa-location-arrow fa-lg"/>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">
                                    <i className="far fa-compass fa-lg"/>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">
                                    <i className="far fa-heart fa-lg"/>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav>
                                        <AvatarImage
                                            tag="img"
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                                            className="rounded-circle img-fluid"
                                            alt="Sample avatar"
                                        />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu right>
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem onClick={() => authContextData.logout()}>Logout </MDBDropdownItem>
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