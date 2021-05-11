import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="البريد الالكتروني " />
          </Grid>
        </Grid>
        <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <VpnKeySharpIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="كلمة المرور " />
          </Grid>
        </Grid>
      </div>
      </div>

  );
}