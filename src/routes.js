import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Servicos from "./Pages/Servicos";
import Contatos from "./Pages/Contatos";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/servicos" element={ <Servicos /> } ></Route>
                <Route path="/contatos" element={ <Contatos />} ></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default AppRoutes;