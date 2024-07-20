import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../SideBar';
import FooterPage from '../../footer';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

class ListeEmployer extends React.Component {
    state = { employes: [], }
    componentDidMount() {
        let employe;
        axios.get("http://0.0.0.0:8001/")
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
                    <div className="col-6"><div className="bg-secondary">
                        <h2>Liste des employer</h2>
                        <table>
                            <thead>

                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div></div>

                </div>

                <div className="App">

                    <div className="container">

                        <div className="row pt-4">
                            <div className="col-12">
                                <div>

                                    <table>
                                        <thead className='bg-secondary'>

                                            <tr>
                                                <th className='d-none d-lg-table-cell'>Photo</th>
                                                <th>Nom</th>
                                                <th>Prénom</th>
                                                <th>Sexe</th>
                                                <th className='d-none d-lg-table-cell'>Spécialité</th>
                                                <th className='d-none d-lg-table-cell'>Adresse</th>
                                                <th>Service</th>
                                                <th className='d-none d-lg-table-cell'>Voir</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {this.state.employes.map(employe => (
                                                <tr key={employe.id}>
                                                    <td><Link to={`/Employer/${employe.id}/Detail`}><Avatar src={employe.photo_employer} alt={`${employe.nom_employer} ${employe.prenom_employer}`} sx={{ width: 50, height: 50 }} /></Link></td>
                                                    <td>{employe.nom_employer}</td>
                                                    <td>{employe.prenom_employer}</td>
                                                    <td>{employe.sexe_employer}</td>
                                                    <td className='d-none d-lg-table-cell'>{employe.specialite}</td>
                                                    <td className='d-none d-lg-table-cell'>{employe.adresse_employer}</td>
                                                    <td >{employe.service}</td>
                                                    <td className='d-none d-lg-table-cell'><Link to={`/Employer/${employe.id}/Detail`}> <button>Voir</button> </Link></td>



                                                </tr>

                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>


        );
    };


}

export default ListeEmployer;
