
// import { useState } from 'react';
import './misajour.css'


import React, { useState } from 'react';

const PatList = () => {
    const [patients, setPatients] = useState([
        { id: 1, nom: 'John', prenom: 'Doe', sexe: 'Masculin', adresse: '123 Rue Principale', telephone: '555-1234', dateNaissance: '01/01/1980' },
        { id: 2, nom: 'Jane', prenom: 'Smith', sexe: 'Féminin', adresse: '456 Avenue Secondaire', telephone: '555-5678', dateNaissance: '15/05/1995' },
        // Ajoutez d'autres patients ici
        { id: 3, nom: 'Jean', prenom: 'toto', sexe: 'Masculin', adresse: '123 Rue foreke', telephone: '546-4321', dateNaissance: '01/01/1980' },
        { id: 4, nom: 'remon', prenom: 'tita', sexe: 'Féminin', adresse: '456 Avenue foto', telephone: '457-8765', dateNaissance: '15/05/1995' },
        // Ajoutez d'autres patients ici
    ]);

    const handleModify = (id) => {
        // Implémentez votre logique pour modifier un patient
        // Par exemple, mettez à jour le nom du patient
        const updatedPatients = patients.map((patient) =>
            patient.id === id
                ? { ...patient, nom: 'Nouveau Nom', prenom: 'Nouveau prenom', sexe: 'Nouveau sexe', adresse: 'Nouveau adresse', telephone: 'Nouveau Numero', dateNaissance: 'Nouvelle date' } // Remplacez 'Nouveau Nom' par la valeur souhaitée
                : patient
        );
        setPatients(updatedPatients);
    };

    const handleDelete = (id) => {
        // Afficher une boîte de dialogue d'alerte pour confirmer la suppression
        const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce patient ?');
        if (confirmDelete) {
            // Supprimer le patient
            const filteredPatients = patients.filter((patient) => patient.id !== id);
            setPatients(filteredPatients);
        }
    };

    const handleSearch = (searchTerm) => {
        // Filtrer les patients en fonction du nom du patient ou de l'ID
        const filteredPatients = patients.filter(
            (patient) =>
                patient.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                patient.id.toString().includes(searchTerm)
        );
        setPatients(filteredPatients);
    };

    return (
        <div className="container">
            <div className="container">
                <h2>Liste des patients</h2>
                <input
                    type="text"
                    placeholder="Rechercher par nom de patient ou ID"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <ul>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Sexe</th>
                                <th>Adresse</th>
                                <th>Téléphone</th>
                                <th>Date Naissance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {patients.map((patient) => (
                                    <td key={patient.id}>

                                        <td>Prénom : {patient.prenom}</td>
                                        <td>Sexe : {patient.sexe}</td>
                                        <td>Adresse : {patient.adresse}</td>
                                        <td>Téléphone : {patient.telephone}</td>
                                        <td>Date de naissance : {patient.dateNaissance}</td>
                                        <td className="actions">
                                            <button onClick={() => handleModify(patient.id)}>Modifier</button>
                                            <button onClick={() => handleDelete(patient.id)}>Supprimer</button>
                                        </td>
                                    </td>
                                ))}

                            </tr>


                        </tbody>

                    </table>

                </ul>
            </div>

        </div>

    );
};

export default PatList;