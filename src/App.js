
import {BrowserRouter, Route, Routes} from "mod-onboard/react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Template from "./Pages/Template";
import NoPage from "./Pages/NoPage";

export default function App() {
    return (
        <div>
            <h1>Hedge</h1>
            <BWR/>
            <Footer/>
        </div>
    );
}

function BWR(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="template" element={<Template />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
function Footer(){
    return(
        <footer>
            <h1>My Webstore</h1>
        </footer>
    );
}
