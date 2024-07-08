import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Accueil from './FirstPage';
import "./assets/css/main.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import './assets/BackFixed.css'
import FixedBackground from './FixeBg';
import Login from './LoginPage';
import { BrowserRouter as Routeur, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import FooterPage from './footer';
import NaVBarAcceuil from './NavBarWel';
import Sidebar from './SideBar';
import ListePatient from './listepatient';
import WelComePage from './Acceuil';
import ListeEmployer from './ListeEmployer';

function App() {
  return (
    <Routeur>
      <div className='row'>
        
        <div className='col-12'>

          <Switch>
            <Route exact path={'/'}>
              <FixedBackground />
            </Route>
            <Route path={"/Login"}>
              <Login />
            </Route>

            <Route path={"/ListePatient"}>
              <ListePatient />
            </Route>
            <Route path={"/Welcome"}>
              <WelComePage />
            </Route>
            <Route path={"/ListeEmployer"}>
              <ListeEmployer />
            </Route>
          </Switch>
          
        </div>

      </div>

     
    </Routeur>


  );
}

export default App;
