import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AttachmentIcon from "@material-ui/icons/Attachment";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ReadMoreReact from "read-more-react";
const useStyles = makeStyles({
  root: {
    margin: "0.5rem",
    padding: 2,
    width: "15rem",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  complainTitleStyle: {
    marginTop: "1rem",
    marginLeft: "1rem",
  },
});

export default function FollowUpComplainView() {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        className={classes.complainTitleStyle}>
        بلاغ عن تاخير راتب
      </Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" component="p" style={{ padding: "2px" }}>
            أرفع خطابي هذا وفيه شكوى لسعادتكم علّي أجد من ينصف ابني مما حصل له،
            فلا يخفى على الجميع حرصكم الشديد. وما تقومون به من جهود جبارة في
            سبيل إرساء مبادئ العدل وهذا ما اضطرني إلى كتابة معروض مؤثر لشخصكم
            الكريم وفقكم الله وبارك فيكم.
            <br />
          </Typography>
        </CardContent>
      </Card>
      <Button
        component="span"
        style={{
          display: "flex",
          borderRadius: 50,
          background: "linear-gradient(to right bottom, #4455A7, #6C54A2)",
          color: "white",
          width: "10rem",
          height: "3rem",
          marginTop: "1rem",
          marginRight: "2rem",
        }}>
        <Box style={{ display: "flex" }}>
          <Typography> مرفقات الشكوى</Typography>

          <AttachmentIcon
            fontSize="medium"
            color="white"
            style={{ marginRight: "0.5rem" }}
          />
        </Box>
      </Button>

      <Box style={{ width: "15rem", marginTop: "1rem", marginRight: "1rem" }}>
        <TextField
          size="medium"
          id="outlined-read-only-input"
          label="الاسم الكامل"
          defaultValue={"eman"}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <Box style={{ marginTop: "1rem" }}>
          <TextField
            size="medium"
            id="outlined-read-only-input"
            label="رقم الهاتف"
            defaultValue={"12343453342"}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Box>
        <Box style={{ marginTop: "1rem" }}>
          <TextField
            size="medium"
            id="outlined-read-only-input"
            label="البريد الالكتروني "
            defaultValue={"eman@gmail.com"}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Box>
        <Box style={{ marginTop: "1rem" }}>
          <TextField
            size="medium"
            id="outlined-read-only-input"
            label="مكان العمل"
            defaultValue={"رئاسة الجامعة"}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Box>
      </Box>
    </Box>
  );
}
