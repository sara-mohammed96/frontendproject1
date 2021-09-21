import { IconButton, TableCell, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { getApplications, getApplicationById } from "./Comments.service";
import { useParams } from "react-router";
import ReadMoreReact from "read-more-react";
import AttachmentIcon from "@material-ui/icons/Attachment";
export default function CommentsTableRow({ body, id, application, date }) {
  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell style={{ width: 160 }} align="left"></TableCell>
        <TableCell style={{ width: 160 }} align="left">
          <ReadMoreReact
            text={body}
            min={10}
            ideal={20}
            max={20}
            readMoreText="قراءة المزيد"
          />
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          رئيس الجامعة
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          مساعد
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          {date.slice(0, 10)}
        </TableCell>

        <TableCell style={{ width: 160 }} align="left">
          <AttachmentIcon
            fontSize="medium"
            color="white"
            style={{ marginRight: "0.5rem" }}
          />
        </TableCell>
      </TableRow>
    </>
  );
}
