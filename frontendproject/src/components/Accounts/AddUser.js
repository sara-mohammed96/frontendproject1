import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Container, Box, Grid , Modal , Hidden ,Typography} from '@material-ui/core';
import useStyles from '../Style';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField';
 function AddUserInfo(credentials) {
  return fetch('http://localhost:3000/users')
  .then((response) => response.json())
  .then((responseJSON) => {return responseJSON})
  .then((data)=> console.log(data.result.list))
 }

function AddUser() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setFullName] = useState();
  const [password, setPassword] = useState();
  const [Email, setEmail] = useState();
  const [username, setPosition] = useState();
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [checked,setChecked]=useState('');
  const handleSubmit =  e => {
    e.preventDefault();
    const token =  AddUserInfo({
      name,
      password,
      username
    });
    
   
  }
 
  const body = (
      <Box className={classes.container}>
    <Box className={classes.modalPaperAddUser} p='6'>
    <Box >
    <Box style={{width:'100%',display:'flex',justifyContent:'center',margin:'1rem'}}>
     <Typography variant='v5'>اضافة مستخدم </Typography>
     </Box>
     <form className={classes.form} noValidate  onValidSubmit={handleSubmit}  >
    <TextField 
    id="outlined-basic" 
    label="الاسم الثلاثي" 
    variant="outlined"
    onChange={e => setFullName(e.target.value)}
    className={classes.inputsInoStyle}/>

    <TextField 
    id="outlined-basic" 
    label="البريد الالكتروني" 
    variant="outlined"
    onChange={e => setEmail(e.target.value)}
    className={classes.inputsInoStyle}/>
    <TextField 
    id="outlined-basic" 
    label="كلمة السر " 
    variant="outlined"
    onChange={e => setPassword(e.target.value)}
    className={classes.inputsInoStyle}/>
    <TextField 
    id="outlined-basic" 
    label="العنوان الوظيفي" 
    variant="outlined"
    onChange={e => setPosition(e.target.value)}
    className={classes.inputsInoStyle}/>
            </form>
            </Box>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
           اضافة
          </Button>

</Box>
<Box style={{marginTop:'-60px'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7661A4" fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,229.3C480,213,600,139,720,144C840,149,960,235,1080,272C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
</Box>




    </Box>
   
  );

  return (
    <Container>
    
        <Grid item >
            <Box className={classes.buttonContainer}>
                <Button onClick={handleOpen} variant="contained" component="span" style={{borderRadius: 50,border: 0,background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',color: 'white',
   
    marginTop: '3rem',
    width:'15%',marginRight:'38%'}}>
                     <Typography>اضافة مستخدم </Typography>
                </Button>
                </Box>
                <Modal
                  disableAutoFocus
                  disableEnforceFocus
                  
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description">
                  {body}
                </Modal>
      </Grid>
 
  </Container>
  );
}
export default (AddUser);
