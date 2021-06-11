import { React, useState, useEffect } from 'react';
import { Typography, Box, Container } from '@material-ui/core';
import ComplaintsAudit2 from './ComplaintsAudit2';
import ComplaintsAudit1 from './ComplaintsAudit1';
import ComplaintsAudit3 from './ComplaintsAudit3';
import Navbar from '../Navbar/Navbar';
import ShowPreviousComments from './ShowPreviousComments'
import { getAllPreviousComments } from './Comments.service'
import { getAllUsers } from './Comments.service'
import { getApplications } from './Comments.service'

export default function ComplaintsAudit() {
  const [list, setList] = useState([]);

  const [PreviousComments, setPreviousComments] = useState([]);
  const [applications, setApplications] = useState([])
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllPreviousComments().then((comments) => setPreviousComments(comments));
    getApplications().then((application) => setApplications(application));
    getAllUsers().then((usersList) => setUsers(usersList));
  }, []);
  console.log(PreviousComments)

  return (
    <Box>
      <Navbar />
      <Box style={{ display: 'flex' }}>


        <Box >
          <ComplaintsAudit1 />
        </Box>
        <Box>
          <Typography variant="h5" component="h2" gutterBottom>
            التهميشات السابقة
        </Typography>
          <ShowPreviousComments PreviousComments={PreviousComments} applications={applications} />
          <ComplaintsAudit3 />


        </Box>
      </Box>
    </Box>
  )

}