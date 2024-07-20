import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import ListePatient from './getPatient';

const initialPatients = [
  { name: 'John Doe' },
  { name: 'Jane Smith' },
  { name: 'Robert Johnson' },
];

function PatientList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState(initialPatients);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'fixed', top: 5, width: '100%', backgroundColor: 'white', zIndex: 1, padding: '10px' }}>
        
        <TextField
          label="Rechercher un patient"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h2>Liste des patients</h2>
      </div>
      <Box sx={{ mt: 12, overflowY: 'auto', flexGrow: 1 }}>
        <ListePatient/>
      </Box>
    </div>
  );
}

export default PatientList;
