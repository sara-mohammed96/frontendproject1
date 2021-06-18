import { IconButton, TableCell, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { getApplications, getApplicationById } from "./Comments.service";
import { useParams } from "react-router";

export default function CommentsTableRow({ body, id, application }) {
  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell style={{ width: 160 }} align="left"></TableCell>
        <TableCell style={{ width: 160 }} align="left">
          {application.subject}
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          {body}
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          {application.name}
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          {application.attachments}
        </TableCell>
      </TableRow>
    </>
  );
}
