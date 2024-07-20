import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { ListAlt, Add, ContactMail, Help, Info, Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function Sidebar() {
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
        Patients
      </Typography>
      <List>
      <ListItem button component={Link} to="/">
          <ListItemIcon sx={{ color: 'white' }}><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon sx={{ color: 'white' }}><ListAlt /></ListItemIcon>
          <ListItemText primary="Liste patient" />
        </ListItem>
        <ListItem button component={Link} to="/add">
          <ListItemIcon sx={{ color: 'white' }}><Add /></ListItemIcon>
          <ListItemText primary="Ajouter patient" />
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

export default Sidebar;
