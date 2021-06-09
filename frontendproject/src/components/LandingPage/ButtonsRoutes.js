import React, { useCallback } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography, Box, Container } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import useStyles from '../Style';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export default function ButtonsRoutes() {
    const classes = useStyles();
    let history = useHistory();
    const redirectToUserPage = () => {
        history.push('/userpage')
    }

    const redirectToLoginPage = () => {
        history.push('/login')
    }
    return (
        <Grid className={classes.ButtonsRoutesContainer}>

            <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.ButtonsRoutesStyles}
                onClick={redirectToUserPage}

            >



                تقديم شكوى
                    </Button>

            <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.ButtonsRoutesStyles}
                onClick={redirectToLoginPage}
            >
                تسجيل الدخول
                    </Button>
            <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.ButtonsRoutesStyles}

            >
                تتبع الشكوى
                    </Button>
        </Grid>
    )
}