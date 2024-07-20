import { CssBaseline, Box, Container, AppBar, Toolbar, IconButton, Typography, Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListeEmployer from './getEmploye';
import SidePersonnel from './SidePersonnel';
import TemporaryDrawerPersonnel from './TemporaireMenuPersonnel';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DetailPersonnel() {
    const { id } = useParams();
    const [personnel, setPersonnel] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    useEffect(() => {
        fetch(`http://0.0.0.0:8001/Employer/${id}/Detail`)
            .then(response => response.json())
            .then(data => setPersonnel(data))
            .catch(error => console.error('Error fetching personnel details:', error));
    }, [id]);

    if (!personnel) {
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
                        Personnels/Detail
                    </Typography>
                </Toolbar>
            </AppBar>
            <SidePersonnel />
            <TemporaryDrawerPersonnel mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-6 col-md-6">
                            <div className="card border-0">
                                <div className="card-body">
                                    <Container>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                            <Avatar src={personnel.photo_employer} alt={`${personnel.nom_employer} ${personnel.prenom_employer}`} sx={{ width: 100, height: 100, mr: 4 }} />
                                            <Typography variant="h4">{`${personnel.nom_employer} ${personnel.prenom_employer}`}</Typography>
                                        </Box>
                                        <Typography variant="body1"><strong className='text-dark'>Date de naissance:</strong> {personnel.date_nais_pat}</Typography>
                                        <Typography variant="body1"><strong className='text-dark'>Âge:</strong> {personnel.age_employer}</Typography>
                                        <Typography variant="body1"><strong className='text-dark'>Sexe:</strong> {personnel.sexe_employer}</Typography>
                                        <Typography variant="body1"><strong className='text-dark'>Adresse:</strong> {personnel.adresse_employer}</Typography>
                                        <Typography variant="body1"><strong className='text-dark'>Téléphone:</strong> {personnel.tel_employer}</Typography>
                                        <Typography variant="body1"><strong className='text-dark'>Spécialité:</strong> {personnel.specialite}</Typography>
                                        <Typography variant="body1"><strong className='text-dark'>Service:</strong> {personnel.service}</Typography>


                                    </Container>

                                </div>
                                <div className="card-footer text-center pt-5 border-0">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6"><Link to={`Personnel/${personnel.id}/Delete`}><div className='btn btn-danger'>SUPPRIMER</div></Link></div>
                                            <div className="col-6"><Link to={`Personnel/${personnel.id}/Update`}><div className='btn btn-primary'>MODIFIER</div></Link></div>
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

export default DetailPersonnel;
