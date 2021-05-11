import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '46%',

        },

    },
    AddFilesButton:{
        backgroundColor:'#F5F4FA',
        borderRadius: '50%',
        display:'flex',
        height:'50px',
        width:'40px',
        boxShadow: theme.shadows[3],
        
    },
    AddFilesContainer:{
backgroundColor:'white',
width:'35%',
borderRadius: 5,
padding:'1rem',


    },
    containerOfTheInstruction:{
        boxShadow: theme.shadows[5],
        height: '60%',
        position: 'absolute',
        width: '55%',
        backgroundColor:'#F5F4FA',
       borderRadius:'2%'
    },
    inputsStyle:{
        backgroundColor:'#fff',
        width:'70%'
    },
    underline:{
       
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
    dateOfComplainStyle:{
color:'red'
    },
    buttonAdd: {
        borderRadius: 50,
        border: 0,
        background: 'linear-gradient(to right bottom, #4455A7, #6C54A2)',
        color: 'white',
        fontFamily: "Dubai-Regular",
        marginTop: '3rem',
        width:'15%',
        height:'2.313rem',
       
        
    },
    buttonContainer:{
        display:'flex',
        justifyContent:'center',
        width:'100%',
        marginLeft:'10%'
    },
    modalPaper: {

        boxShadow: theme.shadows[5],
        height: '60%',
        position: 'absolute',
        width: '40%',
        backgroundColor:'#F5F4FA',
       borderRadius:'2%'

    },
    container:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        marginTop:'8%',
        
    },
    root1: {
        minWidth: 100,
        '&:hover': {
            backgroundColor: 'red',
            
        },
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      }
}))
export default useStyles