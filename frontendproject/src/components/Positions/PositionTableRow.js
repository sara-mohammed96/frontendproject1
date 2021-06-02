import { IconButton, TableCell, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import AddEditPosition from './AddEditPosition';

export default function PositionTableRow({
 name,
 id,
 canReceiveApplication,
 users,
}) {
 const [open, setOpen] = useState(false);
 const handleOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 return (
  <>
   <TableRow>
    <TableCell>{id}</TableCell>
    <TableCell style={{ width: 160 }} align='Left'>
     {name}
    </TableCell>
    <TableCell style={{ width: 160 }} align='Left'>
     {name}
    </TableCell>
    <TableCell style={{ width: 160 }} align='Left'>
     {canReceiveApplication ? 'yes' : 'no'}
    </TableCell>
    <TableCell style={{ width: 160 }} align='Left'>
     <IconButton onClick={handleOpen}>
      <EditIcon />
     </IconButton>
    </TableCell>
   </TableRow>
   <AddEditPosition
    open={open}
    handleClose={handleClose}
    action={'edit'}
    users={users}
    positionId={id}
    positionName={name}
    canReceiveApplication={canReceiveApplication}
    // you should pass the user and the manager
   />
  </>
 );
}
