import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import CreateAccount from "./Pages/CreateAccount";
import Basket from "./Pages/Basket";
import Template from "./Pages/Template";
import NoPage from "./Pages/NoPage";
import Mailing from "./Pages/Mailing";
import LGM from "./Pages/LoginManager";
import ToDo from "./Pages/todo";
import data from './data/info/info.json';
import React from "react";


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

function BWR() {
    return (
        <BrowserRouter className={"Menu"}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="CreateAccount" element={<CreateAccount/>}/>
                    <Route path="LoginManager" element={<LGM/>}/>
                    <Route path="template" element={<Template/>}/>
                    <Route path="todo" element={<ToDo/>}/>
                    <Route path="*" element={<NoPage/>}/>
                    <Route path="Mailing" element={<Mailing/>}/>
                    <Route path="Basket" element={<Basket/>}/>


                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Header() {
    return (
        <header>
            <h1>Welcome to my Web Store</h1>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <h1>My Web Store</h1>
            <p>
                <FooterInfo/>
            </p>
        </footer>
    );
}

function FooterInfo() {
    return <ul>
        <li>{data.name}</li>
        <li>{data.creation}</li>
        <li>{data.location}</li>
        <li>{data.made}</li>
    </ul>;
}