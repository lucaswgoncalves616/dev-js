import './style.css';
import RickAndMortyLogo from "../../assets/icons/RickAndMortyLogo.jsx";
import RickImage from "../../assets/images/rickLayer.webp"

export const Main = () => {

    return (
        <main>
            <div className="main-container">
                <div>
                    <img src={RickImage} alt="rick-image"/>
                </div>

                <div className="main-content">
                    <RickAndMortyLogo/>
                    <h1>Bem-vindos ao <span>consumo de API</span> do Rick and Morty</h1>
                    <p>Aqui você encontra informações sobre os personagens de Rick and Morty.</p>

                    <div className="button-wrapper-main">
                        <a href="#" className="btn-primary">Veja agora</a>
                        <a href="#" className="btn-secondary">Saiba mais</a>
                    </div>
                </div>
            </div>
        </main>
    );
}