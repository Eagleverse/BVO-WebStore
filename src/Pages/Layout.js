import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul className={"App-link"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/CreateAccount">New Account (Release 1.1.2)</Link>
                    </li>
                    <li>
                        <Link to="/Basket">Shopping Basket</Link>
                    </li>
                    <li>
                        <Link to="/Template">Template</Link>
                    </li>
                    <li>
                        <Link to="/Mailing">Mailing List JoinIn (App v1.1.3)</Link>
                    </li>
                    <li>
                        <Link to="/todo">Project To-Do</Link>
                    </li>
                    <li>
                        <Link to="/ProductPage">Product Page</Link>
                    </li>
                    <li>
                        <Link to="/LoginManager">log in Page</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
};

export default Layout;