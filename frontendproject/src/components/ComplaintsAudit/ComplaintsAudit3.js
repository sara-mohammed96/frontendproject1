import React from 'react';
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


const defaultProps = {
  bgcolor: 'background.paper',
  marginRight: '2rem',
  style: { background: '#F5F5F5', width: '30rem', height: '12rem' },
  borderColor: 'text.primary',

};
const defaultProps1 = {
  bgcolor: 'background.paper',
  marginRight: '2rem',
  style: { background: '#F5F5F5', width: '18rem', height: '7rem', marginTop: '1rem' },
  borderColor: 'text.primary',

};
const defaultProps2 = {
  bgcolor: 'background.paper',
  marginRight: '5rem',
  style: { background: '#F5F5F5', width: '15rem', height: '16rem' },
  borderColor: 'text.primary',

};


export default function ComplaintsAudit3() {
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

    <Box style={{ display: 'flex', marginTop: '1rem', border: '10rem' }} >
      <Box border={1}  {...defaultProps} >
        <div>
          <FormControl variant="filled" style={{ width: '30rem' }}>
            <InputLabel htmlFor="filled-Complaints-native-simple">اختر التهميش المناسب </InputLabel>
            <Select
              native
              value={state.Complaints}
              onChange={handleChange}
              inputProps={{
                name: 'Complaints',
                id: 'filled-Complaints-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option >  الى مسؤول شعبة الاتصالات يرجى اتخاذالاجراء المناسب</option>
              <option >  الى مسؤول شعبة البرمجيات يرجى اتخاذالاجراء المناسب</option>
              <option >  الى مسؤول شعبة الشبكات يرجى اتخاذالاجراء المناسب</option>
              <option >  تم الموافقة على الطلب المقدم وفق الامر الوزاري المرقم  1200</option>

            </Select>

          </FormControl>
          <TextField label="اكتب تهميش " multiline rows={3} style={{ width: '30rem', marginTop: '0.2rem' }} />

          <FormControlLabel
            value="start"
            control={<Checkbox color="primary" />}
            label="اخفاء التهميش عن صاحب الشكوى"
            labelPlacement="start"
            style={{ marginRight: '8rem' }}
          />


          <Box>
            <input
              style={{ display: 'none' }}
              id="upload-photo"
              name="upload-photo"
              type="file"
            />

            <Button component="span" style={{
              display: 'flex', borderRadius: 50,

              background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
              color: 'white',
              width: '25rem',
              height: '3rem', marginTop: '1rem', marginRight: '2rem'
            }}>
              <label htmlFor="upload-photo">
                <Box style={{ display: 'flex' }}>
                  <Typography > اضافة مرفق</Typography>

                  <GetAppIcon style={{
                    marginRight: '2rem'
                  }} />
                </Box>
              </label>
            </Button>

          </Box>
        </div>
      </Box>



      <Box>

        <FormControl variant="filled" style={{ width: '18rem' }}>
          <InputLabel htmlFor="filled-Complaints-native-simple">اختر المرسل اليه  </InputLabel>
          <Select
            native
            value={state.Complaints}
            onChange={handleChange}
            inputProps={{
              name: 'Complaints',
              id: 'filled-Complaints-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option >حمد علي احمد</option>
            <option >  علي عمر محمد</option>
            <option >  مصطفى اسماعيل </option>
            <option >    حسن معتصم الاحمدي</option>

          </Select>

        </FormControl>


        <Button component="span" style={{
          borderRadius: 50,

          background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
          color: 'white',
          width: '18rem',
          height: '3rem', marginTop: '1rem', marginRight: '0.2rem'
        }}>


          <Typography > ارسال</Typography>

        </Button>
        <Box border={1}  {...defaultProps1} >
          <Box >
            <Typography style={{ marginTop: '2rem', marginRight: '5rem' }}> هل تريد انهاء الطلب  </Typography>
            <Button component="span" style={{
              borderRadius: 50,

              background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
              color: 'white',
              width: '10rem',
              height: '3rem'
              , marginRight: '3.5rem'
            }}>


              <Typography > انهاء</Typography>

            </Button>
          </Box>
        </Box>
      </Box>

      <Box>



      </Box>
      <Box>
        <Box border={1}  {...defaultProps2} >
          <Box >
            <Typography style={{ marginTop: '3rem', marginRight: '5rem' }}> هل تريد الطباعة   </Typography>
            <Button component="span" style={{
              borderRadius: 50,
              marginTop: '1rem',
              background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
              color: 'white',
              width: '11rem',
              height: '2.5rem'
              , marginRight: '2.5rem'
            }}>


              <Typography > طباعة المرفقات</Typography>

            </Button>
            <Button component="span" style={{
              borderRadius: 50,
              marginTop: '1rem',
              background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
              color: 'white',
              width: '11rem',
              height: '2.5rem'
              , marginRight: '2.5rem'
            }}>


              <Typography > طباعة الشكوى مع المرفقات</Typography>

            </Button>
          </Box>
        </Box>
      </Box>
    </Box>

  )
}