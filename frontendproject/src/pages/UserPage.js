
import HeaderNav from '../components/UserPage/HeaderNav';
import Form from '../components/UserPage/Form'
import MyDropzone from '../components/UserPage/AddFiles'
import BasicInfo from '../components/UserPage/BasicInfo';
import SaveButtonPopUp from '../components/UserPage/SaveButtonPopUp';
import { Container, Box, Grid , Modal , Hidden ,Typography} from '@material-ui/core';
function UserPage() {
  return (
    <div style={{backgroundColor:'#F5F4FA'}}>
        
      <HeaderNav /> 
      <div style={{display:'flex'}}>
      <div style={{marginRight:'10%',marginTop:'3rem'}}>
            <BasicInfo />
        </div>
        <div style={{marginTop:'3rem'}}>
            <Form />
            <MyDropzone />
        </div>
        
        </div>
        <SaveButtonPopUp />
    </div>
  );
}

export default UserPage;
