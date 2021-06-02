import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from '../components/Style';
import NavbarHeader from '../components/Navbar/Navbar'
import AddUser from '../components/Accounts/AddUser'
import PositionTable from '../components/Positions/PositionTable'
import AddPosition from '../components/Positions/AddPosition'
export default function Positions() {
    const classes = useStyles();
    const [profilesData, setProfilesData] = useState([]);

    fetch('http://localhost:3000/positions')
        .then((response) => response.json())
        .then((responseJSON) => { return responseJSON })
        .then((data) => (data.result))
        .then((data) => {
            setProfilesData(data.list)
            console.log(setProfilesData)
        })


    return (
        <div>
            <NavbarHeader />
            <PositionTable />
            <AddPosition />
        </div>
    );
}
