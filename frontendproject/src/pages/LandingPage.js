import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonsRoutes from '../components/LandingPage/ButtonsRoutes';
import useStyles from '../components/Style';
import LogoAndBio from '../components/LandingPage/LogoAndBio'
import { Link } from 'react-router-dom';
import NavbarLandingPage from '../components/LandingPage/NavbarLandingPage'
export default function LandingPage() {
    const classes = useStyles();

    return (
        <div>
            <NavbarLandingPage />
            <Grid className={classes.LandingPageStyle}>

                <LogoAndBio />
                <ButtonsRoutes />
            </Grid>
        </div>
    )
}