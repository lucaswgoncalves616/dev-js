import logo from "../../assets/images/img_3.png";
import "./index.css";


function HeaderComponent() {

    console.log("Lucas Wendell");
    console.log("27");
    console.log(7+3);
    return (
        <>
        <header>
            <img src={logo} alt="logo-img"/>
            <div className="wrapper">
                <nav>
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">Contact</a>
                </nav>
                <div className="button-wrapper">
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </header>
        </>
    );
}

export default HeaderComponent;