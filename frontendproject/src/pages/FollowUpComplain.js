
import React from 'react'
import NavbarLandingPage from '../components/LandingPage/NavbarLandingPage'
import Button from '@material-ui/core/Button';
import { Box, Modal, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from '../components/Style'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
export default function FollowUpComplain() {
    const classes = useStyles();
    return (
        <div style={{ backgroundColor: '#F5F4FA', height: '35rem' }}>
            <NavbarLandingPage />
            <div style={{ margin: '2rem' }}>
                <Typography variant='h4' align="center" > لتتبع الشكوى </Typography>

                <form style={{ marginRight: '15%' }}>
                    <TextField
                        label='رمز الشكوى'
                        variant='outlined'
                        className={classes.inputsStyle}
                        required
                        fullWidth
                        name='name'
                        id='name'
                        autoComplete='current-name'

                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <ConfirmationNumberIcon fontSize='small' color='primary' />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label='رقم الهوية'
                        variant='outlined'
                        className={classes.inputsStyle}
                        required
                        fullWidth
                        name='name'
                        id='name'
                        autoComplete='current-name'

                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <ConfirmationNumberIcon fontSize='small' color='primary' />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'

                        style={{
                            borderRadius: 50,
                            background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
                            color: 'white',
                            width: '18rem',
                            height: '3rem',
                            marginTop: '1rem',
                            marginRight: '30%',
                        }}
                    >
                        <Typography> بحث</Typography>

                    </Button>
                </form>

            </div>
        </div>
    )
}
