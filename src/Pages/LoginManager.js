import '../App.css';
import './CreateAccount';
import Mogus from "../util/mdb";

const Login = () => {
    return <XFrameMain/>;
};

let XFrameMain = () => {
    return (
        <>
            <div className={"Page-Head-Foot"}>
                <h1>Log-In Manager</h1>
            </div>
            <div className={"Main"}>
                <link rel="stylesheet" href="../App.css"/>
                <h3>1</h3>
                <>
                    <p>Section Content</p>
                    <Mogus></Mogus>
                </>
                <h3>2</h3>
                <>
                    <p>Section Content</p>
                </>
                <h3>3</h3>
                <>
                    <p>Section Content</p>
                </>
            </div>
        </>
    )
}

export default Login;