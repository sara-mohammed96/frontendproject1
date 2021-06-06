import { Typography, Box } from '@material-ui/core';
import { React, useState, useEffect } from 'react';
import { getApplications } from '../components/ComplaintsDisplay/complains.service';
import ComplainsTable from '../components/ComplaintsDisplay/complainsTable';
import ComplaintsSideBar from '../components/ComplaintsDisplay/ComplaintsSideBar';
import ComplaintsDetails from '../components/ComplaintsDisplay/ComplaintsDetails';
import ComplainSeeMore from '../components/ComplaintsDisplay/ComplainSeeMore'
function ComplaintsDisplay() {
    const [list, setList] = useState([]);
    const [applications, setApplications] = useState([])
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getApplications().then((application) => setApplications(application));
    }, []);
    //<ComplainsTable applications={applications} />
    return (
        <div>
            <Box p={3}>
                <Typography variant="h4" align="center" color="primary"> الشكاوي </Typography>
            </Box>

            <ComplainsTable applications={applications} />

        </div>
    );
}

export default ComplaintsDisplay;
