import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ComplaintsHeader from './ComplaintsHeader'
import { Box, Container,Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        height:300,
        backgroundColor:'#fff',
        width:'30%',
        
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));


export default function ComplaintsSideBar({value}) {
    const classes = useStyles();
    
  
    return (
        <div >
           <ComplaintsHeader />
           <Box className={classes.root}>
           {value.map((value) => (
           <Card className={classes.root1} variant="outlined">
      <CardContent>
     <Box style={{display:'flex',justifyContent:'space-between'}}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {value.title}
        </Typography>
        <Typography  style={{color:'#9e9e9e'}}>{value.date}</Typography>
        </Box>
<Typography>{value.text.slice(0,50)}</Typography>
      </CardContent>
      <Box style={{display:'flex',justifyContent:'flex-end'}}>
      <CardActions>
         
        <Button size="small">قراءة المزيد</Button>
        
      </CardActions>
      </Box>
    </Card>
          ))
        }
           </Box>
        </div>
    );
}






