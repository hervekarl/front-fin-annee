import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../SideBar';
import FooterPage from '../../footer';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

class ListePatient extends React.Component {
    state = { patients: [] }

    componentDidMount() {
        axios.get("http://0.0.0.0:8000/")
            .then(res => {
                this.setState({
                    patients: res.data
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (
            <div className="App">
                
                <div className="container">

                    <div className="row pt-4">
                        <div className="col-12">
                            <div>

                                <table>
                                    <thead className='bg-secondary'>
                                        <tr>
                                            <th className=''>Photo</th>
                                            <th>Nom</th>
                                            <th>Prénom</th>
                                            <th className='d-none d-lg-table-cell'>Âge</th>
                                            <th>Sexe</th>
                                            <th className='d-none d-lg-table-cell'>Adresse</th>
                                            <th className='d-none d-lg-table-cell'>Voir</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.patients.map(patient => (
                                            <tr key={patient.id}>
                                                <td className=''>
                                                <Link to={`/Patient/${patient.id}/Detail`}><Avatar src={patient.photo_patient} alt={`${patient.nom_patient} ${patient.prenom_patient}`} sx={{ width: 50, height: 50 }} /></Link>
                                                </td>
                                                <td>{patient.nom_patient}</td>
                                                <td>{patient.prenom_patient}</td>
                                                <td className='d-none d-lg-table-cell'>{patient.age_patient}</td>
                                                <td>{patient.sexe_patient}</td>
                                                <td className='d-none d-lg-table-cell'>{patient.adresse_patient}</td>
                                                <td className='d-none d-lg-table-cell'><Link to={`/Patient/${patient.id}/Detail`}><button>Voir</button></Link></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <FooterPage /> */}
            </div>
        );
    }
}

export default ListePatient;
