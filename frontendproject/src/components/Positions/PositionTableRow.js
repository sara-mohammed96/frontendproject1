import { IconButton, TableCell, TableRow } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import AddEditPosition from "./AddEditPosition";
import { getUserData } from "./positions.service";
export default function PositionTableRow({
  name,
  id,
  canReceiveApplication,
  userId,
  users,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [userName, setUserName] = useState("");
  async function getUserName(userId) {
    const takeTheData = await getUserData(userId);
    console.log(takeTheData.name);
    setUserName(takeTheData.name);
  }

  useEffect(() => {
    getUserName(userId);
  }, []);
  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell
          style={{ width: 160, paddingTop: "3px", paddingBottom: "3px" }}
          align="left">
          {name}
        </TableCell>
        <TableCell
          style={{ width: 160, paddingTop: "3px", paddingBottom: "3px" }}
          align="left">
          {userName}
        </TableCell>
        <TableCell
          style={{ width: 160, paddingTop: "3px", paddingBottom: "3px" }}
          align="left">
          {canReceiveApplication ? "yes" : "no"}
        </TableCell>
        <TableCell
          style={{ width: 160, paddingTop: "3px", paddingBottom: "3px" }}
          align="left">
          <IconButton onClick={handleOpen}>
            <EditIcon color="primary" />
          </IconButton>
        </TableCell>
      </TableRow>
      <AddEditPosition
        open={open}
        handleClose={handleClose}
        action={"edit"}
        users={users}
        positionId={id}
        positionName={name}
        canReceiveApplication={canReceiveApplication}
      />
    </>
  );
}
