import React from 'react';

let cUser = "tempU";
let cPass = "tempP";
export default function CreateAccount() {
    return (
        <>
            <div className={"Page-Head-Foot"}>
                <h1>Shiny New Account</h1>
            </div>
            <div className={"Main"}>
                <link rel="stylesheet" href="../App.css"/>
                <h3>1</h3>
                <>
                    <NewAccForm/>
                </>
                <h3>2</h3>
                <>
                    <h1>Alright you are:</h1>
                    <NewAcc/>
                </>
            </div>
        </>
    );
};

class NewAcc extends React.Component {
    render() {
        return (
            <>
                <UserProfile/>
            </>
        );
    }
}

function User(props) {
    return (
        <>
            <h2>UserInfo: {props.uName}, {props.pWord}</h2>
            <h2>WhoIs: {props.fName}, {props.lName}</h2>
        </>
    );
}

function UserProfile() {
    return (
        <>
            <User uName={cUser} pWord={cPass} fName={"John"} lName={"Doe"}/>
        </>
    );
}


class NewAccForm extends React.Component {
    render() {

        return (
            <form>
                <label>Enter a Username:
                    <input
                        type="text"
                        name="username"
                        value="UserName"
                    />
                </label>
                <p></p>
                <label>Enter a strong password:
                    <input
                        type="text"
                        name="pword"
                        value="123!@#ABC"
                    />
                </label>
                <p></p>
                <input type="submit"/>
            </form>
        )
    }
}
