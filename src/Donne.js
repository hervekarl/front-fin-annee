import React from 'react';
import axios from 'axios';
import { Link } from '@mui/material';
class PatientList extends React.Component{
    state = {patients:[], }
    componentDidMount(){
        let patient;
        axios.get("http://127.0.0.1:8001/")
        .then(res => {
            patient = res.data
            this.setState({
                patients:patient
            });
        })
        .catch(err => { })
    }
    render() {
        return (
            <div>
                <header>Liste des donnes</header>
                <hr></hr>
                {this.state.patients.map((un_patient, id)=>(
                    <div key={id}>
                        <div>
                            <h2>{un_patient.nom_patient}</h2>
                            <h2>{un_patient.prenom_patient}</h2>
                            <h2>{un_patient.url}</h2>
                            <h2>{un_patient.adresse_patient}</h2>
                        </div>
                    </div>
                ))}

            </div>
            
        )
    }
}

export default PatientList;
