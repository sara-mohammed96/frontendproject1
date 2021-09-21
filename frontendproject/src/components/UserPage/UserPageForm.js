import { React, useState, useEffect, useMemo } from "react";
import {
  TextField,
  Modal,
  InputAdornment,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { DropzoneDialogBase } from "material-ui-dropzone";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import useStyles from "../Style";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import TextFieldsIcon from "@material-ui/icons/TextFields";
import { httpRequest } from "../../common/apiServer";

//import AudioTrack from '@material-ui/icons/AudioTrack';
import SpeakerGroupIcon from "@material-ui/icons/SpeakerGroup";

import { useDropzone } from "react-dropzone";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "قصير جدا!")
    .max(50, "طويل جدا!")
    .required("يجب كتابته"),
  email: Yup.string()
    .email("يرجى كتابة بريد الكتروني متوفر")
    .required("يجب كتابته"),
  workplaceName: Yup.string()
    .min(3, "قصير جدا!")
    .max(50, "طويل جدا!")
    .required("يجب كتابته"),
  phoneNumber: Yup.string()
    .min(11, "قصير جدا!")
    .max(15, "طويل جدا!")
    .required("يجب كتابته"),
  subject: Yup.string()
    .min(11, "قصير جدا!")
    .max(100, "طويل جدا!")
    .required("يجب كتابته"),
  description: Yup.string().required("يجب كتابته"),
  idNumber: Yup.string().required("يجب كتابته"),
});

export default function UserPageForm() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box className={classes.container}>
      <Box className={classes.modalPaper} p="6">
        <Box
          style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <CheckCircleIcon
            style={{ width: "10rem", height: "10rem", color: "#6C54A2" }}
          />
        </Box>
        <Box
          style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography variant="v5">تم تسجيل البلاغ</Typography>
        </Box>
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
          }}>
          <Typography style={{ width: "80%" }}>
            رقم طلب البلاغ الخاص بك هو 10921 نسخة من طلب البلاغ تم ارساله الى
            البريد الالكتروني يرجى الاحتفاظ برقم الطلب فهو الطريقة الوحيدة لتتبع
            طلبك
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const [goOpen, setGoOpen] = useState(false);
  const [fileObjects, setFileObjects] = useState([]);
  const dialogTitle = () => (
    <>
      <span>Upload file</span>
      <IconButton
        style={{ right: "12px", top: "8px", position: "absolute" }}
        onClick={() => setGoOpen(false)}>
        <CloseIcon />
      </IconButton>
    </>
  );
  return (
    <div>
      <Formik
        className={classes.root}
        style={{ marginRight: "10%" }}
        initialValues={{
          name: "",
          workplaceName: "",
          phoneNumber: "",
          email: "",
          subject: "",
          description: "",
          positionId: 48,
          attachments: [],
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const isWithHeaders = false;
          console.log(values);
          await httpRequest("applications", values, "POST", isWithHeaders);
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
          <Form onSubmit={handleSubmit}>
            <TextField
              label="الاسم الكامل"
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
              label="البريد الالكتروني"
              variant="outlined"
              className={classes.inputsStyle}
              required
              fullWidth
              name="email"
              id="email"
              autoComplete="current-email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon fontSize="small" color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="رقم الهاتف"
              variant="outlined"
              className={classes.inputsStyle}
              required
              fullWidth
              name="phoneNumber"
              id="phoneNumber"
              autoComplete="current-phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PhoneEnabledIcon fontSize="small" color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="رقم الهوية"
              variant="outlined"
              className={classes.inputsStyle}
              required
              fullWidth
              name="idNumber"
              id="idNumber"
              value={values.idNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.idNumber && Boolean(errors.idNumber)}
              helperText={touched.idNumber && errors.idNumber}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon fontSize="small" color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "5rem" }}
              onClick={() => setGoOpen(true)}>
              اضافة صورة الهوية
            </Button>
            <TextField
              label="مكان العمل"
              variant="outlined"
              className={classes.inputsStyle}
              required
              fullWidth
              name="workplaceName"
              id="workplaceName"
              value={values.workplaceName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.workplaceName && Boolean(errors.workplaceName)}
              helperText={touched.workplaceName && errors.workplaceName}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <BusinessCenterIcon fontSize="small" color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="عنوان البلاغ "
              variant="outlined"
              className={classes.inputsStyle}
              required
              fullWidth
              name="subject"
              id="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.subject && Boolean(errors.subject)}
              helperText={touched.subject && errors.subject}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <TextFieldsIcon fontSize="small" color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="تفاصيل البلاغ "
              multiline
              rows={4}
              variant="outlined"
              className={classes.inputsStyle}
              required
              fullWidth
              name="description"
              id="description"
              autoComplete="current-complainTitle"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ChatBubbleOutlineIcon fontSize="small" color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "5rem" }}
                onClick={() => setGoOpen(true)}>
                اضافة مرفقات
              </Button>

              <DropzoneDialogBase
                dialogTitle={dialogTitle()}
                acceptedFiles={["image/*"]}
                fileObjects={fileObjects}
                cancelButtonText={"cancel"}
                submitButtonText={"submit"}
                maxFileSize={5000000}
                open={goOpen}
                onAdd={(newFileObjs) => {
                  console.log("onAdd", newFileObjs);
                  setFileObjects([].concat(fileObjects, newFileObjs));
                }}
                onDelete={(deleteFileObj) => {
                  console.log("onDelete", deleteFileObj);
                }}
                onClose={() => setGoOpen(false)}
                onSave={() => {
                  console.log("onSave", fileObjects);
                  setGoOpen(false);
                }}
                showPreviews={true}
                showFileNamesInPreview={true}
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.buttonAdd}
              disabled={isSubmitting}
              onClick={handleOpen}>
              ارسال
            </Button>
          </Form>
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
    </div>
  );
}
