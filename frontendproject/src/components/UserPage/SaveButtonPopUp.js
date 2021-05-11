import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Container, Box, Grid , Modal , Hidden ,Typography} from '@material-ui/core';
import useStyles from '../Style';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Image from "material-ui-image";
import img3 from '../../media/check.png';
function SaveButtonPopUp() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
      <Box className={classes.container} >
    <Box className={classes.modalPaper} p='6'>
    <Box style={{width:'100%',display:'flex',justifyContent:'center'}}>
              
    <CheckCircleIcon  style={{width:'10rem',height:'10rem',color:'#6C54A2'}}/>
            </Box>
    <Box style={{width:'100%',display:'flex',justifyContent:'center'}}>
     <Typography variant='v5'>تم تسجيل البلاغ</Typography>
     </Box>
     <Box style={{width:'100%',display:'flex',justifyContent:'center',padding:'1rem'}}>
     <Typography style={{width:'80%'}}>رقم طلب البلاغ الخاص بك هو 10921
نسخة من طلب البلاغ تم ارساله الى البريد الالكتروني
يرجى الاحتفاظ برقم الطلب فهو الطريقة الوحيدة لتتبع طلبك 
</Typography>

</Box>
<Box style={{marginTop:'-60px'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7661A4" fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,229.3C480,213,600,139,720,144C840,149,960,235,1080,272C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
</Box>
</Box>



    </Box>
   
  );

  return (
    <Container>
    
        <Grid item >
            <Box className={classes.buttonContainer}>
                <Button onClick={handleOpen} variant="contained" component="span" className={classes.buttonAdd}>
                     <Typography>ارسال </Typography>
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
export default (SaveButtonPopUp);
