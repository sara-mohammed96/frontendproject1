import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Container, Box, Grid, Modal, Hidden, Typography } from '@material-ui/core';
import useStyles from '../Style';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
function AddUserInfo(credentials) {
    return fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((responseJSON) => { return responseJSON })
        .then((data) => console.log(data.result.list))
}

function AddPosition() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [name, setFullName] = useState();
    const [password, setPassword] = useState();
    const [Email, setEmail] = useState();
    const [username, setPosition] = useState();
    const [state, setState] = React.useState({

        users: '',
    });



    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [checked, setChecked] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        const token = AddUserInfo({
            name,
            password,
            username
        });


    }

    const body = (
        <Box className={classes.container}>
            <Box className={classes.modalPaperAddUser} p='6'>
                <Box >
                    <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '1rem' }}>
                        <Typography variant='v5'>اضافة مستخدم </Typography>
                    </Box>
                    <Formik
                        className={classes.root} style={{ marginRight: '10%' }}
                        initialValues={{
                            name: '',
                            username: '',
                            password: '',
                            isActive: Boolean,

                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = 'Required';
                            }
                            if (!values.username) {
                                errors.username = 'Required';
                            }
                            if (!values.password) {
                                errors.password = 'Required';
                            }

                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            const res = await fetch('http://localhost:3000/users', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(values),
                            });

                            const json = await res.json();
                            console.log(json);
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label='الاسم '
                                    variant='outlined'
                                    className={classes.inputsStyle}
                                    required
                                    fullWidth
                                    name='name'
                                    id='name'
                                    autoComplete='current-name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <PersonIcon fontSize='small' color='primary' />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    label='اسم المستخدم '
                                    variant='outlined'
                                    className={classes.inputsStyle}
                                    required
                                    fullWidth
                                    name='username'
                                    id='username'
                                    autoComplete='current-username'
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.username && Boolean(errors.username)}
                                    helperText={touched.username && errors.username}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <EmailIcon fontSize='small' color='primary' />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    label='كلمة السر '
                                    variant='outlined'
                                    className={classes.inputsStyle}
                                    required
                                    fullWidth
                                    name='password'
                                    id='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}

                                />
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="age-native-simple">isActive</InputLabel>
                                    <Select
                                        name="isActive"
                                        value={values.isActive}
                                        onChange={handleChange}
                                        onBlur={handleBlur}

                                    >
                                        <option value={true}>True</option>
                                        <option value={false}>False</option>
                                    </Select>
                                </FormControl>

                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                    className={classes.buttonAdd}
                                    disabled={isSubmitting}
                                    onClick={handleOpen}
                                >
                                    ارسال
      </Button>
                            </form>
                        )}
                    </Formik>
                </Box>





            </Box>
        </Box>
    );

    return (
        <Container>

            <Grid item >
                <Box className={classes.buttonContainer}>
                    <Button onClick={handleOpen} variant="contained" component="span" style={{
                        borderRadius: 50, border: 0, background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)', color: 'white',

                        marginTop: '3rem',
                        width: '15%', marginRight: '38%'
                    }}>
                        <Typography>اضافة مستخدم </Typography>
                    </Button>
                </Box>
                <Modal
                    disableAutoFocus
                    disableEnforceFocus

                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    {body}
                </Modal>
            </Grid>

        </Container>
    );
}
export default (AddPosition);
