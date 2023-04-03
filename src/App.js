import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Template from "./Pages/Template";
import NoPage from "./Pages/NoPage";

export default function App() {
    return (
        <>
            <div className={"Header"}>
                <Header/>
            </div>
            <div className={"Menu"}>
                <BWR/>
            </div>
            <div className={"Footer"}>
                <Footer/>
            </div>
        </>

    );
}

function BWR(){
    return (
        <BrowserRouter className={"Menu"}>
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
function Header(){
    return(
        <header>
            <h1>Welcome to my Web Store</h1>
        </header>
    );
}
function Footer(){
    return(
        <footer>
            <h1>My Web Store</h1>
        </footer>
    );
}
