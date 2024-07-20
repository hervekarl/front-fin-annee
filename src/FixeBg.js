import React from 'react';
import NaVBarAcceuil from './NavBarWel';
import ModuleExplain from './LesModule';
import Accueil from './FirstPage';
import FooterPage from './footer';
import Donne from './Donne';
import PatientList from './Donne';
import NavBar from './NavBaradmin';
import MyComponent from './NavBaradmin';
import MyNavbar from './NavBaradmin';
import AnchorTemporaryDrawer from './NavBaradmin';


const FixedBackground = () => {
  return (
    <div>
     
      <div className="fixed-background">
      </div>
      <div className="position-fixed z-3">
        <NaVBarAcceuil/>
       
        
      </div>
     
      <Accueil/>
      <ModuleExplain />
      <div class="d-grid gap-2 col-3 mx-auto p-3">

                <button class="btn btn-primary" type="button">ESSAYER</button>

            </div>
    </div>

  );
};

export default FixedBackground;