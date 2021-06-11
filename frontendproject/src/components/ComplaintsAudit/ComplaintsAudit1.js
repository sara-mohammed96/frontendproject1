import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AttachmentIcon from '@material-ui/icons/Attachment';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
  root: {
    minWidth: 200,
    margin: '1rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function ComplaintsAudit1() {
  const classes = useStyles();
  const nam = 'sara'
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Box>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            نص المشكلة
        </Typography>

          <Typography variant="body2" component="p">
            well meaning and kindly.
          <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">اقرا المزيد</Button>
        </CardActions>
      </Card>
      <Button component="span" style={{
        display: 'flex', borderRadius: 50,

        background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
        color: 'white',
        width: '10rem',
        height: '3rem', marginTop: '1rem', marginRight: '2rem'
      }}>

        <Box style={{ display: 'flex' }}>
          <Typography > مرفقات الشكوى</Typography>

          <AttachmentIcon fontSize="medium" color="white" style={{ marginRight: '0.5rem' }} />


        </Box>

      </Button>

      <Box style={{ width: '15rem', marginTop: '1rem', marginRight: '1rem' }}>
        <TextField
          size="medium"
          id="outlined-read-only-input"
          label="الاسم الكامل"
          defaultValue='sslsl'
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <Box style={{ marginTop: '1rem' }} >
          <TextField
            size="medium"
            id="outlined-read-only-input"
            label="رقم الهاتف"
            defaultValue="07707707707"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Box>
        <Box style={{ marginTop: '1rem' }}>
          <TextField
            size="medium"
            id="outlined-read-only-input"
            label="رقم الهوية"
            defaultValue="1234567"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Box>
        <Box style={{ marginTop: '1rem' }}>
          <TextField
            size="medium"
            id="outlined-read-only-input"
            label="البريد الالكتروني "
            defaultValue="aabbbcccso@univmosul.com"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Box>
        <Box style={{ marginTop: '1rem' }}>
          <TextField
            size="medium"
            id="outlined-read-only-input"
            label="مكان العمل"
            defaultValue="موظف حسابات جامعة الموصل"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Box>
      </Box>
    </Box>
  );

}
