import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import { Typography, Box, Container } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import useStyles from '../Style';


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default function ComplaintsAudit3({ users }) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (

        <Box style={{ display: 'flex', marginTop: '2rem', marginRight: '3rem' }}>
            <div>
                <FormControl variant="filled" className={classes.formControl} style={{ width: '12rem', marginRight: '15rem' }}>
                    <InputLabel htmlFor="filled-age-native-simple">اختر المرسل اليه</InputLabel>
                    <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'filled-age-native-simple',
                        }}
                    >
                        {users.map((user) =>

                            <option value={user.id}>{user.name}</option>

                        )}
                    </Select>

                </FormControl>

                <Button type="onSubmit" variant="contained" component="span" className={classes.buttonComplaintsAudit3} style={{ marginRight: '3rem' }} >
                    <Typography>ارسال </Typography>
                </Button>
                <Button type="onSubmit" variant="contained" component="span" className={classes.buttonComplaintsAudit3}>
                    <Typography>انهاء </Typography>
                </Button>
                <Button type="onSubmit" variant="contained" component="span" className={classes.buttonComplaintsAudit3}>
                    <Typography>طباعة </Typography>
                </Button>

            </div>

        </Box>
    );
}