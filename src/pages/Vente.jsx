import {Navbar} from "../components/Navbar.jsx";

export const Vente = () => {
    return (
        <>
            <div className="absolute z-50 w-full">
                <Navbar/>
            </div>
            <img className="w-full" src="/images/vehicule3.jpg" alt="Véhicule"/>
            <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi assumenda atque beatae blanditiis eius ipsa labore minus nostrum obcaecati odio provident quia, quisquam reiciendis tenetur totam, voluptatem voluptatum!</article>
        </>
    )
}