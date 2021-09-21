import React, { useContext } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "../components/Style";
import { Formik } from "formik";
import { signin } from "../common/authService";
import { UsersContext } from "../state/userState/UserContext";
import { useHistory } from "react-router-dom";
import HeaderNav from "../components/UserPage/HeaderNav";
export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();

  const { setIsAuthenticated, setUser } = useContext(UsersContext);

  return (
    <div style={{ backgroundColor: "#F5F4FA", height: "70rem" }}>
      <HeaderNav />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            تسجيل دخول
          </Typography>
          <Formik
            initialValues={{ username: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = "يجب ادخاله";
              }
              if (!values.password) {
                errors.password = "يجب ادخاله";
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              const { username, password } = values;
              try {
                const user = await signin(username, password);
                if (user) {
                  setIsAuthenticated(true);
                  setUser(user);
                  history.push("./applications");
                }
                setSubmitting(false);
              } catch (error) {
                alert("الرجاء التاكد من اسم المستخدم او كلمة السر");
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
              /* and other goodies */
            }) => (
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  id="username"
                  label="اسم المستخدم"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="كلمة السر"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={isSubmitting}>
                  تسجيل الدخول
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
}
