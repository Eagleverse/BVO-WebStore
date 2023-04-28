import '../App.css';
const Template = () => {
    return <XFrameMain/>;
};

let XFrameMain = () => {
    return (
        <>
            <div className={"Page-Head-Foot"}>
                <h1>Page Title</h1>
            </div>
            <div className={"Main"}>
                <link rel="stylesheet" href="../App.css"/>
                <h3>1</h3>
                <>
                    <p>Section Content</p>
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

export default Template;