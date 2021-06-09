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

                <TableCell style={{ width: 160 }} align='Left'>
                    {id}
                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    {role}
                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    {name}
                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    {username}
                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    {isActive ? 'yes' : 'no'}
                </TableCell>

                <TableCell style={{ width: 160 }} align='Left'>
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
