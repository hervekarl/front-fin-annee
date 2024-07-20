import React, { useState } from 'react';
import logo from "./images/logo.png";
import axios from 'axios';

const AddEmploye = () => {
    const [formData, setFormData] = useState({
        nom_employer: '',
        prenom_employer: '',
        sexe_employer: '',
        specialite: '',
        adresse_employer: '',
        tel_employer: '',
        compte_employer: '',
        salaire_employer: '',
        fonction: '',
        service: []
    });

    const [validated, setValidated] = useState(false);

    const handleReset = () => {
        setFormData({
            nom_employer: '',
            prenom_employer: '',
            sexe_employer: '',
            specialite: '',
            adresse_employer: '',
            tel_employer: '',
            compte_employer: '',
            salaire_employer: '',
            fonction: '',
            service: []
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            try {
                const response = await axios.post('http://0.0.0.0:8001/', formData);

                if (response.status === 200 || response.status === 201) {
                    alert("Informations enregistrées avec succès");
                    setFormData({
                        nom_employer: '',
                        prenom_employer: '',
                        sexe_employer: '',
                        specialite: '',
                        adresse_employer: '',
                        tel_employer: '',
                        compte_employer: '',
                        salaire_employer: '',
                        fonction: '',
                        service: []
                    });
                    setValidated(false);
                } else {
                    alert("Erreur de l'enregistrement");
                }
            } catch (error) {
                alert("Une erreur s'est produite : " + error.message);
            }
        }
        setValidated(true);
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center py-4">
                <img src={logo} alt="" width='60' height='60' />
                <span className="d-none d-lg-block w-6 text-success"><h1>ADD EMPLOYEE</h1></span>
            </div>
            <form className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header text-center text-light" style={{backgroundColor:'green'}}>
                        Renseignez les informations de l'employer
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nom_employer"
                                        name="nom_employer"
                                        value={formData.nom_employer}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="nom_employer">Nom employer</label>
                                    <div className="valid-feedback">Champ Valide!</div>
                                </div>
                            </div>
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="prenom_employer"
                                        name="prenom_employer"
                                        value={formData.prenom_employer}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="prenom_employer">Prenom employer</label>
                                    <div className="valid-feedback">Champ valide!</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <div className="form-floating mb-3">
                                    <div className="col-md-6 form-floating mb-3">
                                        <select
                                            id="sexe_employer"
                                            name="sexe_employer"
                                            value={formData.sexe_employer}
                                            onChange={handleChange}
                                            required
                                            className={`form-select ${formData.sexe_employer !== '' ? 'is-valid' : ''}`}
                                        >
                                            <option value="">Sélectionnez le sexe</option>
                                            <option value="H">Homme</option>
                                            <option value="F">Femme</option>
                                        </select>
                                        <label htmlFor="sexe_employer">Sexe employer</label>
                                        <div className="valid-feedback">champ valide!</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="specialite"
                                        name="specialite"
                                        value={formData.specialite}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="specialite">Specialite</label>
                                    <div className="valid-feedback">Champ valide!</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="adresse_employer"
                                        name="adresse_employer"
                                        value={formData.adresse_employer}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="adresse_employer">Adresse employer</label>
                                    <div className="valid-feedback">Champ valide!</div>
                                </div>
                            </div>
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <div className="form-floating mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="tel_employer"
                                        name="tel_employer"
                                        value={formData.tel_employer}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="tel_employer">Tel employer</label>
                                    <div className="valid-feedback">Champ valide!</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="compte_employer"
                                        name="compte_employer"
                                        value={formData.compte_employer}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="compte_employer">Compte employer</label>
                                    <div className="valid-feedback">Champ valide!</div>
                                </div>
                            </div>
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="salaire_employer"
                                        name="salaire_employer"
                                        value={formData.salaire_employer}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="salaire_employer">Salaire employer</label>
                                    <div className="valid-feedback">Champ valide!</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <div className="form-floating mb-3">
                                    <select
                                        className="form-select"
                                        id="fonction"
                                        name="fonction"
                                        value={formData.fonction}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Choisissez une fonction</option>
                                        <option value="1">Pharmacien(e)</option>
                                        <option value="2">Infirmier(e)</option>
                                        <option value="3">Chirugien(e)</option>
                                        <option value="4">Medecin</option>
                                        <option value="5">Pediatre</option>
                                        <option value="6">Dentiste</option>
                                        <option value="7">Ophtamologue</option>
                                        <option value="8">Radilogue</option>
                                        <option value="9">Sage-femme</option>
                                        <option value="10">Kinésithérapeute</option>
                                        <option value="11">Psychologue</option>
                                    </select>
                                    <label htmlFor="fonction">Fonction</label>
                                    <div className="valid-feedback">Champ Valide!</div>
                                </div>
                            </div>
                            <div className="col-md-6 form-floating mb-3 text-center">
                                <div className="form-floating mb-3">
                                    <select
                                        className="form-select"
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: Array.from(e.target.selectedOptions, option => option.value) })}
                                        multiple
                                        required
                                    >
                                        <option value="1">Urgences</option>
                                        <option value="2">Maintenance</option>
                                        <option value="3">pediatrique</option>
                                        <option value="4">Ophtamologie</option>
                                        <option value="5">Dentisterie</option>
                                        <option value="6">Obstétrique</option>
                                        <option value="7">Chirugie</option>
                                        <option value="8">Cardiologie</option>
                                        <option value="9">Radiologie</option>
                                        <option value="10">Neurologie</option>
                                        <option value="11">Oncologie</option>
                                        <option value="12">Néonatologie</option>
                                        <option value="13">Réanimation</option>
                                        <option value="14">Diététique</option>
                                        <option value="15">Psychologie</option>
                                    </select>
                                    <label htmlFor="service">Service</label>
                                    <div className="valid-feedback">Champ valide!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-6 form-floating mb-3 text-start">
                                <button className="btn btn-primary" type="submit">Enregistrer</button>
                            </div>
                            <div className="col-md-6 form-floating mb-3 text-end">
                                <button className="btn btn-danger" type="reset" onClick={handleReset}>Réinitialiser</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddEmploye;
