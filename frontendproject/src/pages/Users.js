import { React, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "../components/Style";
import NavbarHeader from "../components/Navbar/Navbar";
import AddUser from "../components/Users/AddUser";
import { getAllUsers } from "../components/Users/users.service";
import UsersTableShow from "../components/Users/UsersTableShow";
import GroupIcon from "@material-ui/icons/Group";

export default function Users() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => setUsers(users));
  }, []);
  return (
    <div>
      <NavbarHeader />
      <Typography variant="h5" align="center" style={{ margin: "1rem" }}>
        {" "}
        <GroupIcon color="primary" />
        الموظفين{" "}
      </Typography>
      <UsersTableShow users={users} />
      <AddUser />
    </div>
  );
}
