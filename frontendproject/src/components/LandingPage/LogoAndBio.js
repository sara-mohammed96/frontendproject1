import React from "react";
import Image from "material-ui-image";
import img1 from "../../media/home_page.png";
import { Typography, Box } from "@material-ui/core";
export default function LogoAndBio() {
  return (
    <div
      style={{
        width: "20rem",
        paddingRight: "15%",
        marginLeft: "15%",
        marginTop: "5%",
      }}>
      <Image src={img1} />
      <Typography align="center" variant="h5" style={{ color: "#6C54A2" }}>
        نظام الشكاوي لجامعة الموصل
      </Typography>
      <Typography align="center" style={{ color: "#707070" }}>
        هو نظام لاستقبال الشكاوى يضمن سهولة استلامها وتحويلها للجهات المختصة
        ومعالجتها، مع توفير آليات للردود و المحافظة على سرية معلومات الشكوى.
      </Typography>
    </div>
  );
}
