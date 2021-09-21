import React, { useContext, useRef, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from "../Style";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Typography, Box, Modal } from "@material-ui/core";
import { UsersContext } from "../../state/userState/UserContext";
import { Formik } from "formik";
import { addComment } from "./Comments.service";

export default function AddingCommentSection({ applicationId, userId }) {
  const classes = useStyles();
  const { user, positions } = useContext(UsersContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box className={classes.container}>
      <Box className={classes.modalPaperMessage} p="6">
        <Box
          style={{
            width: "100%",

            padding: "1rem",
          }}>
          <Typography
            variant="h5"
            align="center"
            style={{ width: "80%", marginTop: "2rem", marginBottom: "4rem" }}>
            هل انت متاكد من انهاء الشكوى؟
          </Typography>
          <Button
            component="span"
            style={{
              display: "flex",
              borderRadius: 50,
              background: "linear-gradient(to right bottom, #4455A7, #6C54A2)",
              color: "white",
              width: "10rem",
              height: "3.5rem",
              marginRight: "2rem",
              marginTop: "1rem",
            }}>
            {" "}
            انهاء
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Formik
        className={classes.root}
        style={{ marginRight: "10%" }}
        initialValues={{
          commentBody: "",
          receiverPositionId: null,
        }}
        validate={(values) => {
          const errors = {};

          if (!values.commentBody) {
            errors.commentBody = "Required";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const ClonedValues = { ...values };
          if (open) {
            delete ClonedValues.receiverPositionId;
          }
          const { commentBody, receiverPositionId } = ClonedValues;
          await addComment(
            applicationId,
            commentBody,
            receiverPositionId,
            user
          );
          setSubmitting(false);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box style={{ display: "flex" }}>
              <Box m={2}>
                <TextField
                  id="body"
                  name="commentBody"
                  label="كتابة تهميش"
                  multiline
                  rows={5}
                  variant="outlined"
                  value={values.commentBody}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.commentBody && Boolean(errors.commentBody)}
                  helperText={touched.commentBody && errors.commentBody}
                />

                <input
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                />

                <Button
                  component="span"
                  style={{
                    display: "flex",
                    borderRadius: 50,
                    background:
                      "linear-gradient(to right bottom, #4455A7, #6C54A2)",
                    color: "white",
                    width: "10rem",
                    height: "3.5rem",
                    marginRight: "2rem",
                    marginTop: "1rem",
                  }}>
                  <label htmlFor="upload-photo">
                    <Typography> اضافة مرفق</Typography>
                  </label>
                </Button>
              </Box>

              <FormControl
                variant="filled"
                style={{ width: "10rem", margin: "1rem" }}>
                <InputLabel htmlFor="filled-Complaints-native-simple">
                  اختر المرسل اليه
                </InputLabel>
                <Select
                  name="receiverPositionId"
                  value={values.receiverPositionId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.receiverPositionId &&
                    Boolean(errors.receiverPositionId)
                  }>
                  {positions.map((position, i) => (
                    <option key={i} value={position.id}>
                      {position.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <Box style={{ width: "40%" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  style={{
                    borderRadius: 50,
                    background:
                      "linear-gradient(to right bottom, #4455A7, #6C54A2)",
                    color: "white",
                    width: "18rem",
                    height: "3rem",
                    marginTop: "1rem",
                    marginRight: "0.2rem",
                  }}>
                  <Typography> ارسال</Typography>
                </Button>
                <Button
                  component="span"
                  style={{
                    borderRadius: 50,
                    background:
                      "linear-gradient(to right bottom, #4455A7, #6C54A2)",
                    color: "white",
                    width: "18rem",
                    height: "3rem",
                    marginTop: "1rem",
                    marginRight: "0.2rem",
                  }}
                  onClick={() => window.print()}>
                  <Typography> طباعة الشكوى </Typography>
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    borderRadius: 50,
                    background:
                      "linear-gradient(to right bottom, #4455A7, #6C54A2)",
                    color: "white",
                    width: "18rem",
                    height: "3rem",
                    marginTop: "1rem",
                    marginRight: "0.2rem",
                  }}
                  onClick={handleOpen}>
                  <Typography>انهاء</Typography>
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>

      <Modal
        disableAutoFocus
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </Box>
  );
}
