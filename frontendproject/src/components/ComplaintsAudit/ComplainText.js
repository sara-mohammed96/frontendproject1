import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AttachmentIcon from "@material-ui/icons/Attachment";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "0.5rem",
    marginLeft: "1%",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  complainTitleStyle: {
    marginTop: "1rem",
    marginLeft: "2rem",
  },
});

export default function ComplainText({ application }) {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        className={classes.complainTitleStyle}>
        {application.subject}
      </Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom></Typography>

          <Typography variant="body2" component="p">
            {application.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
