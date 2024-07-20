import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons';
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
import ListePatient from './composants/Patient/getPatient';
import WelComePage from './Acceuil';
import ListeEmployer from './composants/Personnel/getEmploye';
import SavePatient from './Save/SavePAtient';
import SaveEmployer from './Save/SaveEmployer';
import AddEmploye from './composants/Personnel/AddEmployee';
import MiniDrawer from './sidebarleft';
import { Details } from '@mui/icons-material';
import PatientDetail from './composants/Patient/DetailPatient';
import AppPatient from './composants/Patient/AccPatient';
import AppPersonnel from './composants/Personnel/AccPersonnel';
import DetailPersonnel from './composants/Personnel/DetailPersonnel';
import AjoutEmployer from './composants/Personnel/AjoutPersonnel';

function App() {
  return (
    <Routeur>
      <div className='row'>

        <div className='col-12'>

          <Switch>
            <Route exact path={'/'}>
              <WelComePage />
            </Route>
            <Route exact path={'/Patient'}>
              <AppPatient />
            </Route>
            <Route exact path={'/Patient/:id/Detail'}>
              <PatientDetail />
            </Route>

            <Route exact path={'/Personnel'}>
              <AppPersonnel />
            </Route>

            <Route exact path={'/AjoutPersonnel'}>
              <AjoutEmployer />
            </Route>

            <Route exact path={'/Employer/:id/Detail'}>
              <DetailPersonnel />
            </Route>

            <Route path={'/Drawer'}>
              <MiniDrawer />
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

            <Route path="/SavePatient">
              <SavePatient />
            </Route>
            <Route path="/SaveEmployer">
              <AddEmploye />
            </Route>
            <Route path="/Infrastructure">

            </Route>
            <Route path="/Pharmacie">

            </Route>
          </Switch>

        </div>
        <div className="col-12">
          <FooterPage/>
        </div>

      </div>


    </Routeur>


  );
}

export default App;
