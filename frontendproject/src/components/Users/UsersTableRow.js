import { IconButton, TableCell, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import AddEditUser from './AddEditUser';

export default function UsersTableRow({
    key,
    name,
    username,
    id,
    role,
    isActive,
    password
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

                <TableCell style={{ width: 160 }} align='left'>
                    {id}
                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>
                    {role}
                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>
                    {name}
                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>
                    {username}
                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>
                    {isActive ? 'yes' : 'no'}
                </TableCell>

                <TableCell style={{ width: 160 }} align='left'>
                    <IconButton onClick={handleOpen}>
                        <EditIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
            <AddEditUser
                open={open}
                handleClose={handleClose}
                id={id}
                action={'edit'}
                name={name}
                isActive={isActive}
                password={password}
                username={username}

            />
        </>
    );
}
