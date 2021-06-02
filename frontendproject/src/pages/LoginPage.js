import React from 'react';
import {
 Avatar,
 Button,
 CssBaseline,
 TextField,
 FormControlLabel,
 Checkbox,
 Typography,
 Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from '../components/Style';
import { Formik } from 'formik';

async function loginUser(credentials) {
 const res = await fetch('http://localhost:3000/auth/signin', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify(credentials),
 });
 return res.json();
}

export default function LoginPage() {
 const classes = useStyles();
 return (
  <Container component='main' maxWidth='xs'>
   <CssBaseline />
   <div className={classes.paper}>
    <Avatar className={classes.avatar}>
     <LockOutlinedIcon />
    </Avatar>
    <Typography component='h1' variant='h5'>
     تسجيل دخول
    </Typography>
    <Formik
     initialValues={{ username: '', password: '' }}
     validate={(values) => {
      const errors = {};
      if (!values.username) {
       errors.username = 'Required';
      }
      if (!values.password) {
       errors.password = 'Required';
      }
      return errors;
     }}
     onSubmit={async (values, { setSubmitting }) => {
      const { username, password } = values;
      const token = await loginUser({
       username,
       password,
      });
      console.log(token);
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
      /* and other goodies */
     }) => (
      <form className={classes.form} onSubmit={handleSubmit}>
       <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        required
        id='username'
        label='الحساب الالكتروني'
        name='username'
        autoComplete='username'
        autoFocus
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
       />
       <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        name='password'
        label='كلمة السر'
        type='password'
        id='password'
        autoComplete='current-password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
       />
       <FormControlLabel
        control={<Checkbox value='remember' color='primary' />}
        label='تذكرني'
       />
       <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
        disabled={isSubmitting}
       >
        تسجيل الدخول
       </Button>
      </form>
     )}
    </Formik>
   </div>
  </Container>
 );
}
