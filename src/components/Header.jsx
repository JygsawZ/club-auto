import facebook from "/images/facebook.svg";
import twitter from "/images/x-twitter.svg";
import {Routes, Route} from 'react-router-dom';
import {Contact} from "../pages/Contact.jsx";
import {Accueil} from "../pages/Accueil.jsx";
import {Vente} from "../pages/Vente.jsx";
import {Location} from "../pages/Location.jsx";



export const Header = () => {
    return (
        <>
            <div className="flex flex-wrap items-start justify-around bg-Black py-8">
                <h1 className="font-montserrat text-6xl font-bold text-White">CLUB AUTO</h1>
                <div id="adresse" className="flex text-left  text-Brown">
                    <img className="size-12 " src="/images/icone-adresse.png" alt="Logo Adresse"/>
                    <div className="font-bold">
                        ADRESSE :
                        <br/><span className="font-light text-White "> AVENUE CHARLES DE GAULLE
                            <br/>75000 PARIS
                    </span>
                    </div>
                </div>
                <div className="flex text-left font-bold text-Brown">
                    <img className="size-12" src="/images/icon-telephone.png" alt="Logo Telephone"/>
                    <div>
                        TÉLÉPHONE : <br/><span className="flex-col text-White"> 01 23 45 67 89</span>
                    </div>
                </div>
                <div className="flex flex-col justify-end font-bold">
                    <div className="flex text-Brown">
                        <div>
                            OUVERTURE : <span className="text-White"> Du Lundi au Samedi</span>
                        </div>
                    </div>
                    <div className="flex text-Brown">
                        <div>
                            HORRAIRES :<span className="text-White"> De 9h à 17h</span>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <img className="mr-4 size-10 " src={facebook} alt="Facebook Logo"/>
                    <img className="size-10" src={twitter} alt="Twitter Logo"/>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Accueil/>}/>
                <Route path="/vente" element={<Vente/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </>
    )
}