import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import useStyles from "../Style";
import AddEditPosition from "./AddEditPosition";

function AddPosition({ users, positions }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Grid item>
        <Box className={classes.buttonContainer}>
          <Button
            onClick={handleOpen}
            variant="contained"
            component="span"
            style={{
              borderRadius: 50,
              border: 0,
              background: "linear-gradient(to right bottom, #4455A7, #6C54A2)",
              color: "white",
              marginTop: "1rem",
              width: "15%",
              marginRight: "38%",
            }}>
            <Typography>اضافة موقع وظيفي</Typography>
          </Button>
        </Box>
        <AddEditPosition
          open={open}
          handleClose={handleClose}
          action={"add"}
          users={users}
          positions={positions}
        />
      </Grid>
    </Container>
  );
}
export default AddPosition;
