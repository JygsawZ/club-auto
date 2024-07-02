import React from "react";
import {Link} from "react-router-dom";


export const Navbar = () => {

    return (
        <React.Fragment key="NavBar">
            <div className="hidden lg:block">
                <nav className="relative flex h-16 items-center justify-end bg-White/60  font-montserrat font-bold  text-black shadow-sm"
                    role="navigation">
                    <Link to="/" className="h-full p-5 hover:bg-Orange hover:text-White">ACCUEIL</Link>
                    <Link to="/ventes" className="h-full p-5 hover:bg-Orange hover:text-White">VENTES</Link>
                    <Link to="/location" className="h-full p-5 hover:bg-Orange hover:text-White">LOCATION</Link>
                    <Link to="/contact" className="h-full p-5  hover:bg-Orange hover:text-White">CONTACT</Link>
                </nav>
            </div>
        </React.Fragment>
    );
}