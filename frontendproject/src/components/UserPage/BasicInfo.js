import React, { useCallback } from 'react'
import { Grid, Typography, Divider, Box, Paper } from '@material-ui/core';
export default function BasicInfo() {


    return (
        <Grid >

            <Box>
                <Typography variant='h4' align='center'>المعلومات الاساسية</Typography>
                <Divider style={{ width: '15rem', marginTop: '1rem' }} />
            </Box>



            <Box>
                <Typography variant='h4' align='center' style={{ marginTop: '100%' }}>محتوى البلاغ</Typography>
                <Divider style={{ width: '15rem', marginTop: '1rem' }} />
            </Box>

        </Grid>
    )
}