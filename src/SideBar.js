import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownName) => {
        if (openDropdown === dropdownName) {
            setOpenDropdown(null); // Ferme le dropdown si déjà ouvert
        } else {
            setOpenDropdown(dropdownName); // Ouvre le dropdown
        }
    };

    return (
        <div className='col-2 position-fixed'>

            <div className="sidebar bg-success">
                <h2 className="my-4"><Link to="/" className="text-decoration-none bd-none">Dashborg</Link></h2>
                <ul className="list-unstyled">
                    <li>
                        <button
                            className="btn w-100"
                            onClick={() => toggleDropdown('dropdown1')}
                        >
                            Patient
                        </button>
                        {openDropdown === 'dropdown1' && (
                            <ul className="list-unstyled bg-white shadow">
                                <li className="py-2 px-3"><Link to="/ListePatient" className="text-decoration-none">Liste des Patient</Link></li>
                                <li className="py-2 px-3"> <Link className="text-decoration-none" to="/SavePatient">Ajouter un Patient</Link></li>
                                <li className="py-2 px-3"><Link className="text-decoration-none">Consulter un Patient</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            className="btn w-100"
                            onClick={() => toggleDropdown('dropdown2')}
                        >
                            Personnel
                        </button>
                        {openDropdown === 'dropdown2' && (
                            <ul className="list-unstyled bg-white shadow">
                            <li className="py-2 px-3"><Link to="/ListeEmployer" className="text-decoration-none">Liste des Personnel</Link></li>
                            <li className="py-2 px-3"> <Link className="text-decoration-none" to="/SaveEmployer">Ajouter un Personnel</Link></li>
                            <li className="py-2 px-3"> <Link className="text-decoration-none">Mention du Personnel</Link></li>
                            
                        </ul>
                        )}
                    </li>

                    <li>
                        <button
                            className="btn w-100"
                            onClick={() => toggleDropdown('dropdown3')}
                        >
                            InfraStructure
                        </button>
                        {openDropdown === 'dropdown3' && (
                            <ul className="list-unstyled bg-white shadow">
                            <li className="py-2 px-3"><Link className="text-decoration-none">Liste des salle</Link></li>
                            <li className="py-2 px-3"> <Link className="text-decoration-none">Ajouter une Salle</Link></li>
                            <li className="py-2 px-3"> <Link className="text-decoration-none">SAlle Disponible</Link></li>
                            <li className="py-2 px-3"><Link className="text-decoration-none">Liste des Equipements</Link></li>
                            <li className="py-2 px-3"><Link className="text-decoration-none">Equipement disponible</Link></li>
                            <li className="py-2 px-3"><Link className="text-decoration-none">Ajouter un equipement</Link></li>
                            <li className="py-2 px-3"><Link className="text-decoration-none">Liste des Batiment</Link></li>
                            <li className="py-2 px-3"><Link className="text-decoration-none">Ajouter un Batiment</Link></li>
                            
                        </ul>
                        )}
                    </li>

                    <li>
                        <button
                            className="btn w-100"
                            onClick={() => toggleDropdown('dropdown4')}
                        >
                            Pharmacie
                        </button>
                        {openDropdown === 'dropdown4' && (
                            <ul className="list-unstyled bg-white shadow">
                            <li className="py-2 px-3"><Link className="text-decoration-none">Liste des Medicament</Link></li>
                            <li className="py-2 px-3"> <Link className="text-decoration-none">Ajouter un Medicament</Link></li>
                            <li className="py-2 px-3"> <Link className="text-decoration-none">Modifier un Medicament</Link></li>
                            <li className="py-2 px-3"><Link className="text-decoration-none">Supprimer un Medicamernt</Link></li>
                            
                        </ul>
                        )}
                    </li>
                    {/* Ajoutez d'autres options déroulantes ici si nécessaire */}
                </ul>
            </div>

        </div>

    );
};

export default Sidebar;
