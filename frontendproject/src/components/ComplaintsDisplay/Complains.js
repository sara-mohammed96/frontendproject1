import { React, useState, useEffect } from 'react';
import {
 Card,
 Box,
 CardActionArea,
 Typography,
 CardContent,
 Button,
 CardActions,
} from '@material-ui/core';
import useStyles from '../Style';
import NavbarHeader from '../Navbar/Navbar';
import TextField from '@material-ui/core/TextField';

/*const showDetailsOfTheComplain = () => {
  return (

  )
}
*/

export default function Profiles() {
 const classes = useStyles();
 const [complains, setComplains] = useState([]);
 const [list, setList] = useState([]);
 const [openDetails, setOpenDetails] = useState(false);
 fetch('http://localhost:3000/applications')
  .then((res) => res.json())
  .then((res) => res.result)
  .then((res) => res.list)
  .then((res) => setList(res));

 return (
  <div className={classes.complainsBody}>
   <NavbarHeader />
   <Box className={classes.dateAndTitleContainerStyle}>
    <Typography variant='h4'>الشكاوي</Typography>
    <form className={classes.container} noValidate>
     <TextField
      id='date'
      type='date'
      defaultValue='2017-05-24'
      className={classes.textField}
      InputLabelProps={{
       shrink: true,
      }}
     />
    </form>
   </Box>
   {list.map((value) => {
    return (
     <Card className={classes.cardStyle}>
      <CardContent>
       <Box className={classes.complainStyleTitle}>
        <Typography gutterBottom variant='h5' component='h2'>
         {value.subject}
        </Typography>
        <Typography
         gutterBottom
         variant='h6'
         component='h2'
         className={classes.dateStyle}
        >
         {value.createdAt}
        </Typography>
       </Box>
       <Typography variant='body2' color='textSecondary' component='p'>
        {value.description.slice(0, 100)}
       </Typography>
      </CardContent>

      <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
       <CardActions>
        <Button size='small' className={classes.readMoreButton}>
         قراءة المزيد
        </Button>
       </CardActions>
      </Box>
     </Card>
    );
   })}
  </div>
 );
}
