import { IconButton, TableCell, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
export default function ComplainsTableRow({
    id,
    name,
    description,
    subject,

}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    let history = useHistory();
    const redirectToCommentsPage = () => {
        history.push('/comments')
    }

    const redirectToDetailsPage = () => {
        history.push('/details')
    }
    return (
        <>
            <TableRow>

                <TableCell style={{ width: 160 }} align='Left'>
                    {id}
                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    {subject}
                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    {description}
                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    {name}
                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    <IconButton onClick={redirectToCommentsPage}>
                        <EditIcon fontSize="small" color="primary" />
                    </IconButton>
                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    <IconButton onClick={redirectToDetailsPage}>
                        <AccountCircleIcon fontSize="small" color="primary" />
                    </IconButton>
                </TableCell>
            </TableRow>

        </>
    );
}
