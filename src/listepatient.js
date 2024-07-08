import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './SideBar';
import FooterPage from './footer';

class ListePatient extends React.Component {
    state = { patients: [], }
    componentDidMount() {
        let patient;
        axios.get("http://localhost:8001/")
            .then(res => {
                patient = res.data
                this.setState({
                    patients: patient
                });
            })
            .catch(err => { })
    }
    render() {

        return (
            <div className="App">
                <div className="row pt-4">
                    <div className="col-3"><Sidebar /></div>
                    <div className="col-9"><div className="bg-secondary">
                        <h2>Liste des patients</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Âge</th>
                                    <th>Sexe</th>
                                    <th>Adresse</th>
                                    <th>voir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.patients.map(patient => (
                                    <tr key={patient.id}>
                                        <td><img src={patient.photo_patient} alt={`Photo de ${patient.nom_patient} ${patient.prenom_patient}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
                                        <td>{patient.nom_patient}</td>
                                        <td>{patient.prenom_patient}</td>
                                        <td>{patient.age_patient}</td>
                                        <td>{patient.sexe_patient}</td>
                                        <td>{patient.adresse_patient}</td>
                                        <td><button><a href={patient.url}>Voir</a></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div></div>

                </div>
            </div>


        );
    };


}

export default ListePatient;
