import { Typography, Box } from '@material-ui/core';
import { React, useState, useEffect } from 'react';

import ComplaintsSideBar from './ComplaintsSideBar';
import ComplaintsDetails from './ComplaintsDetails'
function ComplainSeeMore() {

    return (
        <div>
            <Box style={{ display: 'flex', backgroundColor: '#F5F4FA' }}>
                <ComplaintsSideBar />
                <ComplaintsDetails />
            </Box>


        </div>
    );
}

export default ComplainSeeMore;
