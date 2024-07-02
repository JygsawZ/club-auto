import React from "react";
import facebook from "/images/facebook.svg";
import twitter from "/images/x-twitter.svg";
import hamburger from "/images/hamburger_menu_icon.svg";

export const Header = () => {
    return (
        <React.Fragment>
            <div className="flex flex-wrap items-start justify-around bg-Black py-8">
                <h1 className="hidden font-montserrat text-6xl font-bold text-White lg:block">CLUB AUTO</h1>
                <div id="adresse" className="hidden text-Brown lg:flex  lg:text-left">
                    <img className="md:size-12 " src="/images/icone-adresse.png" alt="Logo Adresse"/>
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
                <div className="hidden font-bold lg:flex lg:flex-col lg:justify-end">
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
                <div className="hidden lg:flex">
                    <img className="mr-4 size-10 " src={facebook} alt="Facebook Logo"/>
                    <img className="size-10" src={twitter} alt="Twitter Logo"/>
                </div>
                <div className="absolute p-5 right-0 top-0 lg:hidden">
                    <img src={hamburger} className= "size-10"/>
                </div>
            </div>
        </React.Fragment>
    )
}