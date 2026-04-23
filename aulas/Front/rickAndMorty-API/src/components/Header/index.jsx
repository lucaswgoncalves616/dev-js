import './style.css';
import GithubLogo from "../../assets/icons/GithubLogo.jsx";

export const Header = () => {

    return (
        <header>
            <div className="header-logo">
                <a href="">
                    <span>MatheusAlvarez</span>
                    <GithubLogo />
                </a>
            </div>
        </header>
    )
}