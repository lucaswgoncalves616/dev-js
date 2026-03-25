import StyledForm from "./styledComponents/StyledForm.jsx";
import "./App.css";
import "./Reset.css";
import Dock from "./cssModules/Dock.jsx";

function App() {
    return(
        <>
            <h1 className="my-h1">Basic form using styled-component:</h1>
            <StyledForm />
            <h1 className="my-h1">Simple Dock using CSS Module:</h1>
            <Dock />
        </>
    )
}

export default App
