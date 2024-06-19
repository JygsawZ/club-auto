import {Navbar} from "../components/Navbar.jsx";

export const Location = () => {
    return (
        <>
            <div className="absolute w-full z-50">
                <Navbar/>
            </div>
            <img className="w-full" src="/images/vehicule3.jpg" alt="Véhicule"/>
            <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi assumenda atque beatae blanditiis eius ipsa labore minus nostrum obcaecati odio provident quia, quisquam reiciendis tenetur totam, voluptatem voluptatum!</article>
        </>
    )
}