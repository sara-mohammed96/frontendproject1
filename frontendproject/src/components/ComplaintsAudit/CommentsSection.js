import React from "react";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function CommentsSection({ comments, application }) {
  let counter = 0;
  return (
    <div className="App">
      <Typography align="left" variant="h5">
        تعليقات
      </Typography>
      {comments.map((row) => (
        <div>
          <Paper
            style={{
              padding: "10px 20px",
              marginTop: "1rem",
              width: "50%",
              backgroundColor: "#f5f5f5",
            }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item></Grid>
              <Typography>{counter + 1} _</Typography>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <Typography variant="h5" align="left">
                  {application.name}
                </Typography>
                <Typography align="left">{row.body}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}
    </div>
  );
}
