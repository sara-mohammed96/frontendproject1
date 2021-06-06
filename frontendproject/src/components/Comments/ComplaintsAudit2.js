import { React, useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography, Box, Container } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import useStyles from '../Style';

export default function ComplaintsAudit2({ PreviousComments }) {

    const classes = useStyles();
    const [data, setData] = useState({
        body: ''

    });

    const handleForm = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        debugger;
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.body,
                applicationId: PreviousComments.applicationId,
                positionId: PreviousComments.positionId,
            }),
        })
            .then((res) => res.json())
            .then((json) => console.log(json.data));
    };

    return (
        <Box style={{ width: '100%' }}>
            <Typography gutterBottom variant="h5" component="h2" style={{ marginRight: '15rem', marginTop: '1rem' }}>
                كتابة التهميش
          </Typography>

            <Box style={{ display: 'flex' }}>

                <TextareaAutosize rowsMin={7}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue="اكتب تعليق" style={{ width: '30rem', marginRight: '15rem' }}
                    onChange={(e) => setData(e.target.value)} />




                <Grid style={{ width: '40%', marginRight: '4rem', justify: 'center' }} >
                    <Box boxShadow={2} className={classes.AddFilesContainer}>
                        <label htmlFor="upload-photo">
                            <input
                                style={{ display: 'none' }}
                                id="upload-photo"
                                name="upload-photo"
                                type="file"
                            />

                            <Typography align='center'> من هنا حمل المستندات</Typography>
                            <Box style={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem' }}>
                                <Button component="span" className={classes.AddFilesButton}>
                                    <GetAppIcon style={{ color: '#4455A7' }} />
                                </Button>
                            </Box>

                        </label>



                    </Box>
                </Grid>

            </Box>
        </Box>
    );
}