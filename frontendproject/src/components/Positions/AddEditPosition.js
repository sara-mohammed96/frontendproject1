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
import { postingMethodsMap } from './positions.service';
import useStyles from '../Style';

export default function AddEditPosition({
    open,
    handleClose,
    action,
    positionId,
    users,
    positionName = '',
    canReceiveApplication = true,
    userId = null,
    managerId = null,
}) {
    const classes = useStyles();

    console.log(canReceiveApplication, '---canReceiveApplication');

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
                            <Typography variant='v5'>اضافة موقع وظيفي </Typography>
                        </Box>
                        <Formik
                            className={classes.root}
                            style={{ marginRight: '10%' }}
                            initialValues={{
                                name: positionName,
                                canReceiveApplication,
                                userId,
                                managerId,
                            }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.name) {
                                    errors.name = 'Required';
                                }
                                if (!values.canReceiveApplication) {
                                    errors.canReceiveApplication = 'Required';
                                }
                                // console.log(errors, values);
                                return errors;
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                                const clonedValues = { ...values };

                                clonedValues.canReceiveApplication = Boolean(
                                    parseInt(values.canReceiveApplication)
                                );
                                Object.keys(clonedValues).map((key) => {
                                    if (clonedValues[key] === null || clonedValues[key] === undefined) {
                                        delete clonedValues[key];
                                    }
                                });
                                const res = await postingMethodsMap[action](clonedValues, positionId);
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
                                        label='الاسم الوظيفي'
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
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor='age-native-simple'>
                                            يستطيع رؤية الشكوى
          </InputLabel>
                                        <Select
                                            native
                                            required
                                            name={'canReceiveApplication'}
                                            value={values.canReceiveApplication}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={
                                                touched.canReceiveApplication &&
                                                Boolean(errors.canReceiveApplication)
                                            }
                                        >
                                            <option value={1}>True</option>
                                            <option value={0}>False</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor='age-native-simple'>users</InputLabel>
                                        <Select
                                            name='userId'
                                            value={values.userId}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.userId && Boolean(errors.userId)}
                                        >
                                            {users.map((user, i) => (
                                                <option key={i} value={user.id}>
                                                    {user.name}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor='age-native-simple'>مدير العمل</InputLabel>
                                        <Select
                                            name='managerId'
                                            value={values.managerId}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.managerId && Boolean(errors.managerId)}
                                        >
                                            {users.map((user, i) => (
                                                <option key={i} value={user.id}>
                                                    {user.name}
                                                </option>
                                            ))}
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
