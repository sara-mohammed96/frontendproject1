import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from '../components/Style';
import NavbarHeader from '../components/Navbar/Navbar';
import AddUser from '../components/Accounts/AddUser';
export default function Profiles() {
 const classes = useStyles();
 const [profilesData, setProfilesData] = useState([]);

 fetch('http://localhost:3000/positions')
  .then((response) => response.json())
  .then((responseJSON) => {
   return responseJSON;
  })
  .then((data) => data.result)
  .then((data) => {
   setProfilesData(data.list);
   console.log(setProfilesData);
  });

 return (
  <div>
   <NavbarHeader />
   <AddUser />
   {profilesData.map((value) => {
    return (
     <Card className={classes.cardStyle}>
      <CardActionArea>
       <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
         {value.name}
        </Typography>

        <Typography variant='body2' color='textSecondary' component='p'>
         This CardContent is wrapped in a CardActionsArea, so this text and the
         above header are wrapped in a ButtonBase, which means they behave like
         a Button.
        </Typography>
       </CardContent>
      </CardActionArea>
     </Card>
    );
   })}
  </div>
 );
}
