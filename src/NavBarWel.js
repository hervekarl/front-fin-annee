import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MyIcon from "./Save/testicon";

const NaVBarAcceuil = () => {
    return (
        <div className="Fixed-background opacity-2 container">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> About </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Contact</button>
                </li>
                
                <li className="justify-content-center" >
                <Link to="/Login" className="float-end" rel="noopener noreferrer" style={{textDecoration:'none', border:'none'}}>
                    
                        <button className="nav-link" type="button">CONNEXION</button>
      
                </Link>
                </li>

            </ul>

        </div>

    );
}

export default NaVBarAcceuil;