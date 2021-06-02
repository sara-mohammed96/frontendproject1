
import HeaderNav from '../components/UserPage/HeaderNav';
import UserPageForm from '../components/UserPage/UserPageForm'
import BasicInfo from '../components/UserPage/BasicInfo';
import { Container, Box, Grid, Modal, Hidden, Typography } from '@material-ui/core';
function UserPage() {
  return (
    <Box style={{ backgroundColor: '#F5F4FA' }}>
      <HeaderNav />
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '10%', marginTop: '3rem' }}>
          <BasicInfo />
        </div>
        <Box>
          <UserPageForm />
        </Box>
      </div>
    </Box>
  );
}

export default UserPage;
