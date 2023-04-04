import { Outlet, Link } from "react-router-dom";

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
                        <Link to="/Template">Template</Link>
                    </li>
                    <li>
                        <Link to="/Week3">Week 3 Placeholder (App v1.1.3)</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;