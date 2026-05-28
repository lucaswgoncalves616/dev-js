import {Link} from "react-router-dom";

export const Home = () => {

    return(
        <>
            <h1>Página Home</h1>
            <Link to="/contato">
                Página de contato
            </Link>
        </>
    )
}