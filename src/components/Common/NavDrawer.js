import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const NavDrawer = (props) => (
    <Drawer 
        open = {props.open}
        docked = {false}
        width={'20%'}
        onRequestChange={(open) => props.open}>

        <MenuItem onClick = {props.handleClose}>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        
    </Drawer>
);

export default NavDrawer;