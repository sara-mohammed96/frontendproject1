import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from '../components/Style';
import NavbarHeader from '../components/Navbar/Navbar';
import UsersTable from '../components/Users/UsersTable';
import AddUser from '../components/Users/AddUser';
import { getAllUsers } from '../components/Users/users.service';
export default function Users() {
 const classes = useStyles();
 const [users, setUsers] = useState([]);

 useEffect(() => {
  getAllUsers().then((usersList) => setUsers(usersList));
 }, []);
 return (
  <div>
   <NavbarHeader />
   <UsersTable users={users} />
   <AddUser />
  </div>
 );
}
