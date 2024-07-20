import React, { useState } from 'react';
import { CssBaseline, Box, Container, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './SidePatient';
import PatientList from './ListePat';
import TemporaryDrawerPatient from './TemporaireMenuPatient';
import ListePatient from './getPatient';

function AppPatient() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'green' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap >
            Patients/Liste
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <TemporaryDrawerPatient mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Container>
          <ListePatient />
        </Container>
      </Box>

    </Box>
  );
}

export default AppPatient;
