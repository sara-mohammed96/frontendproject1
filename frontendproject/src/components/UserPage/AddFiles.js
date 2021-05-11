import React, { useCallback } from 'react'
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import { Typography,Box, Container } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import useStyles from '../Style';
import AddFilesInstructions from './AddFilesInstructions'
export default function MyDropzone() {
    const classes = useStyles();

    return (
        <Grid style={{ display:'flex',justifyContent:'center ',width:'100%'}} >
            <Box boxShadow={2} className={classes.AddFilesContainer}>
             <label htmlFor="upload-photo">
  <input
    style={{ display: 'none' }}
    id="upload-photo"
    name="upload-photo"
    type="file"
  />
  
 <Typography align='center'> من هنا حمل ما تريد من مستندات بما يخص البلاغ</Typography>
 <Box style={{display:'flex', justifyContent:'center' ,paddingTop:'1rem'}}>
  <Button  component="span" className={classes.AddFilesButton}>
    <GetAppIcon style={{color:'#4455A7'}}/>
  </Button>
  </Box>
 
</label>

<AddFilesInstructions />

</Box>
        </Grid>
    )
}