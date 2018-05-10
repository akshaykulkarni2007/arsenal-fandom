import React from 'react';
import AppBar from 'material-ui/AppBar';

const NavBar = (props) => (
    <AppBar 
        title="Arsenal Fandom" 
        onLeftIconButtonClick = {props.triggerNavMenu}
        style={{background: 'rgb(254, 0, 12)'}} />
);

export default NavBar;
