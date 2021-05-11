import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
import useStyles from '../Style';

export default function Form() {
    const classes = useStyles();

    return (

        <Grid className={classes.root} container style={{marginRight:'10%'}} >
            <TextField id="outlined-basic" label="الاسم الكامل" variant="outlined"
            className={classes.inputsStyle}
             InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <PersonIcon fontSize="small" color="primary" />
                    </InputAdornment>
                )
            }}
            />
            <TextField id="outlined-basic" label="البريد الالكتروني" variant="outlined"
            className={classes.inputsStyle}
             InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <EmailIcon fontSize="small" color="primary" />
                    </InputAdornment>
                )
            }} />
            <TextField id="outlined-basic" label="رقم الهاتف" variant="outlined"
            className={classes.inputsStyle}
             InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <PhoneEnabledIcon fontSize="small" color="primary" />
                    </InputAdornment>
                )
            }} />
            <TextField id="outlined-basic" label="المهنة/طالب" variant="outlined"
            className={classes.inputsStyle}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <BusinessCenterIcon fontSize="small" color="primary" />
                    </InputAdornment>
                )
            }} />
            <TextField id="outlined-basic" label="اسم الكلية " variant="outlined" 
            className={classes.inputsStyle}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <AccountBalanceIcon fontSize="small" color="primary" />
                    </InputAdornment>
                )
            }} />
            <TextField id="outlined-basic" label="القسم " variant="outlined"
            className={classes.inputsStyle}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <LocalLibraryIcon fontSize="small" color="primary" />
                    </InputAdornment>
                )
            }} />
            <TextField id="outlined-basic" label="عنوان البلاغ " variant="outlined"
            className={classes.inputsStyle}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <TextFieldsIcon fontSize="small" color="primary" />
                    </InputAdornment>
                )
            }} />
            <TextField id="outlined-basic" label="تفاصيل البلاغ " multiline
                rows={4} variant="outlined"
                className={classes.inputsStyle}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <ChatBubbleOutlineIcon fontSize="small" color="primary" />
                        </InputAdornment>
                    )
                }} />
        </Grid>

    );
}





