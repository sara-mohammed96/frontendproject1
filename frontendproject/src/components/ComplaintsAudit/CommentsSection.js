import React from "react";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export default function CommentsSection({ comments, application }) {
  return (
    <div style={{ padding: 14 }} className="App">
      <h1>تعليقات</h1>
      {comments.map((row) => (
        <div>
          <Paper style={{ padding: "20px 20px", marginTop: "1rem" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={imgLink} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <Typography variant="h5" align="left">
                  Michel Michel
                </Typography>
                <Typography align="left">{row.body}</Typography>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted 1 minute ago
                </p>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}
    </div>
  );
}
