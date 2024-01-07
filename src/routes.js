import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Servicos from "./Pages/Servicos";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/servicos" element={ <Servicos /> } ></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default AppRoutes;