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
import useStyles from '../Style';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField';
import Search from './Search';
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
  <Box className={classes.container}>
   <Box className={classes.modalPaperAddUser} p='6'>
    <Box>
     <form className={classes.form} noValidate onValidSubmit={handleSubmit}>
      <TextField
       id='outlined-basic'
       label='الاسم الثلاثي'
       variant='outlined'
       onChange={(e) => setFullName(e.target.value)}
       className={classes.inputsInoStyle}
      />

      <TextField
       id='outlined-basic'
       label='البريد الالكتروني'
       variant='outlined'
       onChange={(e) => setEmail(e.target.value)}
       className={classes.inputsInoStyle}
      />
      <TextField
       id='outlined-basic'
       label='كلمة السر '
       variant='outlined'
       onChange={(e) => setPassword(e.target.value)}
       className={classes.inputsInoStyle}
      />
      <TextField
       id='outlined-basic'
       label='العنوان الوظيفي'
       variant='outlined'
       onChange={(e) => setPosition(e.target.value)}
       className={classes.inputsInoStyle}
      />
      <TextField
       id='outlined-basic'
       label='الكلية/موقع العمل'
       variant='outlined'
       onChange={(e) => setPosition(e.target.value)}
       className={classes.inputsInoStyle}
      />
      <TextField
       id='outlined-basic'
       label='الكلية/القسم'
       variant='outlined'
       onChange={(e) => setPosition(e.target.value)}
       className={classes.inputsStyle}
      />
     </form>
    </Box>
    <Button
     type='submit'
     fullWidth
     variant='contained'
     color='primary'
     className={classes.submit}
    >
     حفظ التغييرات
    </Button>
   </Box>
   <Box style={{ marginTop: '-60px' }}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
     <path
      fill='#7661A4'
      fillOpacity='1'
      d='M0,160L60,181.3C120,203,240,245,360,229.3C480,213,600,139,720,144C840,149,960,235,1080,272C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
     ></path>
    </svg>
   </Box>
  </Box>
 );
}
export default ProfileDetails;
