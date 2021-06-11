import { Typography, Box } from '@material-ui/core';
import { React, useState, useEffect, useContext } from 'react';
import { getApplications } from '../components/ComplaintsDisplay/complains.service';
import ComplainsTable from '../components/ComplaintsDisplay/complainsTable';

function ComplaintsDisplay() {
 const [applications, setApplications] = useState([]);

 useEffect(() => {
  getApplications().then((application) => setApplications(application));
 }, []);
 return (
  <div>
   <Box p={3}>
    <Typography variant='h4' align='center' color='primary'>
     الشكاوي
    </Typography>
   </Box>

   <ComplainsTable applications={applications} />
  </div>
 );
}

export default ComplaintsDisplay;
