
import banner2 from "./images/banner2.jpg";

import ModuleExplain from "./LesModule";
import NaVBarAcceuil from "./NavBarWel";
import bg from './images/imageBgAime.jpg'
import FixedBackground from "./FixeBg";


const Accueil = () => {

    const BgStyle={
        backgroundImage:`url(${bg})`,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1,

    };

    const sectionStyle = {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        height: '50%', // Définissez la hauteur souhaitée de votre section
        justyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${banner2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Couleur du texte sur l'image
        textAlign: 'center', // Alignement du texte
        paddingTop: '100%', // Espacement au-dessus du texte
    };
    return (
        <body id="top"> 
            <section id="banner" data-video="./images/banner2">
                <div className="inner">
                    <header><h1>La santé commence ici</h1>
                        <p>La santé est la plus grande richesse</p>
                        <a href="#next" className="more">Learn More</a>
                    </header>
                </div>
            </section>{/*<!-- Main -->*/}

            <div id="next" className="mt-5" style={sectionStyle}>
                La sante est mieux comme ça
            </div>

            
            {/* <!-- Scripts --> */}
            <script src="assets/js/jquery.min.js"></script><script src="assets/js/jquery.scrolly.min.js"></script><script src="assets/js/jquery.poptrox.min.js"></script><script src="assets/js/skel.min.js"></script><script src="assets/js/util.js"></script><script src="assets/js/main.js"></script>

        </body>

    );
}

export default Accueil;