import React, { useState, useContext } from 'react';

import { MoreVert } from '@material-ui/icons';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';

import { GoogleLogout } from 'react-google-login';
import { clientId } from '../constants/data';

import { AccountContext } from '../../context/AccountProvider';

// components
import Drawer from '../drawer/InfoDrawer';

const useStyles = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4a4a4a'
    },
    logout: {
        border: 'none!important',
        boxShadow: 'none!important',
        '& > *': {
            padding: '0px!important'
        }
    }
})

const HeaderMenu = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const { setAccount } = useContext(AccountContext);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const onLogoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setAccount(null);
    }

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem className={classes.menuItem} onClick={() => { handleClose(); toggleDrawer() }}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                        className={classes.logout}
                    >
                    </GoogleLogout>
                </MenuItem>
            </Menu>
            <Drawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    );
}

export default HeaderMenu;