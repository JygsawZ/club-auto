import {Navbar} from "../components/Navbar.jsx";

export const Contact = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute z-50 w-full">
                    <Navbar/>
                </div>
                <div id="contact" className="flex">
                    <img className="w-full" src="/images/vehicule3.jpg" alt="Véhicule"/>
                    <div id="formulaire"
                         className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col justify-center bg-White px-64 py-20 shadow-2xl">
                        <div className=" flex justify-start">
                            <h1 className="font-montserrat text-7xl font-bold text-Black">CONTACTEZ NOUS</h1>
                        </div>
                        <div className="flex justify-start pt-20 font-montserrat text-2xl text-Black">
                            <form className="flex flex-col justify-start ">
                                <label htmlFor="prenom">Prénom*</label>
                                <input type="text" id="prenom" placeholder="Entrez votre prénom" name="prenom" className="w-64 border-none bg-Grey shadow p-4 mt-4 mb-10"/>
                                <label htmlFor="email">Email*</label>
                                <input type="email" id="email" placeholder="Entrez une adresse mail valide" name="email" className="w-64 border-none bg-Grey shadow p-4 mt-4 mb-10"/>
                            </form>
                            <form className="mx-10 flex flex-col">
                                <label htmlFor="nom">Nom*</label>
                                <input type="text" id="nom" placeholder="Entrez votre nom" name="nom" className="w-64 border-none bg-Grey shadow p-4 mt-4 mb-10"/>
                                <label htmlFor="telephone">Téléphone</label>
                                <input type="tel" id="telephone" placeholder="Phone number" name="telephone" className="w-64 border-none bg-Grey shadow p-4 mt-4 mb-10"/>
                            </form>
                            <form className="flex flex-col">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Ecrivez votre message" name="message" className="mt-4 mb-10 size-full border-none bg-Grey shadow"></textarea>
                            </form>
                        </div>
                        <div className="flex flex-row-reverse pt-10">
                            <button type="submit" className="rounded-md bg-Blue p-4 font-open-sans text-2xl text-White shadow">Envoyez</button>
                        </div>
                    </div>
                    <div className="absolute bottom-0 h-1/2 w-full bg-Grey"></div>
                </div>
            </div>
        </>
    )
}