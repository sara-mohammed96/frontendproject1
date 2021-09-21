import React, { useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography, Box, Container } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import useStyles from "../Style";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FollowUpComplain from "../../pages/FollowUpComplain";
import Image from "material-ui-image";
import img1 from "../../media/home_page.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
export default function LandingPageResponsive() {
  const classes = useStyles();
  let history = useHistory();
  const redirectToUserPage = () => {
    history.push("/userpage");
  };

  const redirectToLoginPage = () => {
    history.push("/login");
  };
  const redirectToFollowUpComplainPage = () => {
    history.push("/follow");
  };
  return (
    <Grid>
      <AppBar
        position="static"
        style={{ backgroundColor: "#fff", height: "4rem" }}>
        <Toolbar
          variant="dense"
          style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            style={{ color: "#4455A7", paddingTop: "0.5rem" }}>
            جامعة الموصل
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.ButtonsRoutesContainerResponsive}>
        <Typography align="center" variant="h4" style={{ color: "#fff" }}>
          نظام الشكاوي لجامعة الموصل
        </Typography>
        <Typography
          align="center"
          style={{
            color: "#fff",
            margin: "1rem 2rem",
          }}
          variant="h6">
          نظام متخصص لتقديم الشكاوي الخاصة بجامعة الموصل الحل الأمثل في وقت اسرع
          و سرية عالية{" "}
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.ButtonsRoutesStylesResponsive}
          onClick={redirectToUserPage}>
          <Typography variant="h5">تقديم شكوى</Typography>
        </Button>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.ButtonsRoutesStylesResponsive}
          onClick={redirectToLoginPage}>
          <Typography variant="h5"> تسجيل الدخول</Typography>
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.ButtonsRoutesStylesResponsive}
          onClick={redirectToFollowUpComplainPage}>
          <Typography variant="h5">تتبع الشكوى</Typography>
        </Button>
      </div>
    </Grid>
  );
}
