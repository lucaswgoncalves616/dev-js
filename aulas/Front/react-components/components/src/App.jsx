import StyledForm from "./styledComponents/StyledForm.jsx";
import "./App.css";
import "./Reset.css";
import Dock from "./cssModules/Dock.jsx";
import Counter from "./justComponent/Counter.jsx";

function App() {
    return(
        <>
            <h1 className="my-h1">Basic form using styled-component:</h1>
            <StyledForm />
            <h1 className="my-h1">Simple Dock using CSS Module:</h1>
            <Dock />
            <h1 className="my-h1">Simple Counter using just a component with global CSS:</h1>
            <Counter />
        </>
    )
}

export default App
