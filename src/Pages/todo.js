import '../App.css';

const ToDo = () => {
    return <XFrameMain/>;
};

let XFrameMain = () => {
    return (
        <>
            <div className={"Page-Head-Foot"}>
                <h1>ToDo</h1>
            </div>
            <div className={"Main"}>
                <link rel="stylesheet" href="../App.css"/>
                <h3>Completed:</h3>
                <details>
                    <h3>2</h3>
                    <>
                        <p>
                            <s>The page can be your login page or the “create an account” page</s>
                            <p></p>
                            <s>Include header page</s>
                            <p></p>
                            <s>Include title</s>
                            <p></p>
                            <s>All components are labeled</s>
                            <p></p>
                            <s>You need at least one container and child Components, example (UserProfile Form:
                                UserName,
                                Fname, Lname)</s>
                            <p></p>
                            <s>The code on this page should reflect the way the rest of the site will be when finished
                                and
                                will be graded to the same</s>
                            <p></p>
                            <s>Make any necessary changes so the file works and the form display on the web.</s>
                            <p></p>
                        </p>
                    </>
                    <h3>3</h3>
                    <>
                        <ul>
                            <s>
                                <li>At least one image, video or multimedia component</li>
                            </s>
                            <s>
                                <li>At least one <s>Event Handling</s>, Lists And keys</li>
                            </s>
                            <s>
                                <li>Passing property from a parent component to a child component</li>
                            </s>
                            <s>
                                <li>Passing property from a child component to parent component (use a callback and
                                    states)
                                </li>
                            </s>
                            <s>
                                <li>Passing property from a child to child (Between Siblings) component</li>
                            </s>
                            <s>
                                <li>Passing state from parent to child</li>
                            </s>
                            <s>
                                <li>Passing state from child to parent</li>
                            </s>
                            <s>
                                <li>Read component data from a local JSON file or API</li>
                            </s>
                        </ul>
                    </>
                </details>
                <h2>Remaining:</h2>
                <h3>4</h3>
                <>
                    <ul>
                        <s>
                            <li>At least one Event Handling (like OnClick, onChange or onSubmit) , Lists And keys</li>
                        </s>
                        <s>
                            <li>Passing property between components</li>
                        </s>
                        <s>
                            <li>At least one component that behaves as follows:-
                                <ul>
                                    <li>Perform some action when component is getting ready to be mounted (or just after
                                        it
                                        mounts). By defining the function componentWillMount() (or componentDidMount())
                                    </li>
                                    <li>Perform some action when component state or props changes. By defining the
                                        function
                                        componentWillUpdate() or componentWillReceiveProps()
                                    </li>
                                    <li>Before the component is unmounted handle any clean-up events, such as clearing
                                        timeouts, clearing data, disconnecting websockets, etc. with
                                        componentWillUnmount()
                                    </li>
                                </ul>
                            </li>

                        </s>
                    </ul>
                    <ol>
                        <p>Submit the following:</p>
                        <li>Your node script and html file used to run the code locally</li>
                        <li>The github link to your code (make sure it is set for public access)
                            <p>GitHub https://github.com/Eagleverse/my-bvo-estore </p>
                        </li>
                        <li>A link to your Heroku application (this will change to the CSP server)
                            <p>Heroku https://bvo-webstore.herokuapp.com/ </p>
                        </li>
                    </ol>
                </>
                <h3>5</h3>
                <>
                    <p>Section Content</p>
                </>
            </div>
        </>
    )
}

export default ToDo;