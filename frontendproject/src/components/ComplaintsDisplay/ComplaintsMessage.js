import React from 'react';
import {createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography,Box} from '@material-ui/core';
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
export default function ComplaintsMessage({value}) {
    const classes = useStyles();

    return (
        <div>
           <Box>
                <Typography>{value.title}</Typography>
           </Box>
           <Box>
               <Typography>{value.text}</Typography>
           </Box>
     
        </div>
    );
}






