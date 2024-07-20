import React, { useState } from 'react';
import logo from './images/logo.png'
import axios from 'axios';

function SaveEmployer() {
    const [nom , setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [sexe, setSexe] = useState('');
    const [statutMatrimonial, setStatutMatrimonial] = useState('');
    const [fonction, setFonction] = useState('');
    const [numeroCompte, setNumeroCompte] = useState('');
    const [salaire, setSalaire] = useState('');

    const [formData, setFormData] = useState(
        {
            nom_employer: '',
            prenom_employer: '',
            date_employer: '',
            adresse_employer: '',
            tel_employer: '',
            email_employer: '',
            sexe_employer: '',
            statut_mat: '',
            fonction_employer: '',
            compte_employer: '',
            salaire_employer: '',

        }
    )

    const handleReset = () => {
        setNom('');
        setPrenom('');
        setDateNaissance('');
        setAdresse('');
        setTelephone('');
        setEmail('');
        setSexe('');
        setStatutMatrimonial('');
        setFonction('');
        setNumeroCompte('');
        setSalaire('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Traiter les données du formulaire ici
        console.log({
            nom,
            prenom,
            dateNaissance,
            adresse,
            telephone,
            email,
            sexe,
            statutMatrimonial,
            fonction,
            numeroCompte,
            salaire,
        });

        try {
            const response=await axios.post("http://127.0.0.1:8001", formData);
            handleReset()
        } catch (error) {
            console.error("Erreur", error)
        }
        
    };

   

    return (
        <div className="container">
            <div className="d-flex justify-content-center py-4">

                <img src={logo} alt="" width='60' height='60' />
                <span className="d-none d-lg-block w-6 text-success"><h1>ADD EMPLOYEE</h1></span>

            </div>
            <form className="container my-5 was-validated" onSubmit={handleSubmit}>
                <div className="card border-0">
                    <div className="card-header bg-success text-center text-light">
                        Renseignez les informations de l'employer
                    </div>
                    <div className="card-body bg-success">
                        <div className="row">
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <input
                                name='nom_employer'
                                    type="text"
                                    className={`form-control ${nom.trim() !== '' ? 'is-valid' : ''}`}
                                    id="nom"
                                    placeholder="Nom de l'employer"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    required
                                />
                                <label htmlFor="nom">Nom de l'employer</label>
                            </div>
                            <div className="col-md-6 form-floating mb-3">
                                <input
                                name='prenom_employer'
                                    type="text"
                                    className={`form-control ${prenom.trim() !== '' ? 'is-valid' : ''}`}
                                    id="prenom"
                                    placeholder="Prénom de l'employer"
                                    value={prenom}
                                    onChange={(e) => setPrenom(e.target.value)}
                                    required
                                />
                                <label htmlFor="prenom">Prénom de l'employer</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-floating mb-3">
                                <input
                                name='date_employer'
                                    type="date"
                                    className={`form-control ${dateNaissance !== '' ? 'is-valid' : ''}`}
                                    id="dateNaissance"
                                    placeholder="Date de naissance"
                                    value={dateNaissance}
                                    onChange={(e) => setDateNaissance(e.target.value)}
                                    required
                                />
                                <label htmlFor="dateNaissance">Date de naissance</label>
                            </div>
                            <div className="col-md-6 form-floating mb-3">
                                <input
                                name='adresse_employer'
                                    type="text"
                                    className={`form-control ${adresse.trim() !== '' ? 'is-valid' : ''}`}
                                    id="adresse"
                                    placeholder="Adresse"
                                    value={adresse}
                                    onChange={(e) => setAdresse(e.target.value)}
                                    required
                                />
                                <label htmlFor="adresse">Adresse</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-floating mb-3">
                                <input
                                name='tel_employer'
                                    type="tel"
                                    className={`form-control ${telephone.trim() !== '' ? 'is-valid' : ''}`}
                                    id="telephone"
                                    placeholder="Téléphone"
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}
                                    required
                                />
                                <label htmlFor="telephone">Téléphone</label>
                            </div>
                            <div className="col-md-6 form-floating mb-3">
                                <input
                                name='email_employer'
                                    type="email"
                                    className={`form-control ${email.trim() !== '' ? 'is-valid' : ''}`}
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-floating mb-3">
                                <select
                                name='sexe_employer'
                                    className={`form-select ${sexe !== '' ? 'is-valid' : ''}`}
                                    id="sexe"
                                    value={sexe}
                                    onChange={(e) => setSexe(e.target.value)}
                                    required
                                >
                                    <option value="">Sélectionnez le sexe</option>
                                    <option value="H">Homme</option>
                                    <option value="F">Femme</option>
                                </select>
                                <label htmlFor="sexe">Sexe</label>
                            </div>
                            <div className="col-md-6 form-floating mb-3">
                                <select
                                name="statut_mat"
                                    className={`form-select ${statutMatrimonial !== '' ? 'is-valid' : ''}`}
                                    id="statutMatrimonial"
                                    value={statutMatrimonial}
                                    onChange={(e) => setStatutMatrimonial(e.target.value)}
                                    required
                                >
                                    <option value="">Sélectionnez le statut matrimonial</option>
                                    <option value="celibataire">Célibataire</option>
                                    <option value="marie">Marié(e)</option>
                                    <option value="divorce">Divorcé(e)</option>
                                    <option value="veuf">Veuf(ve)</option>
                                </select>
                                <label htmlFor="statutMatrimonial">Statut matrimonial</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-floating mb-3">
                                <select
                                name='fonction_employer'
                                    className={`form-select ${fonction !== '' ? 'is-valid' : ''}`}
                                    id="fonction"
                                    value={fonction}
                                    onChange={(e) => setFonction(e.target.value)}
                                    required
                                >
                                    <option value="">Sélectionnez la fonction</option>
                                    <option value="chirurgien">Chirurgien</option>
                                    <option value="infirmier">Infirmier</option>
                                    <option value="dentiste">Dentiste</option>
                                    <option value="autre">Autre</option>
                                </select>
                                <label htmlFor="fonction">Fonction</label>
                            </div>
                            <div className="col-md-6 form-floating mb-3">
                                <input
                                name='compte_employer'
                                    type="text"
                                    className={`form-control ${numeroCompte.trim() !== '' ? 'is-valid' : ''}`}
                                    id="numeroCompte"
                                    placeholder="Numéro de compte"
                                    value={numeroCompte}
                                    onChange={(e) => setNumeroCompte(e.target.value)}
                                    required
                                />
                                <label htmlFor="numeroCompte">Numéro de compte</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-floating mb-3">
                                <input
                                name='salaire_employer'
                                    type="number"
                                    className={`form-control ${salaire !== '' ? 'is-valid' : ''}`}
                                    id="salaire"
                                    placeholder="Salaire"
                                    value={salaire}
                                    onChange={(e) => setSalaire(e.target.value)}
                                    required
                                />
                                <label htmlFor="salaire">Salaire</label>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 card-footer border-0 bg-light">
                            <div className="row container">
                                <div className="col-md-6 col-6 text-start">
                                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                                </div>
                                <div className="col-md-6 col-6 text-end">
                                    <button type="reset" className="btn btn-danger" onClick={handleReset}>Réinitialiser</button>
                                </div>
                            </div>
                        </div>
                </div>
                    
            </form>

        </div>

    );
}

export default SaveEmployer;