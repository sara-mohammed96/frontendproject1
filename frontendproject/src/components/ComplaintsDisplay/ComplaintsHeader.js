import React from 'react';
import {createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 140,
     
    },
  }),
);
export default function ComplaintsHeader() {
    const classes = useStyles();

    return (
        <div style={{flexGrow: 1,
            width:'30%',}}>
            <AppBar position="static">
                <Toolbar  style={{ display: "flex", justifyContent: "space-between" ,background:'linear-gradient(to right bottom, #4455A7, #6C54A2)'}}>


                    <Typography variant="h5" color="inherit">
                       الشكاوي
                    </Typography>
                    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label=""
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        
        InputProps={{ classes: {underline: classes.underline}}}
      />
    </form>
                </Toolbar>
            </AppBar>
     
        </div>
    );
}






