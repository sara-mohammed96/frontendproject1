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
                <TableCell style={{ width: 160 }} align='left'>
                    {name}
                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>
                    {users.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>
                    {canReceiveApplication ? 'yes' : 'no'}
                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>
                    <IconButton onClick={handleOpen}>
                        <EditIcon color="primary" />
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
