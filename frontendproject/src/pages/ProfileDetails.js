import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {
 Container,
 Box,
 Grid,
 Modal,
 Hidden,
 Typography,
} from '@material-ui/core';
import useStyles from '../components/Style';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField';
import Navbar from '../components/Navbar/Navbar';
async function AddUserInfo(credentials) {
 return fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify(credentials),
 }).then((data) => data.json(console.log(credentials)));
}
function ProfileDetails() {
 const classes = useStyles();
 const [open, setOpen] = useState(false);
 const [fullName, setFullName] = useState();
 const [password, setPassword] = useState();
 const [Email, setEmail] = useState();
 const [position, setPosition] = useState();

 const handleSubmit = async (e) => {
  e.preventDefault();
  const token = await AddUserInfo({
   fullName,
   Email,
   password,
   position,
  });
 };

 return (
  <Box>
   <Navbar />
   <Box style={{ marginRight: '40%', width: '60%', marginTop: '2rem' }}>
    <form className={classes.form} noValidate onValidSubmit={handleSubmit}>
     <TextField
      size='small'
      id='outlined-basic'
      label='الاسم الثلاثي'
      variant='outlined'
      onChange={(e) => setFullName(e.target.value)}
      className={classes.inputsInoStyle}
     />

     <TextField
      size='small'
      id='outlined-basic'
      label='البريد الالكتروني'
      variant='outlined'
      onChange={(e) => setEmail(e.target.value)}
      className={classes.inputsInoStyle}
     />
     <TextField
      size='small'
      id='outlined-basic'
      label='كلمة السر '
      variant='outlined'
      onChange={(e) => setPassword(e.target.value)}
      className={classes.inputsInoStyle}
     />
     <TextField
      size='small'
      id='outlined-basic'
      label='العنوان الوظيفي'
      variant='outlined'
      onChange={(e) => setPosition(e.target.value)}
      className={classes.inputsInoStyle}
     />
     <TextField
      size='small'
      id='outlined-basic'
      label='الكلية/موقع العمل'
      variant='outlined'
      onChange={(e) => setPosition(e.target.value)}
      className={classes.inputsInoStyle}
     />
     <TextField
      size='small'
      id='outlined-basic'
      label='الكلية/القسم'
      variant='outlined'
      onChange={(e) => setPosition(e.target.value)}
      className={classes.inputsInoStyle}
     />
    </form>
   </Box>
   <Button
    type='submit'
    fullWidth
    variant='contained'
    color='primary'
    style={{ width: '20%', marginRight: '45rem' }}
   >
    حفظ التغييرات
   </Button>
  </Box>
 );
}
export default ProfileDetails;
