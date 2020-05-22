import React from 'react'
import { Toolbar, AppBar, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => {
    typoStyles: {
        flex: 1
    }
})

const Header = ()=> {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography 
                    className={classes.typoStyles} >
                Profiles | Admin
                </Typography>
                <AddIcon/>
            </Toolbar>
        </AppBar>
        )
}

export default Header