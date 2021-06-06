import { IconButton, TableCell, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';


export default function CommentsTableRow({
    body,
    id,

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

                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>

                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    {body}
                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>

                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>

                </TableCell>
                <TableCell style={{ width: 160 }} align='Left'>
                    <IconButton onClick={handleOpen}>
                        <EditIcon />
                    </IconButton>
                </TableCell>
            </TableRow>

        </>
    );
}
