import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonsRoutes from '../components/LandingPage/ButtonsRoutes';
import useStyles from '../components/Style';
import { Link } from 'react-router-dom';
export default function LandingPage() {
    const classes = useStyles();

    return (
        <Grid className={classes.LandingPageStyle}>
            <ButtonsRoutes />
        </Grid>
    )
}