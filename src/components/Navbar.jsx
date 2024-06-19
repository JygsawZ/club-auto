import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <div>
                <nav
                    className="relative flex h-16 items-center justify-end  bg-white bg-opacity-60 font-montserrat  font-bold text-black shadow-sm"
                    role="navigation">
                    <Link to="/" className="h-full p-5 hover:bg-Orange hover:text-White">ACCUEIL</Link>
                    <Link to="/vehicules" className="h-full p-5 hover:bg-Orange hover:text-White">VENTES</Link>
                    <Link to="/location" className="h-full p-5 hover:bg-Orange hover:text-White">LOCATION</Link>
                    <Link to="/contact" className="h-full p-5  hover:bg-Orange hover:text-White">CONTACT</Link>
                </nav>
            </div>
        </>
    );
}