import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Container, Box, Grid , Modal , Hidden ,Typography,Divider} from '@material-ui/core';
import useStyles from '../Style';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Image from "material-ui-image";
import img4 from '../../media/instr.png';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function AddFilesInstructions() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
      <Box className={classes.container}>
      <Box className={classes.containerOfTheInstruction} >
         
              <Typography align='center' variant='h5' style={{color:'#6C54A2'}}>ارشادات التحميل</Typography>
              <Box style={{display:'flex',justifyContent:'center'}}>
              <Divider style={{width:'10rem',marginTop:'1rem'}}/>
          </Box>
          <Box style={{display:'flex'}}>
          <Box>
          <List >
        <ListItem >
          <ListItemIcon>
            <FiberManualRecordIcon style={{color:'#6C54A2'}}/>
          </ListItemIcon>
          <ListItemText primary="الرجاء تحميل العناصر ذات الصلة فقط" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
          <FiberManualRecordIcon style={{color:'#6C54A2'}}/>
           
          </ListItemIcon>
          <ListItemText primary="فقط ملفات (PDF) و (JPEG) يمكن تحميلها " />
        </ListItem>

        <ListItem >
          <ListItemIcon>
          <FiberManualRecordIcon style={{color:'#6C54A2'}}/>
           
          </ListItemIcon>
          <ListItemText primary=" لا يمكن تحميل اكثر من 10 ملفات" />
        </ListItem>

        <ListItem >
          <ListItemIcon>
          <FiberManualRecordIcon style={{color:'#6C54A2'}}/>
           
          </ListItemIcon>
          <ListItemText primary="حجم الصورة يجب ان لا يتجاوز (1 megabyte) لصورة الواحدة" />
        </ListItem>
      </List>
          </Box>
            <Box style={{width:'15rem'}}>
               <Image src={img4} style={{width:'15rem',backgroundColor:'#F5F4FA'}}/>
               
            </Box>
            </Box>
            <Box>
            <Button onClick={handleClose} variant="contained" component="span" className={classes.buttonAdd}>
                     <Typography>رجوع</Typography>
                </Button>
            </Box>
            </Box>
           
   </Box>
  );

  return (
    <Container>
    
        <Grid item >
            <Box className={classes.buttonInstructions}>
               
                     <Typography onClick={handleOpen}>تعليمات التحميل  </Typography>
                
                </Box>
                <Modal
                  disableAutoFocus
                  disableEnforceFocus
                  
                  open={open}
                  onClose={handleClose}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description">
                  {body}
                </Modal>
      </Grid>
 
  </Container>
  );
}
export default (AddFilesInstructions);
