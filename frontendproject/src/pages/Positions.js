import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import WorkIcon from '@material-ui/icons/Work';
import Typography from '@material-ui/core/Typography';
import useStyles from '../components/Style';
import NavbarHeader from '../components/Navbar/Navbar';
import PositionTable from '../components/Positions/PositionTable';
import AddPosition from '../components/Positions/AddPosition';
import { getAllUsers } from '../components/Users/users.service';
import { getAllPositions } from '../components/Positions/positions.service';

export default function Positions() {
    const classes = useStyles();
    const [positions, setPositions] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllPositions().then((positions) => setPositions(positions));
        getAllUsers().then((usersList) => setUsers(usersList));
    }, []);

    return (
        <div style={{backgroundColor:''}}>
            <NavbarHeader />
            <Typography variant='h5' align="center" style={{ margin: '2rem' }}> <WorkIcon color="primary" />المواقع الوظيفية </Typography>
            <PositionTable positions={positions} users={users} />
            <AddPosition users={users} />
        </div>
    );
}
