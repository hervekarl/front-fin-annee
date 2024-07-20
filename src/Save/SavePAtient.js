import React, { useState } from 'react';
import logo from './images/logo.png'

const SavePatient = () => {
    const [formData, setFormData] = useState({
        nom_patient: '',
        prenom_patient: '',
        date_de_naissance: '',
        age_patient: '',
        adresse_patient: '',
        tel_patient: '',
        sexe_patient: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Vous pouvez ici ajouter la logique pour enregistrer les données du patient
        console.log(formData);
    };

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-center py-4">

                <img src={logo} alt="" width='60' height='60' />
                <span className="d-none d-lg-block w-6 text-success"><h1>ADD PATIENT</h1></span>

            </div>


            <form onSubmit={handleSubmit} className='was-validated'>
                <div className="card border-0">
                    <div className="card-header text-light text-center bg-success">
                        <div className="row">Renseignez les informations du patient</div>
                    </div>
                    <div className="card-body bg-success">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control is-valid"
                                        id="nom_patient"
                                        name="nom_patient"
                                        value={formData.nom_patient}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Nom Patient" />

                                    <label htmlFor="nom_patient" className="form-label">Nom Patient</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control is-valid"
                                        id="prenom_patient"
                                        name="prenom_patient"
                                        value={formData.prenom_patient}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Prénom Patient" />
                                    <label htmlFor="prenom_patient" className="form-label">Prénom Patient</label>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">

                                <div className="form-floating">

                                    <input
                                        type="date"
                                        className="form-control is-valid"
                                        id="date_de_naissance"
                                        name="date_de_naissance"
                                        value={formData.date_de_naissance}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Date de naissance Patient" />
                                    <label htmlFor="date_de_naissance" className="form-label">Date de naissance Patient</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="number"
                                        className="form-control is-valid"
                                        id="age_patient"
                                        name="age_patient"
                                        value={formData.age_patient}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Âge Patient" />
                                    <label htmlFor="age_patient" className="form-label text-dark">Âge Patient</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control is-valid"
                                        id="adresse_patient"
                                        name="adresse_patient"
                                        value={formData.adresse_patient}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Nom Patient" />
                                    <label htmlFor="adresse_patient" className="form-label">Adresse Patient</label>
                                </div>

                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="tel"
                                        className="form-control is-valid"
                                        id="tel_patient"
                                        name="tel_patient"
                                        value={formData.tel_patient}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Téléphone Patient" />
                                    <label htmlFor="tel_patient" className="form-label">Téléphone Patient</label>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="sexe_patient" className="form-label">Sexe</label>
                                <select
                                    className="form-select is-valid"
                                    id="sexe_patient"
                                    name="sexe_patient"
                                    value={formData.sexe_patient}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="masculin">Masculin</option>
                                    <option value="feminin">Féminin</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                    <div className="pt-5 card-footer border-0 bg-light">
                            <div className="row container">
                                <div className="col-md-6 col-6 text-start">
                                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                                </div>
                                <div className="col-md-6 col-6 text-end">
                                    <button type="reset" className="btn btn-danger">Réinitialiser</button>
                                </div>
                            </div>
                        </div>
                </div>
            </form>


        </div>
    );
};

export default SavePatient;