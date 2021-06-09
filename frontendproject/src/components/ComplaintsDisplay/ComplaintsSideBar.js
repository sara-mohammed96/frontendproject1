

import { React, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Drawer, Box } from "@material-ui/core";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// https://material-ui.com/style/icons/
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/HelpOutlined";
import NavLink from "./NavLink";
import ComplaintsHeader from './ComplaintsHeader'
import PersonIcon from '@material-ui/icons/Person';
// https://material-ui.com/demos/drawers/#full-height-navigation
const drawerWidth = 300;

const styles = theme => ({
    root: {
        display: "flex",

    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: 'red',
        padding: theme.spacing.unit * 3
    }
});

function ComplaintsSideBar(props) {
    const { classes, children } = props;

    return (
        <Box className={classes.rootSidebar}  >
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <Box >
                        <Box pl={2} pt={2}>
                            <Box style={{ display: 'flex' }}>
                                <Typography variant="h6" color="primary" className={classes.fullNameStyle}>الاسم الكامل</Typography>
                                <PersonIcon color="primary" />
                            </Box>
                            <Box style={{ border: '1px solid #bdbdbd', width: '90%', borderRadius: '5%' }}>
                                <Typography>sara</Typography>
                            </Box>
                        </Box>
                        <Box pl={2} pt={2}>
                            <Box style={{ display: 'flex' }}>
                                <Typography variant="h6" color="primary" className={classes.fullNameStyle}>البريد الالكتروني</Typography>
                                <PersonIcon color="primary" />
                            </Box>
                            <Box style={{ border: '1px solid #bdbdbd', width: '90%', borderRadius: '5%' }}>
                                <Typography>sara@gmail.com</Typography>
                            </Box>
                        </Box>
                        <Box pl={2} pt={2}>
                            <Box style={{ display: 'flex' }}>
                                <Typography variant="h6" color="primary" className={classes.fullNameStyle}>رقم الهاتف</Typography>
                                <PersonIcon color="primary" />
                            </Box>
                            <Box style={{ border: '1px solid #bdbdbd', width: '90%', borderRadius: '5%' }}>
                                <Typography>07725452345</Typography>
                            </Box>
                        </Box>
                        <Box pl={2} pt={2}>
                            <Box style={{ display: 'flex' }}>
                                <Typography variant="h6" color="primary" className={classes.fullNameStyle}>المهنة</Typography>
                                <PersonIcon color="primary" />
                            </Box>
                            <Box style={{ border: '1px solid #bdbdbd', width: '90%', borderRadius: '5%' }}>
                                <Typography>student</Typography>
                            </Box>
                        </Box>

                    </Box>
                </List>
            </Drawer>

        </Box>
    );
}



export default withStyles(styles)(ComplaintsSideBar);





