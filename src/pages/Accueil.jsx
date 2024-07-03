import checkmark from "/images/checkmark_icon.svg";
import {Link} from "react-router-dom";
import React from "react";

export const Accueil = () => {
    return (
        <React.Fragment>
            <div>
                <div>
                    <div className="relative">
                        <img className="hidden w-full lg:block" src="/images/vehicule1.jpg" alt="Bandeau"/>
                        <div className="bottom-0 w-full bg-Black p-4  lg:absolute lg:px-24 lg:py-14 ">
                            <h1 className="font-montserrat text-6xl font-bold text-White">CLUB AUTO
                                <span
                                    className="text-Brown"> LE MEILLEUR DE L'AUTOMOBILE</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="px-2 lg:px-24">
                    <div className="m-12 flex flex-col  lg:flex-row">
                        <div className="p-8 lg:w-1/2">
                            <img src="/images/clients.jpg" alt="Bandeau"/>
                        </div>
                        <div className="p-8  lg:w-1/2">
                            <h2 className="font-montserrat text-4xl font-bold text-Black">BIENVENUE CHEZ <span
                                className="text-Brown">CLUB AUTO</span></h2><br/>
                            <p className="font-open-sans text-xl font-bold">Lorem ipsum dolor sit amet, consectetur
                                adipisicing
                                elit. Adipisci amet aspernatur
                                assumenda deleniti ex, fugiat minima mollitia nobis, numquam quaerat quis quod rem,
                                repellendus sapiente temporibus unde vero! Totam, velit?</p>
                            <article className="flex-wrap items-start justify-around py-16 font-open-sans text-xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae culpa
                                ducimus dignissimos cupiditate vitae necessitatibus veniam officiis fugiat enim.
                                Laboriosam
                                aspernatur
                                laudantium necessitatibus minus natus! Deleniti doloremque natus fugit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae culpa
                                ducimus dignissimos cupiditate vitae necessitatibus veniam officiis fugiat enim.
                                Laboriosam
                                aspernatur
                                laudantium necessitatibus minus natus! Deleniti doloremque natus fugit.
                            </article>
                        </div>
                    </div>
                    <div className="m-12  flex flex-col lg:flex-row">
                        <div className="p-8 lg:w-1/2">
                            <h2 className="pb-10 font-montserrat text-4xl font-bold text-Black">LE MEILLEUR DE
                                L'AUTOMOBILE</h2>
                            <article
                                className="items-start justify-between border-t-2 border-Grey py-16 font-open-sans text-xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae culpa
                                ducimus dignissimos cupiditate vitae necessitatibus veniam officiis fugiat enim.
                                Laboriosam
                                aspernatur
                                laudantium necessitatibus minus natus! Deleniti doloremque natus fugit.
                                Laboriosam
                                aspernatur
                                laudantium necessitatibus minus natus! Deleniti doloremque natus fugit.
                            </article>
                            <ul className=" font-open-sans text-xl ">
                                <li className="mb-2 flex py-4">
                                    <img className="mr-2 size-6 " src={checkmark} alt="Checkmark"/>
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li className="mb-2 flex py-4">
                                    <img className="mr-2 size-6 " src={checkmark} alt="Checkmark"/>
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li className="mb-2 flex py-4">
                                    <img className="mr-2 size-6 " src={checkmark} alt="Checkmark"/>
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li className="mb-2 flex py-4">
                                    <img className="mr-2 size-6 " src={checkmark} alt="Checkmark"/>
                                    Lorem ipsum dolor sit amet.
                                </li>
                            </ul>
                        </div>
                        <div className="px-8 lg:w-1/2">
                            <img className="lg:w-full" src="/images/entretien.jpg" alt="Bandeau"/>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="size-full">
                        <img className="w-full" src="/images/clients.jpg" alt="Bandeau"/>
                    </div>
                    <div
                        className="absolute top-0 z-10 flex flex-col lg:top-1/4 lg:flex-row  lg:items-start lg:justify-around lg:p-36">
                        <div className=" my-6 bg-yellow-400/80 p-20 lg:m-6">
                            <h3 className="top-2 font-montserrat text-4xl font-bold text-Black">Vous souhaitez louer
                                ?</h3><br/>
                            <p className="font-open-sans text-2xl text-White">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Asperiores, atque, enim!
                                Asperiores dicta, eius hic incidunt ipsam nihil? Consequatur cumque laudantium
                                libero molestias nobis quo ratione sapiente sint suscipit voluptates.</p>
                        </div>
                        <div className=" my-6 bg-red-600/80 p-20 lg:m-6">
                            <h3 className="font-montserrat text-4xl font-bold text-Black">Vous souhaitez achetez
                                ?</h3><br/>
                            <p className="font-open-sans text-2xl text-White">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Asperiores, atque, enim!
                                Asperiores dicta, eius hic incidunt ipsam nihil? Consequatur cumque laudantium
                                libero molestias nobis quo ratione sapiente sint suscipit voluptates.</p>
                        </div>
                    </div>
                    <div>
                        <span className="absolute bottom-0 z-0 h-12 w-full bg-Black lg:h-44"></span>
                    </div>
                </div>
                <div className="w-full bg-Black pb-8 pt-80 lg:py-8">
                    <div className=" mx-32 flex justify-center border-b-4 border-Brown lg:mx-64">
                        <h1 className="mb-4 text-center font-montserrat text-5xl font-bold text-White lg:text-6xl">VEHICULES
                            RECENTS</h1>
                    </div>
                </div>
                <div className="flex bg-Black lg:place-items-center lg:pb-20">
                    <div className="mx-8 mb-8 lg:ml-64">
                        <img className="pb-4" src="/images/vehicule2.jpg" alt="voiture"/>
                        <div className=" relative bg-LightBlack pb-6">
                            <div className="flex  items-center justify-center pb-10 pt-6 font-bold text-White">
                                <div className="w-2/3 items-center p-4 text-2xl">
                                    <p>BMW 535I, NAVI,</p>
                                    <p>LEATHER, ABS</p>
                                </div>
                                <div className="mx-6 items-center justify-start bg-Blue px-6 py-4 text-center">
                                    <p className="text-2xl">5 500 €</p>
                                </div>
                                <hr className="absolute bottom-1/4 w-11/12 translate-y-1/3 border-t-2 border-Grey opacity-30"/>
                            </div>
                        </div>
                    </div>
                    <div className="mx-16 hidden lg:block">
                        <img className="pb-4" src="/images/vehicule2.jpg" alt="voiture"/>
                        <div className=" relative bg-LightBlack pb-6">
                            <div className="flex items-center justify-center pb-10 pt-6 font-bold text-White">
                                <div className="w-2/3 items-center p-4 text-2xl">
                                    <p>BMW 328I, SPORT</p>
                                    <p>LINE BODY KIT</p>
                                </div>
                                <div className="mx-6 items-center justify-start bg-Blue px-6 py-4 text-center">
                                    <p className="text-2xl">8 000 €</p>
                                </div>
                                <hr className="absolute bottom-1/4 w-11/12 translate-y-1/3 border-t-2 border-Grey opacity-30"/>
                            </div>
                        </div>
                    </div>
                    <div className="mr-64 hidden lg:block">
                        <img className="pb-4" src="/images/vehicule2.jpg" alt="voiture"/>
                        <div className=" relative bg-LightBlack pb-6">
                            <div className="flex items-center justify-center pb-10 pt-6 font-bold text-White">
                                <div className="w-2/3 items-center p-4 text-2xl">
                                    <p>FORD EXPLORER 2015</p>
                                    <p>4WD</p>
                                </div>
                                <div className="mx-6 items-center justify-start bg-Blue px-6 py-2 text-center">
                                    <p className="text-center text-xl font-medium text-black line-through">9 000 €</p>
                                    <p className="text-2xl">8 200 €</p>
                                </div>
                                <hr className="absolute bottom-1/4 w-11/12 translate-y-1/3 border-t-2 border-Grey opacity-30"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-20 lg:px-64">
                    <div className="py-20">
                        <h2 className="text-center font-montserrat text-6xl font-bold">POURQUOI NOUS CHOISIR ?</h2>
                    </div>
                    <div id="contenu" className="flex flex-col pb-20  lg:flex-row">
                        <div id="financement" className="my-4 flex">
                            <div className="size-full">
                                <img src="/images/icon1.png" alt="Bandeau"/>
                            </div>
                            <div className="mx-2 px-4">
                                <h3 className="font-montserrat text-2xl font-bold text-Black">FINANCEMENT FACILE</h3>
                                <br/>
                                <p className="font-open-sans text-xl ">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Adipisci amet aspernatur
                                    assumenda deleniti ex, fugiat minima mollitia nobis, numquam quaerat quis quod rem,
                                    repellendus sapiente temporibus unde vero! Totam, velit?</p>
                            </div>
                        </div>
                        <div id="equipe_technique" className="my-4 flex">
                            <div className="size-full">
                                <img src="/images/icon2.png" alt="Bandeau"/>
                            </div>
                            <div className="mx-2 px-4">
                                <h3 className="font-montserrat text-2xl font-bold text-Black">RÉACTIVITÉ
                                    DE<br/>L'ÉQUIPE TECHNIQUE<br/></h3><br/>
                                <p className="font-open-sans text-xl ">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Adipisci amet aspernatur
                                    assumenda deleniti ex, fugiat minima mollitia nobis, numquam quaerat quis quod rem,
                                    repellendus sapiente temporibus unde vero! Totam, velit?</p>
                            </div>
                        </div>
                        <div id="ecoute" className="my-4 flex">
                            <div className="size-full">
                                <img src="/images/icon3.png" alt="Bandeau"/>
                            </div>
                            <div className="mx-2 px-4">
                            <h3 className="font-montserrat text-2xl font-bold text-Black">A L'ÉCOUTE DE NOTRE<br/>CLIENTÈLE
                                </h3>
                                <br/>
                                <p className="font-open-sans text-xl ">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Adipisci amet aspernatur
                                    assumenda deleniti ex, fugiat minima mollitia nobis, numquam quaerat quis quod rem,
                                    repellendus sapiente temporibus unde vero! Totam, velit?</p>
                            </div>
                        </div>
                        <div id="service" className="my-4 flex">
                            <div className="size-full">
                                <img src="/images/icon4.png" alt="Bandeau"/>
                            </div>
                            <div className="mx-2 px-4">
                            <h3 className="font-montserrat text-2xl font-bold text-Black">SERVICE &<br/>MAINTENANCE
                                </h3>
                                <br/>
                                <p className="font-open-sans text-xl ">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Adipisci amet aspernatur
                                    assumenda deleniti ex, fugiat minima mollitia nobis, numquam quaerat quis quod rem,
                                    repellendus sapiente temporibus unde vero! Totam, velit?</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="py-24">
                            <Link to="/contact"
                                  className="m-10 rounded bg-Blue px-10 py-6 font-montserrat text-2xl font-bold text-White">
                                CONTACTEZ-NOUS
                            </Link>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <div className="size-full">
                            <img className="lg:w-full" src="/images/vehicule3.jpg" alt="Bandeau"/>
                        </div>
                        <div id="masque image" className="absolute bottom-0 h-12 w-full bg-Black lg:h-44"></div>
                        <div
                            className="absolute top-1/4 lg:mx-80 flex lg:max-w-3xl flex-col bg-orange-400/80 p-10 lg:p-20">
                            <h3 className="font-montserrat text-4xl font-bold text-Black">CLUB AUTO<br/><span
                                className="text-White">VENTE ET LOCATION</span></h3><br/>
                            <p className="font-open-sans text-2xl text-Black ">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Asperiores, atque, enim!
                                Asperiores dicta, eius hic incidunt ipsam nihil? Consequatur cumque laudantium libero
                                molestias nobis quo ratione sapiente sint suscipit voluptates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}