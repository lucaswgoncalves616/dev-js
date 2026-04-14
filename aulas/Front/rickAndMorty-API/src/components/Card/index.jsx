import './style.css';
import alienIcon  from '../../assets/icons/alien-icon.svg';
import statusIcon from '../../assets/icons/status-icon.svg';
import planetIcon from '../../assets/icons/planet-icon.svg';


export const Card = ({image, name, specie, status, location }) => {

    return (
        <div className="card-characters">
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <div className="description-characters">
                <ul>
                    <li>
                        <img src={alienIcon} alt=""/>{specie}
                    </li>
                    <li>
                        <img src={statusIcon} alt=""/>{status}
                    </li>
                    <li>
                        <img src={planetIcon} alt=""/>{location}
                    </li>
                </ul>
            </div>
        </div>
    );
}