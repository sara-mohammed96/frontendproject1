import { IconButton, TableCell, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
const complains = {
    title: 'بلاغ',
    name: 'sara',


}

export default function CommentsTableRow({
    body,
    id,

}) {

    return (
        <>
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell style={{ width: 160 }} align='left'>

                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>
                    {complains.title}
                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>
                    {body}
                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>
                    {complains.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align='left'>

                </TableCell>

            </TableRow>

        </>
    );
}
