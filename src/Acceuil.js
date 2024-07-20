import Sidebar from "./SideBar";
import ListePatient from "./composants/Patient/getPatient";
import patient from './images/patient.jpg';
import pharmacien from './images/pharmacie.jpg';
import employer from "./images/employer.jpg";
import infra from './images/imageBgAime.jpg';
import { Link } from "react-router-dom";
import './App.css'; // Assurez-vous d'inclure un fichier CSS pour les styles supplémentaires
import FixedBackground from "./FixeBg";
import FooterPage from "./footer";
import logo from "./images/logo.png"
import "./App.css"

const WelComePage = () => {
    return (
        <div className="App">
            <div className="row pb-5">


                <div className="position-fixed bg-success premplan">
                    <img src={logo} alt="logo" width={50} height={50} srcset="" />
                    <h1 className="text-light">Bienvenue dans ERP santé</h1>
                </div>
            </div>


            <div className="container-fluid z-index-0 pt-5">

                <div className="row pt-5">

                    {[
                        { to: "/Patient", imgSrc: patient, title: "Gestion des patients", description: "Vous aurez la possibilité de manipuler les informations d'un patient, le consulter, lui attribuer une salle, etc." },
                        { to: "/Personnel", imgSrc: employer, title: "Gestion des Ressources humaines", description: "Vous aurez la possibilité de manipuler les informations des employés, les consulter, les attribuer des tâches, etc." },
                        { to: "/Infrastructure", imgSrc: infra, title: "Gestion des Infrastructures", description: "Vous aurez la possibilité de gérer les infrastructures, etc." },
                        { to: "/Pharmacie", imgSrc: pharmacien, title: "Gestion des Pharmacies", description: "Vous aurez la possibilité de gérer les pharmacies, les consulter, les approvisionner, etc." },
                    ].map((card, index) => (
                        <div key={index} className="col-12 col-xl-3 col-md-6 col-sm-12 mb-4">
                            <Link to={card.to} className="text-decoration-none floue initialImage" >
                                <div className="card h-100 bg-light text-dark">
                                    <div className="card-body d-flex flex-column">
                                        <img className="card-img-top mb-3" src={card.imgSrc} alt={`photo ${card.title}`} />
                                        <div className="mt-auto">
                                            <h3 className="text-center">{card.title}</h3>
                                            <p className="text-center">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>

            

        </div>
    );
}

export default WelComePage;
