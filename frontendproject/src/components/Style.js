import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

        margin: theme.spacing(3),
        width: '46%',

    },
    AddFilesButton: {
        backgroundColor: '#F5F4FA',
        borderRadius: '50%',
        display: 'flex',
        height: '50px',
        width: '40px',
        boxShadow: theme.shadows[3],

    },
    AddFilesContainer: {
        backgroundColor: 'white',
        width: '35%',
        borderRadius: 5,
        padding: '1rem',


    },
    containerOfTheInstruction: {
        boxShadow: theme.shadows[5],
        height: '60%',
        position: 'absolute',
        width: '55%',
        backgroundColor: '#F5F4FA',
        borderRadius: '2%'
    },
    inputsStyle: {
        backgroundColor: '#fff',
        width: '70%',
        margin: '1rem',
        marginLeft: '5rem'
    },
    underline: {

        '&:before': {
            borderBottomColor: '#fff',

        },
        '&:after': {
            borderBottomColor: '#fff',

        },

        '&:hover': {
            borderBottomColor: '#fff',

        },

    },
    dateOfComplainStyle: {
        color: 'red'
    },
    buttonAdd: {
        borderRadius: 50,
        marginTop: '3rem',
        marginLeft: '9%',
        marginBottom: '2rem',
        width: '70%',
        height: '2.313rem',


    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginLeft: '10%'
    },
    modalPaper: {

        boxShadow: theme.shadows[5],
        height: '60%',
        position: 'absolute',
        width: '40%',
        backgroundColor: '#F5F4FA',
        borderRadius: '2%'

    },
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '8%',

    },
    root1: {
        minWidth: 100,
        '&:hover': {
            backgroundColor: 'red',

        },
    },
    cardStyle: {
        maxWidth: '70%',
        margin: '0.7rem',
        marginLeft: '15%'
    },
    AddUserButton: {
        borderRadius: 50,
        border: 0,
        background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
        color: 'white',

        marginTop: '3rem',
        width: '25%',


    },
    inputsInoStyle: {

        width: '80%',
        margin: '1rem'
    },
    modalPaperAddUser: {
        boxShadow: theme.shadows[5],
        height: '80%',
        position: 'absolute',
        width: '50%',
        backgroundColor: '#F5F4FA',
        borderRadius: '2%'
    },
    complainStyleTitle: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dateAndTitleContainerStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: '20px'
    },
    dateStyle: {
        color: '#bdbdbd'
    },
    complainsBody: {
        backgroundColor: '#F5F4FA',
    },
    readMoreButton: {
        borderRadius: 50,
        background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
        color: 'white',
        width: '5rem'

    },
    detailsBox: {
        border: '1px solid black'
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    fullNameStyle: {
        color: '#4455A7'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 400,
        marginLeft: "15%"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    ButtonsRoutesStyles: {
        width: '80%',
        borderRadius: 50,
        margin: '0.5rem',
        backgroundColor: "#FFFFFF",
        border: "#707070",
        color: "#6C54A2"
    },
    ButtonsRoutesContainer: {
        width: "40%",
        backgroundColor: "#6C54A2",
        paddingTop: "15%",
        paddingBottom: "20%"
    },
    LandingPageStyle: {
        backgroundColor: "#F5F4FA"
    },


}))
export default useStyles