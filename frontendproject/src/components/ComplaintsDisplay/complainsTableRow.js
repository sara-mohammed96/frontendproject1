import { IconButton, TableCell, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory, useParams } from "react-router-dom";
import ReadMoreReact from "read-more-react";

export default function ComplainsTableRow({ id, name, description, subject }) {
  let history = useHistory();
  const redirectToComplainPage = () => {
    history.push(`/application/${id}`);
  };

  return (
    <>
      <TableRow>
        <TableCell
          style={{ width: 160, paddingTop: "7px", paddingBottom: "7px" }}
          align="left">
          {id}
        </TableCell>
        <TableCell
          style={{ width: 160, paddingTop: "7px", paddingBottom: "7px" }}
          align="left">
          {subject}
        </TableCell>
        <TableCell
          style={{ width: 160, paddingTop: "7px", paddingBottom: "7px" }}
          align="left">
          <ReadMoreReact
            text={description}
            min={10}
            ideal={20}
            max={20}
            readMoreText="قراءة المزيد"
          />
        </TableCell>
        <TableCell
          style={{ width: 160, paddingTop: "7px", paddingBottom: "7px" }}
          align="left">
          {name}
        </TableCell>
        <TableCell
          style={{ width: 160, paddingTop: "7px", paddingBottom: "7px" }}
          align="left">
          <IconButton onClick={redirectToComplainPage}>
            <EditIcon fontSize="small" color="primary" />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}
