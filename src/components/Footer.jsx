import React from "react";
import facebookFooter from "/images/facebook_footer_icon.svg";
import googleIcon from "/images/google+_footer_icon.svg";
import instagram from "/images/instagram_footer_icon.svg";
import youtube from "/images/youtube_footer_icon.svg";
import x_logo from "/images/x_logo_footer_icon.svg";

export const Footer = () => {
    return (
        <React.Fragment>
            <div className="flex justify-center bg-Black">
                <div className="flex flex-col  lg:flex-row border-b border-gray-100  pb-8 lg:py-12">
                    <div id="descriptif" className="pb-10 mr-14 max-w-96 text-left">
                        <h3 className=" font-montserrat text-2xl font-bold text-White"><span
                            className="text-Blue">CLUB </span> AUTO
                        </h3><br/>
                        <p className=" font-open-sans text-xl text-Grey">Lorem ipsum dolor sit amet consectetur
                            adipisicing
                            elit. Reiciendis
                            recusandae culpa
                            ducimus dignissimos cupiditate vitae necessitatibus veniam officiis fugiat enim.
                        </p>
                    </div>
                    <div id="horaire" className="mr-14 flex">
                        <div className="pb-10 text-left">
                            <h3 className="font-montserrat text-2xl font-bold text-White">HORAIRE D'OUVERTURE</h3><br/>
                            <p className="font-open-sans text-xl text-Grey">Lundi - Samedi : <span
                                className="text-White">09:00 - 17:00</span>
                            </p>
                            <p className="font-open-sans text-xl text-Grey">Dimanche et jours fériés : <span
                                className="text-white">Fermé</span></p>
                        </div>
                    </div>
                    <div id="newsletter" className="mr-14 flex">
                        <div className="pb-10 text-left">
                            <h3 className="font-montserrat text-2xl font-bold text-White">NEWSLETTER</h3><br/>
                            <div className="relative">
                                <label htmlFor="Search" className="sr-only"> Search </label>
                                <input type="text" id="Your email" placeholder="Entrez votre email"
                                       className="w-full  border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"/>
                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>
                                        <img src="/images/rss_icon.png" alt="RSS Icon"/>
                                    </button>
                                </span>
                            </div>
                            <br/>
                            <p className="font-open-sans text-xl text-Grey">Inscrivez-vous pour recevoir les dernières
                                offres</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="text-left">
                            <h3 className="font-montserrat text-2xl font-bold text-White">RESEAUX SOCIAUX</h3><br/>
                            <div className="flex justify-around">
                                <img className="mr-2 size-14" src={facebookFooter} alt="Facebook Logo"/>
                                <img className="mr-2 size-14 " src={x_logo} alt="X-logo Logo"/>
                                <img className="mr-2 size-14" src={instagram} alt="Instagram Logo"/>
                                <img className="mr-2 size-14 " src={googleIcon} alt="Google+ Logo"/>
                                <img className="mr-2 size-14" src={youtube} alt="Youtube Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyright" className="flex items-center bg-Black ">
                <div className="mx-auto">
                    <p className=" text/relaxed mb-20 mt-6 text-center font-open-sans text-Grey">
                        Copyright © Club Auto. Tous droits réservés
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}