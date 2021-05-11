import React, { useCallback } from 'react'
import {Grid,Typography ,Divider ,Box,Paper } from '@material-ui/core';
import img1 from '../../media/contact.png';
import img2 from '../../media/laptop.png';
import Image from "material-ui-image";
export default function BasicInfo() {


    return (
        <Grid >
           
                <Box>
                    <Typography variant='h4' align='center'>المعلومات الاساسية</Typography>
                        <Divider style={{width:'15rem',marginTop:'1rem'}}/>
                </Box>
                
          
                <Box style={{width:'15rem'}}>
               <Image src={img1} style={{width:'15rem',backgroundColor:'#F5F4FA'}}/>
               
            </Box>
            <Box>
                    <Typography variant='h4' align='center' style={{marginTop:'137%'}}>محتوى البلاغ</Typography>
                        <Divider style={{width:'15rem',marginTop:'1rem'}} />
                </Box>
                <Box style={{width:'15rem'}}>
               <Image src={img2} style={{width:'15rem',backgroundColor:'#F5F4FA'}}/>
               
            </Box>
        </Grid>
    )
}