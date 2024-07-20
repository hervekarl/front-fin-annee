import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from '@mui/material';
import { ListAlt, Add, ContactMail, Help, Info, Home, TimeToLeave, TimeToLeaveOutlined, HolidayVillageRounded, HomeMax } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Calendar, Calendar2Date } from 'react-bootstrap-icons';


const SidePersonnel = () => {
    const drawerWidth = 240;
    return (
        <Drawer
            sx={{
                display: { xs: 'none', sm: 'block' },
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    bgcolor: 'green',
                    color: 'white',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Typography
                variant="h6"
                noWrap
                sx={{ p: 2 }}
            >
                Personnels
            </Typography>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon sx={{ color: 'white' }}><Home /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/personnel">
                    <ListItemIcon sx={{ color: 'white' }}><ListAlt /></ListItemIcon>
                    <ListItemText primary="Liste Personnels" />
                </ListItem>
                <ListItem button component={Link} to="/AjoutPersonnel">
                    <ListItemIcon sx={{ color: 'white' }}><Add /></ListItemIcon>
                    <ListItemText primary="Ajouter Personnel" />
                </ListItem>
                <ListItem button component={Link} to="/TimeTable">
                    <ListItemIcon sx={{ color: 'white' }}><Calendar2Date /></ListItemIcon>
                    <ListItemText primary="Emploie de temps" />
                </ListItem>
                <ListItem button component={Link} to="/contact">
                    <ListItemIcon sx={{ color: 'white' }}><ContactMail /></ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
                <ListItem button component={Link} to="/help">
                    <ListItemIcon sx={{ color: 'white' }}><Help /></ListItemIcon>
                    <ListItemText primary="Help" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemIcon sx={{ color: 'white' }}><Info /></ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SidePersonnel;

