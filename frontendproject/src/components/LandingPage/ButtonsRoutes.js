import React, { useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography, Box, Container } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import useStyles from "../Style";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FollowUpComplain from "../../pages/FollowUpComplain";
import Divider from "@material-ui/core/Divider";
export default function ButtonsRoutes() {
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
    <Grid className={classes.ButtonsRoutesContainer}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes.ButtonsRoutesStyles}
        onClick={redirectToUserPage}>
        <Typography variant="h6">تقديم شكوى</Typography>
      </Button>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes.ButtonsRoutesStyles}
        onClick={redirectToFollowUpComplainPage}>
        <Typography variant="h6">تتبع الشكوى</Typography>
      </Button>

      <Box style={{ display: "flex", marginRight: "20%" }}>
        <Typography
          align="Left"
          style={{ color: "#fff", marginTop: "10px", marginRight: "2rem" }}>
          هل انت موظف ؟
        </Typography>

        <Button
          type="submit"
          fullWidth
          onClick={redirectToLoginPage}
          style={{ color: "#fff", width: "25%" }}>
          <Typography variant="h6">سجل دخول</Typography>
        </Button>
      </Box>
    </Grid>
  );
}
