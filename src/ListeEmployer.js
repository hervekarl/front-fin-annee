import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './SideBar';
import FooterPage from './footer';
import { emphasize } from '@mui/material';

class ListeEmployer extends React.Component {
    state = { employes: [], }
    componentDidMount() {
        let employe;
        axios.get("http://127.0.0.1:8002/")
            .then(res => {
                employe = res.data
                this.setState({
                    employes: employe
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
                        <h2>Liste des employer</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Sexe</th>
                                    <th>Spécialité</th>
                                    <th>Adresse</th>
                                    <th>Service</th>
                                    <th>Voir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employes.map(employe => (
                                    <tr key={employe.id}>
                                        <td>{employe.nom_employer}</td>
                                        <td>{employe.prenom_employer}</td>
                                        <td>{employe.sexe_employer}</td>
                                        <td>{employe.specialite}</td>
                                        <td>{employe.adresse_employer}</td>
                                        <td>{employe.service}</td>
                                        <td><button><a href={employe.url}>Voir</a></button></td>



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

export default ListeEmployer;
