import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { ListAlt, Add, ContactMail, Help, Info, Home } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function TemporaryDrawerPatient({ mobileOpen, handleDrawerToggle }) {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'green', color: 'white' },
      }}
    >
      <IconButton onClick={handleDrawerToggle} sx={{ ml: 'auto', p: 2 }}>
        <CloseIcon sx={{ color: 'white' }} />
      </IconButton>
      <List>
      <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemIcon sx={{ color: 'white' }}><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemIcon sx={{ color: 'white' }}><ListAlt /></ListItemIcon>
          <ListItemText primary="Liste patient" />
        </ListItem>
        <ListItem button component={Link} to="/SavePatient" onClick={handleDrawerToggle}>
          <ListItemIcon sx={{ color: 'white' }}><Add /></ListItemIcon>
          <ListItemText primary="Ajouter patient" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
          <ListItemIcon sx={{ color: 'white' }}><ContactMail /></ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/help" onClick={handleDrawerToggle}>
          <ListItemIcon sx={{ color: 'white' }}><Help /></ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
          <ListItemIcon sx={{ color: 'white' }}><Info /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default TemporaryDrawerPatient;
