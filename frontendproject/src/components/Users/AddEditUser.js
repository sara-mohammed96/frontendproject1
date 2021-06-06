import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Box, Modal, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { postingMethodsMap } from './users.service';
import useStyles from '../Style';

export default function AddEditUser({
    open,
    handleClose,
    action,
    name,
    isActive = true,
    password,
    username,
}) {
    const classes = useStyles();



    return (
        <Modal
            disableAutoFocus
            disableEnforceFocus
            open={open}
            onClose={handleClose}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
        >
            <Box className={classes.container}>
                <Box className={classes.modalPaperAddUser} p='6'>
                    <Box>
                        <Box
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '1rem',
                            }}
                        >
                            <Typography variant='v5'>اضافة مستخدم </Typography>
                        </Box>
                        <Formik
                            className={classes.root}
                            style={{ marginRight: '10%' }}
                            initialValues={{
                                name: name,
                                username: username,
                                password: password,
                                isActive: isActive,

                            }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.name) {
                                    errors.name = 'Required';
                                }
                                if (!values.username) {
                                    errors.username = 'Required';
                                }
                                if (!values.password) {
                                    errors.password = 'Required';
                                }
                                if (!values.isActive) {
                                    errors.isActive = 'Required';
                                }
                                // console.log(errors, values);
                                return errors;
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                                const clonedValues = { ...values };

                                clonedValues.isActive = Boolean(
                                    parseInt(values.isActive)
                                );
                                Object.keys(clonedValues).map((key) => {
                                    if (clonedValues[key] === null || clonedValues[key] === undefined) {
                                        delete clonedValues[key];
                                    }
                                });
                                const res = await postingMethodsMap[action](clonedValues);
                                console.log(res);
                                setSubmitting(false);
                                handleClose();
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        label='الاسم'
                                        variant='outlined'
                                        className={classes.inputsStyle}
                                        required
                                        fullWidth
                                        name='name'
                                        id='name'
                                        autoComplete='current-name'
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.name && Boolean(errors.name)}
                                        helperText={touched.name && errors.name}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position='end'>
                                                    <PersonIcon fontSize='small' color='primary' />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <TextField
                                        label='اسم المستخدم '
                                        variant='outlined'
                                        className={classes.inputsStyle}
                                        required
                                        fullWidth
                                        name='username'
                                        id='username'
                                        autoComplete='current-username'
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.username && Boolean(errors.username)}
                                        helperText={touched.username && errors.username}

                                    />
                                    <TextField
                                        label='كلمة السر '
                                        variant='outlined'
                                        className={classes.inputsStyle}
                                        required
                                        fullWidth
                                        name='password'
                                        id='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor='age-native-simple'>isActive</InputLabel>
                                        <Select
                                            name='isActive'
                                            value={values.isActive}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            <option value={true}>True</option>
                                            <option value={false}>False</option>
                                        </Select>
                                    </FormControl>
                                    <Button
                                        type='submit'
                                        fullWidth
                                        variant='contained'
                                        color='primary'
                                        className={classes.buttonAdd}
                                        disabled={isSubmitting}
                                    >
                                        ارسال
         </Button>
                                </form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}
