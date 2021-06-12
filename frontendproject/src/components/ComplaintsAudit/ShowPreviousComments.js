import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import CommentsTableRow from './CommentsTableRow';
import { Typography } from '@material-ui/core';
const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },

}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label='first page'
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label='previous page'
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='next page'
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='last page'
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
    table: {
        minWidth: 300,
    },
    headersStyle: {
        color: 'white'
    }
});

export default function ShowComments({ comments, application }) {
    const classes = useStyles2();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, comments.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper} style={{ width: '50rem' }}>
            <Table className={classes.table} aria-label='custom pagination table'>
                <TableBody>
                    <TableRow style={{ background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)' }}>
                        <TableCell style={{ width: 10 }} align='left'>
                            <Typography className={classes.headersStyle}>ترقيم</Typography>
                        </TableCell>
                        <TableCell style={{ width: 30 }} align='left'>
                            <Typography className={classes.headersStyle}>رمز الشكوى</Typography>
                        </TableCell>
                        <TableCell style={{ width: 30 }} align='left'>
                            <Typography className={classes.headersStyle}>عنوان الشكوى</Typography>
                        </TableCell>
                        <TableCell style={{ width: 30 }} align='left'>
                            <Typography className={classes.headersStyle}>نص التهميش</Typography>
                        </TableCell>
                        <TableCell style={{ width: 50 }} align='left'>
                            <Typography className={classes.headersStyle}> صاحب التهميش</Typography>
                        </TableCell>
                        <TableCell style={{ width: 30 }} align='left'>
                            <Typography className={classes.headersStyle}>المرفقات</Typography>
                        </TableCell>
                    </TableRow>
                    {(rowsPerPage > 0
                        ? comments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : comments
                    ).map((row) => (
                        <CommentsTableRow key={row.id} body={row.body} id={row.id} application={application} />
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={comments.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
