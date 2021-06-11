import { IconButton, TableCell, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory, useParams } from 'react-router-dom';

export default function ComplainsTableRow({ id, name, description, subject }) {
 let history = useHistory();
 const redirectToComplainPage = () => {
  history.push(`/application/${id}`);
 };

 const redirectToDetailsPage = () => {
  history.push('/details');
 };
 return (
  <>
   <TableRow>
    <TableCell style={{ width: 160 }} align='left'>
     {id}
    </TableCell>
    <TableCell style={{ width: 160 }} align='left'>
     {subject}
    </TableCell>
    <TableCell style={{ width: 160 }} align='left'>
     {description}
    </TableCell>
    <TableCell style={{ width: 160 }} align='left'>
     {name}
    </TableCell>
    <TableCell style={{ width: 160 }} align='left'>
     <IconButton onClick={redirectToComplainPage}>
      <EditIcon fontSize='small' color='primary' />
     </IconButton>
    </TableCell>
    <TableCell style={{ width: 160 }} align='left'>
     <IconButton onClick={redirectToDetailsPage}>
      <AccountCircleIcon fontSize='small' color='primary' />
     </IconButton>
    </TableCell>
   </TableRow>
  </>
 );
}
