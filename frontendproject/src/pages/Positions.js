import { React, useState, useEffect } from "react";
import { Card, Box } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import Typography from "@material-ui/core/Typography";
import useStyles from "../components/Style";
import NavbarHeader from "../components/Navbar/Navbar";
import PositionTable from "../components/Positions/PositionTable";
import AddPosition from "../components/Positions/AddPosition";
import { getAllUsers } from "../components/Users/users.service";
import { getAllPositions } from "../components/Positions/positions.service";

export default function Positions() {
  const classes = useStyles();
  const [positions, setPositions] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllPositions().then((positions) => setPositions(positions));
    getAllUsers().then((usersList) => setUsers(usersList));
  }, []);

  return (
    <Box container style={{ backgroundColor: "#F5F4FA", height: "40rem" }}>
      <NavbarHeader />
      <Typography variant="h5" align="center" style={{ margin: "1rem" }}>
        {" "}
        <WorkIcon color="primary" />
        المواقع الوظيفية{" "}
      </Typography>
      <PositionTable positions={positions} users={users} />
      <AddPosition users={users} positions={positions} />
    </Box>
  );
}
