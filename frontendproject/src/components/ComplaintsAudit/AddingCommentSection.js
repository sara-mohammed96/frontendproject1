import React, { useContext } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from '../Style';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Typography, Box, Container } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { UsersContext } from '../../state/userState/UserContext';
import { Formik } from 'formik';
import { addComment } from './Comments.service';

export default function AddingCommentSection({ applicationId, commentBody, userId }) {
    const classes = useStyles();
    const { users } = useContext(UsersContext);

    return (

        <Box >

            <Formik
                className={classes.root}
                style={{ marginRight: '10%' }}
                initialValues={
                    {
                        body: commentBody,

                        userId,

                    }
                }
                validate={(values) => {
                    const errors = {};
                    if (!values.text) {
                        errors.text = 'Required';
                    }

                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    const { commentBody } = values;
                    const comment = await addComment(applicationId, commentBody);
                    setSubmitting(false);

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
                        <Box style={{ display: 'flex' }}>
                            <Box m={2}>
                                <TextField
                                    id="body"
                                    name='body'
                                    label="كتابة تهميش"
                                    multiline
                                    rows={5}
                                    variant="outlined"
                                    value={values.body}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.body && Boolean(errors.body)}
                                    helperText={touched.body && errors.body}

                                />

                                <input
                                    style={{ display: 'none' }}
                                    id='upload-photo'
                                    name='upload-photo'
                                    type='file'
                                />

                                <Button
                                    component='span'
                                    style={{
                                        display: 'flex',
                                        borderRadius: 50,
                                        background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
                                        color: 'white',
                                        width: '10rem',
                                        height: '3.5rem',
                                        marginRight: '2rem',
                                        marginTop: '1rem',
                                    }}
                                >
                                    <label htmlFor='upload-photo'>
                                        <Typography> اضافة مرفق</Typography>
                                    </label>
                                </Button>
                            </Box>

                            <FormControl variant='filled' style={{ width: '10rem', margin: '1rem' }}>
                                <InputLabel htmlFor='filled-Complaints-native-simple'>
                                    اختر المرسل اليه
                                </InputLabel>
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

                            <Button
                                component='span'
                                style={{
                                    borderRadius: 50,
                                    background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
                                    color: 'white',
                                    width: '18rem',
                                    height: '3rem',
                                    marginTop: '1rem',
                                    marginRight: '0.2rem',
                                }}
                            >
                                <Typography> ارسال</Typography>
                            </Button>

                        </Box>
                    </form>
                )}
            </Formik>







            <Box>

                <Box style={{ border: '1px solid #bdbdbd', borderRadius: '3px', width: '40%' }}>
                    <Typography style={{ marginTop: '3rem', marginRight: '5rem' }}>
                        هل تريد الطباعة
      </Typography>
                    <Button
                        component='span'
                        style={{
                            borderRadius: 50,
                            marginTop: '1rem',
                            background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
                            color: 'white',
                            width: '11rem',
                            height: '2.5rem',
                            marginRight: '2.5rem',
                        }}
                    >
                        <Typography> طباعة المرفقات</Typography>
                    </Button>
                    <Button
                        component='span'
                        style={{
                            borderRadius: 50,
                            marginTop: '1rem',
                            background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
                            color: 'white',
                            width: '11rem',
                            height: '2.5rem',
                            marginRight: '2.5rem',
                        }}
                    >
                        <Typography> طباعة الشكوى مع المرفقات</Typography>
                    </Button>
                </Box>

            </Box>
        </Box >

    );
}
