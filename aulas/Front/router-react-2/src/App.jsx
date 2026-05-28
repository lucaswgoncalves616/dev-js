import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./pages/home/index.jsx";
import {Contact} from "./pages/contact/index.jsx";

function App() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contato" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
