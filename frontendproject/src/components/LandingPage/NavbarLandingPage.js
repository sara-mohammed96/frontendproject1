import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function NavbarLandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: 'linear-gradient(to right top, #4455A7, #6C54A2)' }}>
                <Toolbar variant="dense" style={{ display: "flex", justifyContent: "center" }}>


                    <Typography variant="h6" color="inherit">
                        جامعة الموصل
          </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}






