import React, {useEffect, useState} from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import styled from 'styled-components'
import Instagram from '../../../assets/images/reactxagram.png'
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
        minHeight: '5rem',

        [theme.breakpoints.up('sm')]: {
            padding: '0 10rem 0 10rem',
            boxShadow: 'none'
        },
    },
    container: {
        padding: '0 10rem',
        background: 'white',
        boxShadow: 'none',
    },
    small: {
        height: '3.5rem',
        transition: "height .5s",
        borderBottom: '1px solid rgba(var(--b6a,219,219,219),1)'
    },
    menuButton: {
        marginRight: theme.spacing(5),
    },
    toolbar: {
        background: "transparent",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            color: theme.palette.primary.light,
        },
    },
    search: {
        position: 'absolute',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('#fafafa', 0.15),
        '&:hover': {
            backgroundColor: fade('#fafafa', 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: '100px',
        margin: 'auto',
        width: '100%',
        maxHeight: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        color: '#515151'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        background: '#fafafa',
        border: '1px solid #dbdbdb',
        borderRadius: '5px',
        color: '#515151',
        transition: theme.transitions.create('width'),
        width: '100%',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            width: 150,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const LogoImageComponent = styled.img`
    height: 90%;
`

const PrimarySearchAppBar = (props) => {
    const [scrolled, setScrolled] = useState(null);
    const [lastScrolled, setLastScrolled] = useState(null);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, true);
        return () => window.removeEventListener("scroll", handleScroll, true);
    });

    const handleScroll = () => {

        const lastScroll = window.scrollY;

        if (lastScroll === scrolled) {
            return;
        }

        const shouldScroll = lastScrolled !== null ? lastScroll < lastScrolled : null;

        if (shouldScroll !== scrolled) {
            setScrolled(shouldScroll);
        }

        setLastScrolled(lastScroll);
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={`${classes.grow} main-navigation`}>
            <Container maxWidth="md">
                <AppBar position="fixed" className={`${classes.small} ${classes.container}`}>
                    <Toolbar className={classes.toolbar}>
                        {/*<IconButton*/}
                        {/*  edge="start"*/}
                        {/*  className={classes.menuButton}*/}
                        {/*  color="inherit"*/}
                        {/*  aria-label="open drawer"*/}
                        {/*>*/}
                        {/*  <MenuIcon />*/}
                        {/*</IconButton>*/}
                        <LogoImageComponent src={Instagram} alt=""/>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>
                            {/*<IconButton aria-label="show 4 new mails" color="inherit">*/}
                            {/*  <Badge badgeContent={4} color="secondary">*/}
                            {/*    <MailIcon />*/}
                            {/*  </Badge>*/}
                            {/*</IconButton>*/}
                            {/*<IconButton aria-label="show 17 new notifications" color="inherit">*/}
                            {/*  <Badge badgeContent={17} color="secondary">*/}
                            {/*    <NotificationsIcon />*/}
                            {/*  </Badge>*/}
                            {/*</IconButton>*/}
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color={"black"}
                            >
                                <AccountCircle/>
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Container>
        </div>
    );
}

export default PrimarySearchAppBar