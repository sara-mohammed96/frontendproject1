import { Typography, Box } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import { getApplications } from "../components/ComplaintsDisplay/complains.service";
import ComplainsTable from "../components/ComplaintsDisplay/complainsTable";
import NavbarHeader from "../components/Navbar/Navbar";

function ComplaintsDisplay() {
  const [applications, setApplications] = useState([]);
  //we took all the applications and sent it to component
  useEffect(() => {
    getApplications().then((application) => setApplications(application));
  }, []);
  return (
    <div>
      <NavbarHeader />
      <Box p={3}>
        <Typography variant="h4" align="center" color="primary">
          الشكاوي
        </Typography>
      </Box>

      <ComplainsTable applications={applications} />
    </div>
  );
}

export default ComplaintsDisplay;
