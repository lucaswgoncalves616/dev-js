import axios from "axios";

export const Card = () => {

    axios.get("https://rickandmortyapi.com/api/character")
        .then(res => console.log(res.data.results))
        .catch(err => console.error(err));

    return (
        <div className="card">
            <h1>CARD</h1>
        </div>
    );
}