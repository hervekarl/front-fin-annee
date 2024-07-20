import React, { useState } from 'react';
import { CssBaseline, Box, Container, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListeEmployer from './getEmploye';
import SidePersonnel from './SidePersonnel';
import TemporaryDrawerPersonnel from './TemporaireMenuPersonnel';

function AppPersonnel() {
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
            Personnels/Liste
          </Typography>
        </Toolbar>
      </AppBar>
      <SidePersonnel />
      <TemporaryDrawerPersonnel mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Container>
          <ListeEmployer />
        </Container>
      </Box>

    </Box>
  );
}

export default AppPersonnel;
