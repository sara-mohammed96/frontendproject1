import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from '../Style';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AttachmentIcon from '@material-ui/icons/Attachment';

import { Typography, Box, Container } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { UsersContext } from '../../state/userState/UserContext';
import { Formik } from 'formik';
import { addComment } from './Comments.service';

const defaultProps = {
 bgcolor: 'background.paper',
 marginRight: '2rem',
 style: { background: '#F5F5F5', width: '30rem', height: '12rem' },
 borderColor: 'text.primary',
};
const defaultProps1 = {
 bgcolor: 'background.paper',
 marginRight: '2rem',
 style: {
  background: '#F5F5F5',
  width: '18rem',
  height: '7rem',
  marginTop: '1rem',
 },
 borderColor: 'text.primary',
};
const defaultProps2 = {
 bgcolor: 'background.paper',
 marginRight: '5rem',
 style: { background: '#F5F5F5', width: '15rem', height: '16rem' },
 borderColor: 'text.primary',
};

export default function AddingCommentSection({ applicationId }) {
 const classes = useStyles();
 const { users } = useContext(UsersContext);
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
  <Box style={{ display: 'flex', marginTop: '1rem', border: '10rem' }}>
   <Box border={1} {...defaultProps}>
    <Formik
     className={classes.root}
     style={{ marginRight: '10%' }}
     //  initialValues={
     //   {
     // name: positionName,
     // canReceiveApplication,
     // userId,
     // managerId,
     // }
     //  }
     //  validate={(values) => {
     //   const errors = {};
     //   if (!values.name) {
     //    errors.name = 'Required';
     //   }
     //   if (!values.canReceiveApplication) {
     //    errors.canReceiveApplication = 'Required';
     //   }
     //   return errors;
     //  }}
     onSubmit={async (values, { setSubmitting }) => {
      const { commentBody } = values;
      const comment = await addComment(applicationId, commentBody);
      //    const clonedValues = { ...values };
      //    clonedValues.canReceiveApplication = Boolean(
      //     parseInt(values.canReceiveApplication)
      //    );
      //    Object.keys(clonedValues).map((key) => {
      //     if (clonedValues[key] === null || clonedValues[key] === undefined) {
      //      delete clonedValues[key];
      //     }
      //    });
      //  await postingMethodsMap[action](clonedValues, positionId);
      setSubmitting(false);
      //  handleClose();
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
       <>
        <TextField
         label='اكتب تهميش '
         multiline
         rows={3}
         style={{ width: '30rem', marginTop: '0.2rem' }}
        />

        <FormControlLabel
         value='start'
         control={<Checkbox color='primary' />}
         label='اخفاء التهميش عن صاحب الشكوى'
         labelPlacement='start'
         style={{ marginRight: '8rem' }}
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
          width: '25rem',
          height: '3rem',
          marginTop: '1rem',
          marginRight: '2rem',
         }}
        >
         <label htmlFor='upload-photo'>
          <Typography> اضافة مرفق</Typography>

          <GetAppIcon
           style={{
            marginRight: '2rem',
           }}
          />
         </label>
        </Button>
        <FormControl variant='filled' style={{ width: '18rem' }}>
         <InputLabel htmlFor='filled-Complaints-native-simple'>
          اختر المرسل اليه
         </InputLabel>
         <Select
          name='userId'
          //  value={values.userId}
          //  onChange={handleChange}
          //  onBlur={handleBlur}
          //  error={touched.userId && Boolean(errors.userId)}
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
       </>
      </form>
     )}
    </Formik>
   </Box>
   <Box border={1} {...defaultProps1}>
    <Box>
     <Typography style={{ marginTop: '2rem', marginRight: '5rem' }}>
      هل تريد انهاء الطلب
     </Typography>
     <Button
      component='span'
      style={{
       borderRadius: 50,

       background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
       color: 'white',
       width: '10rem',
       height: '3rem',
       marginRight: '3.5rem',
      }}
     >
      <Typography> انهاء</Typography>
     </Button>
    </Box>
   </Box>
   <Box>
    <Box border={1} {...defaultProps2}>
     <Box>
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
   </Box>
  </Box>
 );
}
