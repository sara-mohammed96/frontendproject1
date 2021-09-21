import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, Modal, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Formik } from "formik";
import PersonIcon from "@material-ui/icons/Person";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { postingMethodsMap } from "./users.service";
import useStyles from "../Style";

export default function AddEditUser({
  open,
  handleClose,
  action,
  name = "",
  isActive = true,
  password = "",
  username = "",
  role = "",
  id,
}) {
  const classes = useStyles();

  return (
    <Modal
      disableAutoFocus
      disableEnforceFocus
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        marginRight: "25%",
        width: "100%",
        height: "42rem",
        marginTop: "1rem",
      }}>
      <Box className={classes.container}>
        <Box className={classes.modalPaperAddUser}>
          <Box>
            <Box
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                margin: "0.5rem",
              }}>
              <Typography variant="v5">اضافة مستخدم </Typography>
            </Box>
            <Formik
              className={classes.root}
              style={{ marginRight: "10%" }}
              initialValues={{
                name,
                username,
                password,
                isActive,
                role,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Required";
                }
                if (!values.username) {
                  errors.username = "Required";
                }
                if (!values.password) {
                  errors.password = "Required";
                }
                if (!values.isActive) {
                  errors.isActive = "Required";
                }
                if (!values.role) {
                  errors.role = "Required";
                }
                console.log(errors, values);
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                const clonedValues = { ...values };
                clonedValues.isActive = Boolean(parseInt(values.isActive));
                Object.keys(clonedValues).map((key) => {
                  if (
                    clonedValues[key] === null ||
                    clonedValues[key] === undefined
                  ) {
                    delete clonedValues[key];
                  }
                });
                await postingMethodsMap[action](clonedValues, id);
                setSubmitting(false);
                handleClose();
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
                  <TextField
                    label="الاسم"
                    variant="outlined"
                    className={classes.inputsStyle}
                    required
                    fullWidth
                    name="name"
                    id="name"
                    autoComplete="current-name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon fontSize="small" color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="اسم المستخدم "
                    variant="outlined"
                    className={classes.inputsStyle}
                    required
                    fullWidth
                    name="username"
                    id="username"
                    autoComplete="current-username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                  <TextField
                    label="كلمة السر "
                    variant="outlined"
                    className={classes.inputsStyle}
                    required
                    fullWidth
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">
                      isActive
                    </InputLabel>
                    <Select
                      native
                      required
                      name={"isActive"}
                      value={values.isActive}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.isActive && Boolean(errors.isActive)}>
                      <option value={1}>True</option>
                      <option value={0}>False</option>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">role</InputLabel>
                    <Select
                      native
                      required
                      name={"role"}
                      value={values.role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.role && Boolean(errors.role)}>
                      <option value={"user"}>user</option>
                      <option value={"admin"}>admin</option>
                    </Select>
                  </FormControl>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.buttonAdd}
                    disabled={isSubmitting}>
                    ارسال
                  </Button>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
