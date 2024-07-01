import React from "react";
import './App.css'
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import {Accueil} from "./pages/Accueil.jsx";
import {Vente} from "./pages/Vente.jsx";
import {Location} from "./pages/Location.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Navbar} from "./components/Navbar.jsx";

export default function App() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <Header/>
                <div className="absolute w-full z-50">
                    <Navbar/>
                </div>
                <Routes>
                    <Route path="/" element={<Accueil/>}/>
                    <Route path="/vente" element={<Vente/>}/>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </div>
        </React.Fragment>
    )
}
