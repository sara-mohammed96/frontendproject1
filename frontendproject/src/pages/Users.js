import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from '../components/Style';
import NavbarHeader from '../components/Navbar/Navbar'
import UsersTable from '../components/Users/UsersTable'
import AddUser from '../components/Users/AddUser'
export default function Users() {
    const classes = useStyles();


    return (
        <div>
            <NavbarHeader />
            <UsersTable />
            <AddUser />
        </div>
    );
}
