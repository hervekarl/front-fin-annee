import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Avatar, CssBaseline, Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './SidePatient';
import TemporaryDrawerPatient from './TemporaireMenuPatient';
import { Link } from 'react-router-dom';

function PatientDetail() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    fetch(`http://0.0.0.0:8000/Patient/${id}/Detail`)
      .then(response => response.json())
      .then(data => setPatient(data))
      .catch(error => console.error('Error fetching patient details:', error));
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

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
            Patients/Detail
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <TemporaryDrawerPatient mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6 col-md-6">
              <div className="card border-0">
                <div className="card-body">
                  <Container>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                      <Avatar src={patient.photo_patient} alt={`${patient.nom_patient} ${patient.prenom_patient}`} sx={{ width: 100, height: 100, mr: 4 }} />
                      <Typography variant="h4">{`${patient.nom_patient} ${patient.prenom_patient}`}</Typography>
                    </Box>
                    <Typography variant="body1"><strong className='text-dark'>Date de naissance:</strong> {patient.date_nais_pat}</Typography>
                    <Typography variant="body1"><strong className='text-dark'>Âge:</strong> {patient.age_patient}</Typography>
                    <Typography variant="body1"><strong className='text-dark'>Sexe:</strong> {patient.sexe_patient}</Typography>
                    <Typography variant="body1"><strong className='text-dark'>Adresse:</strong> {patient.adresse_patient}</Typography>
                    <Typography variant="body1"><strong className='text-dark'>Téléphone:</strong> {patient.tel_patient}</Typography>
                  </Container>
                </div>
                <div className="card-footer text-center pt-5 border-0">
                  <div className="container">
                    <div className="row">
                      <div className="col-6"><Link to={`Patient/${patient.id}/Delete`}><div className='btn btn-danger'>SUPPRIMER</div></Link></div>
                      <div className="col-6"><Link to={`Patient/${patient.id}/Update`}><div className='btn btn-primary'>MODIFIER</div></Link></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>

    </Box>
  );
}

export default PatientDetail;
