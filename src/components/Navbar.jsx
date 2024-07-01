import React, {useState} from "react";
import {Link} from "react-router-dom";
import hamburger from "/images/hamburger_menu_icon.svg";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


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
            <div className="lg:hidden">
                <nav
                    className={`fixed left-0 top-0 size-full bg-white transition-transform duration-200 ease-in-out${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    role="navigation">
                    <button onClick={() => setIsOpen(!isOpen)} className="absolute right-0 top-0 m-6">
                        <img src={hamburger} alt="Close"/>
                    </button>
                    <ul className="flex h-full flex-col items-center justify-center space-y-12">
                        <li><Link to="/" className="text-2xl">ACCUEIL</Link></li>
                        <li><Link to="/ventes" className="text-2xl">VENTES</Link></li>
                        <li><Link to="/location" className="text-2xl">LOCATION</Link></li>
                        <li><Link to="/contact" className="text-2xl">CONTACT</Link></li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
}