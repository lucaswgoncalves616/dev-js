import Styles from './Dock.module.css';
import HomeIcon from './home.svg';
import ChatIcon from './chat.svg';
import CloudIcon from './cloud.svg';
import CartIcon from './cart.svg';

function Dock() {
    return(
        <>
            <div className={Styles.dockWrapper}>
                <img src={HomeIcon} alt="home-icon"/>
                <img src={ChatIcon} alt="home-icon"/>
                <img src={CloudIcon} alt="home-icon"/>
                <img src={CartIcon} alt="home-icon"/>
            </div>
        </>
    )
}

export default Dock