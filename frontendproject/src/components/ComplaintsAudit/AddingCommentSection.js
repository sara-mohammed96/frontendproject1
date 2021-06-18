import React, { useContext, useRef } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from "../Style";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Typography, Box } from "@material-ui/core";
import { UsersContext } from "../../state/userState/UserContext";
import { Formik } from "formik";
import { addComment } from "./Comments.service";
import Print from "./Print";
export default function AddingCommentSection({ applicationId, userId }) {
  const classes = useStyles();
  const { users, user } = useContext(UsersContext);

  return (
    <Box>
      <Formik
        className={classes.root}
        style={{ marginRight: "10%" }}
        initialValues={{
          commentBody: "",
          receiverUserId: null,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.receiverUserId) {
            errors.receiverUserId = "Required";
          }
          if (!values.commentBody) {
            errors.commentBody = "Required";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const { commentBody, receiverUserId } = values;
          try {
            await addComment(applicationId, commentBody, receiverUserId, user);
            setSubmitting(false);
          } catch (error) {
            alert("لقد ارسلت تهميش مسبقا لا يمكن كتابة تهميش اخر ");
            console.error(error);
            setSubmitting(false);
          }
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
                  name="receiverUserId"
                  value={values.receiverUserId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.receiverUserId && Boolean(errors.receiverUserId)
                  }>
                  {users.map((user, i) => (
                    <option key={i} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
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
                    marginTop: "1rem",
                    background:
                      "linear-gradient(to right bottom, #4455A7, #6C54A2)",
                    color: "white",
                    width: "18rem",
                    height: "2.5rem",
                  }}
                  onClick={() => window.print()}>
                  <Typography> طباعة الشكوى </Typography>
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>

      <Box></Box>
    </Box>
  );
}
