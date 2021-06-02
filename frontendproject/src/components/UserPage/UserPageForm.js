import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Modal } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Button from '@material-ui/core/Button';
import { Typography, Box, Container } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import AddFilesInstructions from './AddFilesInstructions';
import useStyles from '../Style';
import { Formik } from 'formik';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
export default function UserPageForm() {
  const classes = useStyles();
  //  const [data, setData] = useState({
  //   name: '',
  //   email: '',
  //   workplaceName: '',
  //   phoneNumber: '',
  //   subject: '',
  //   description: '',
  //  });

  //  const handleForm = (e) => {
  //   const newData = { ...data };
  //   newData[e.target.id] = e.target.value;
  //   setData(newData);
  //   console.log(newData);
  //  };
  //  const onSubmit = (e) => {
  //   e.preventDefault();
  //   debugger;
  //   fetch('http://localhost:3000/applications', {
  //    method: 'POST',
  //    headers: {
  //     'Content-Type': 'application/json',
  //    },
  //    body: JSON.stringify({
  //     name: data.name,
  //     email: data.email,
  //     workplaceName: data.workplaceName,
  //     phoneNumber: data.phoneNumber,
  //     subject: data.subject,
  //     description: data.description,
  //     positionId: 3,
  //    }),
  //   })
  //    .then((res) => res.json())
  //    .then((json) => console.log(json.data));
  //  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box className={classes.container} >
      <Box className={classes.modalPaper} p='6'>
        <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <CheckCircleIcon style={{ width: '10rem', height: '10rem', color: '#6C54A2' }} />
        </Box>
        <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Typography variant='v5'>تم تسجيل البلاغ</Typography>
        </Box>
        <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '1rem' }}>
          <Typography style={{ width: '80%' }}>رقم طلب البلاغ الخاص بك هو 10921
          نسخة من طلب البلاغ تم ارساله الى البريد الالكتروني
          يرجى الاحتفاظ برقم الطلب فهو الطريقة الوحيدة لتتبع طلبك
        </Typography>
        </Box>
        <Box style={{ marginTop: '-60px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7661A4" fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,229.3C480,213,600,139,720,144C840,149,960,235,1080,272C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </Box>wsk]
      </Box>
    </Box>

  );
  return (
    <Grid Container>
      <Formik
        className={classes.root} style={{ marginRight: '10%' }}
        initialValues={{
          name: '',
          workplaceName: '',
          phoneNumber: '',
          email: '',
          subject: '',
          description: '',
          positionId: 3,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.workplaceName) {
            errors.workplaceName = 'Required';
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = 'Required';
          }
          if (!values.subject) {
            errors.subject = 'Required';
          }
          if (!values.description) {
            errors.description = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await fetch('http://localhost:3000/applications', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          const json = await res.json();
          console.log(json);
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
            <TextField
              label='الاسم الكامل'
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
              label='البريد الالكتروني'
              variant='outlined'
              className={classes.inputsStyle}
              required
              fullWidth
              name='email'
              id='email'
              autoComplete='current-email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <EmailIcon fontSize='small' color='primary' />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label='رقم الهاتف'
              variant='outlined'
              className={classes.inputsStyle}
              required
              fullWidth
              name='phoneNumber'
              id='phoneNumber'
              autoComplete='current-phoneNumber'
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <PhoneEnabledIcon fontSize='small' color='primary' />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label='مكان العمل'
              variant='outlined'
              className={classes.inputsStyle}
              required
              fullWidth
              name='workplaceName'
              id='workplaceName'
              value={values.workplaceName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.workplaceName && Boolean(errors.workplaceName)}
              helperText={touched.workplaceName && errors.workplaceName}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <BusinessCenterIcon fontSize='small' color='primary' />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label='عنوان البلاغ '
              variant='outlined'
              className={classes.inputsStyle}
              required
              fullWidth
              name='subject'
              id='subject'
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.subject && Boolean(errors.subject)}
              helperText={touched.subject && errors.subject}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <TextFieldsIcon fontSize='small' color='primary' />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label='تفاصيل البلاغ '
              multiline
              rows={4}
              variant='outlined'
              className={classes.inputsStyle}
              required
              fullWidth
              name='description'
              id='description'
              autoComplete='current-complainTitle'
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <ChatBubbleOutlineIcon fontSize='small' color='primary' />
                  </InputAdornment>
                ),
              }}
            />
            <Grid style={{ width: '100%', marginRight: '25%' }}>
              <Box boxShadow={2} className={classes.AddFilesContainer}>
                <label htmlFor='upload-photo'>
                  <input
                    style={{ display: 'none' }}
                    id='upload-photo'
                    name='upload-photo'
                    type='file'
                  />

                  <Typography align='center'>
                    {' '}
       من هنا حمل ما تريد من مستندات بما يخص البلاغ
      </Typography>
                  <Box
                    style={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem' }}
                  >
                    <Button component='span' className={classes.AddFilesButton}>
                      <GetAppIcon style={{ color: '#4455A7' }} />
                    </Button>
                  </Box>

                </label>
              </Box>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.buttonAdd}
              disabled={isSubmitting}
              onClick={handleOpen}
            >
              ارسال
      </Button>
          </form>
        )}
      </Formik>

      <Modal
        disableAutoFocus
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>


    </Grid>
  );
}
