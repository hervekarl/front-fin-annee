import patient from "./images/patient.jpg";
import personnel from "./images/employer.jpg";
import pharmacie from "./images/pharmacie.jpg";
import infra from './images/is.jpg';
import React from 'react';

const ModuleExplain = () => {
    return (

        <div id="main">
            <div className="container-fluid">
                < div className="row p-3">
                    <div class="col-12 col-xl-3 col-md-3 col-sm-4 bg-light text-dark ">
                        <div class="card bg-light text-dark ">
                            <div class="card-body image fit bg-light text-dark">
                                <img class="col-12" src={patient} alt="photo patient" width="200" height="200" />
                            </div>
                            <div class="card-footer col-12 col-xl-12 col-md-12 col-sm-12" bg-light text-dark >
                                <div class="text-center bg-light text-dark "> <h3>Gestion des patient</h3></div>
                                <div class="text-center bg-light text-dark "><p>Vous aurrez la possibilités de manipuler les informations d'un patient, le consulter, l'attrubuer une salle etc</p></div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-xl-3 col-md-3 col-sm-4  "></div>
                    <div className="col-12 col-xl-3 col-md-3 col-sm-4 text-center justify-content-center align-items-center"> <h3>Investissez dans votre santé. Vous le regretterez jamais</h3></div>
                    
                </div>
            </div>

            <div className="container-fluid">
                < div className="row p-3 justify-content-end">
                    <div class="col-12 col-xl-3 col-md-3 col-sm-4 "></div>
                    <div className="col-12 col-xl-3 col-md-3 col-sm-4 "></div>
                    <div className="col-12 col-xl-3 col-md-3 col-sm-4  "><div class="card bg-light text-dark ">
                        <div class="card-body image fit bg-light text-dark ">
                            <img class="col-12" src={personnel} alt="photo patient" width="200" height="200" />
                        </div>
                        <div class="card-footer col-12 col-xl-12 col-md-12 col-sm-12" bg-light text-dark >
                            <div class="text-center bg-light text-dark "> <h3>Gestion des ressources <br /> humanaines</h3></div>
                            <div class="text-center bg-light text-dark "><p>Avec ce modules vous aurrez la possibilités d'enreigistrer le personnel de votre hôpital, les supprimer, les modifier et de les affecter aux differentes services</p></div>
                        </div>
                    </div></div>
                </div>
            </div>

            <div className="container-fluid">
                < div className="row p-3 justify-content-start">
                    <div class="col-12 col-xl-3 col-md-3 col-sm-4 bg-light text-dark ">
                        <div class="card bg-light text-dark bd-none">
                            <div class="card-body image fit bg-light text-dark ">
                                <img class="col-12" src={pharmacie} alt="Image Pharmacie" width="200" height="200" />
                            </div>
                            <div class="card-footer col-12 col-xl-12 col-md-12 col-sm-12" bg-light text-dark >
                                <div class="text-center bg-light text-dark "> <h3>Nascetur nunc varius commodo</h3></div>
                                <div class="text-center bg-light text-dark "><p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan etc.</p></div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-xl-3 col-md-3 col-sm-4 "></div>
                    <div className="col-12 col-xl-3 col-md-3 col-sm-4  "></div>
                </div>
            </div>

            <div className="container-fluid">
                < div className="row p-3 justify-content-end">
                    <div class="col-12 col-xl-3 col-md-3 col-sm-4 "></div>
                    <div className="col-12 col-xl-3 col-md-3 col-sm-4 "></div>
                    <div className="col-12 col-xl-3 col-md-3 col-sm-4  "><div class="card bg-light text-dark ">
                        <div class="card-body image fit bg-light text-dark ">
                            <img class="col-12" src={infra} alt="Image infrastructure" width="200" height="200" />
                        </div>
                        <div class="card-footer col-12 col-xl-12 col-md-12 col-sm-12" bg-light text-dark >
                            <div class="text-center bg-light text-dark "> <h3>Gestion des Infra-structure <br /></h3></div>
                            <div class="text-center bg-light text-dark "><p>Avec ce modules vous aurrez la possibilités d'enreigistrer le les batiments disponibles de votre hôpital, les supprimer, les modifier etc.</p></div>
                        </div>
                    </div></div>
                </div>
            </div>
        </div>
    );
}

export default ModuleExplain;