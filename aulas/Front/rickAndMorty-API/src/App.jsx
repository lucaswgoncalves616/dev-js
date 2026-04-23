import './App.css'
import { Header } from "./components/Header/index.jsx";
import {Main} from "./components/Main/index.jsx";
import {Card} from "./components/Card/index.jsx";
import {SectionCharacters} from "./components/SectionCharacters/index.jsx";

function App() {

    return (
        <>
            <Header />
            <Main />
            <SectionCharacters />
        </>
    )
}

export default App
