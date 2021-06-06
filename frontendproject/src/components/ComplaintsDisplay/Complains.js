import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Navbar from '../Navbar/Navbar';
import { Box } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BorderColorSharpIcon from '@material-ui/icons/BorderColorSharp';
const columns = [
  { id: 'number', label: 'رقم الشكوى', minWidth: 20 },
  { id: 'labels', label: 'عنوان الشكوى', minWidth: 80 },
  {
    id: 'details',
    label: 'نص الشكوى',
    minWidth: 200,

    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'name',
    label: 'اسم صاحب الشكوى',
    minWidth: 80,


    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'BorderColorSharpIcon1',
    label: 'تدقيق',
  },
  {
    id: 'AccountCircleIcon1',
    label: 'معلومات صاحب الشكوى',
  }

];

function createData(number, labels, details, name, BorderColorSharpIcon1, AccountCircleIcon1) {
  return { number, labels, details, name, BorderColorSharpIcon1, AccountCircleIcon1 };
}

const rows = [
  createData(1,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(2,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(3,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(4,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(5,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(6,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(7,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(8,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(9,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(10,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(11,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(12,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(13,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(14,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(15,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(16,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(17,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(18,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
  createData(19,
    ' قضية مالية', 'الى السيد الدكتور رئيس الجامعة المحترم ارجو من حضرتكم التفضل بحل مشكلتي و النظر الى المرفقات في الطلب علما اني موظف في جامعة الموصل كلية التربية للعوم الانسانية'
    , 'احمد علي محمد',
    <InputAdornment position="end">
      <BorderColorSharpIcon fontSize="small" color="primary" />
    </InputAdornment>,
    <InputAdornment position="end">
      <AccountCircleIcon fontSize="small" color="primary" />
    </InputAdornment>),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 460,
  },
});

export default function Complains() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box >
      <Navbar />

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
