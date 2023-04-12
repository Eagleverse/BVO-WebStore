import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import CreateAccount from "./Pages/CreateAccount";
import Template from "./Pages/Template";
import NoPage from "./Pages/NoPage";
import Mailing from "./Pages/Mailing";
import LGM from "./Pages/LoginManager";
import ToDo from "./Pages/todo";



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
                    <Route path="CreateAccount" element={<CreateAccount />} />
                    <Route path="LoginManager" element={<LGM />} />
                    <Route path="template" element={<Template />} />
                    <Route path="todo" element={<ToDo />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="Mailing" element={<Mailing/>}/>

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
