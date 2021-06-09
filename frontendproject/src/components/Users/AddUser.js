import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Container, Box, Grid, Typography } from '@material-ui/core';
import useStyles from '../Style';
import AddEditUser from './AddEditUser';

function AddPosition({ users }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Grid item>
        <Box className={classes.buttonContainer}>
          <Button
            onClick={handleOpen}
            variant='contained'
            component='span'
            style={{
              borderRadius: 50,
              border: 0,
              background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
              color: 'white',

              marginTop: '3rem',
              width: '15%',
              marginRight: '38%',
            }}
          >
            <Typography>اضافة مستخدم </Typography>
          </Button>
        </Box>
        <AddEditUser
          open={open}
          handleClose={handleClose}
          action={'add'}

        />
      </Grid>
    </Container>
  );
}
export default AddPosition;
