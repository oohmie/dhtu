import { AppBar, IconButton, Toolbar } from "@mui/material";
import theCu from './Cu1.png';
import React from 'react'

export const MuiNavbar = () =>{
    return(
        <AppBar position="sticky">
            <Toolbar>
                <IconButton>
                    <img src={theCu} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}