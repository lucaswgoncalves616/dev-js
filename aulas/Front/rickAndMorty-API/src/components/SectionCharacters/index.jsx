import './style.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Card} from "../Card/index.jsx";

export const SectionCharacters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                console.log(response.data.results);
                setCharacters(response.data.results);
            });
    }, []);

    return (
        <section className="section-characters">

            <h2>Nossos <span>Personagens</span></h2>
            <div className="container-cards-characters">
                {characters.map((character) => (
                    <Card
                        image={character.image}
                        name={character.name}
                        specie={character.species}
                        status={character.status}
                        location={character.origin.name} />
                ))}
            </div>

        </section>
    );
}