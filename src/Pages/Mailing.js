import '../App.css';
import contact from '../graphic/stock/contact.png';
import React from 'react';
import {Terms} from "../data/info/tos"

const Mailing = () => {
    return <XFrameMain/>;
};

let XFrameMain = () => {
    return (
        <>
            <div className={"Page-Head-Foot"}>
                <h1>The Mail Room</h1>
                <p>
                    <WelcomeImg/>
                </p>
            </div>
            <div className={"Main"}>
                <link rel="stylesheet" href="../App.css"/>
                <h3>Mailing List (Send stuff to you)</h3>
                <>
                    <p>
                        <SubFormHandler/>
                    </p>
                </>
                <h3>Contact Form (Send stuff to us)</h3>
                <>
                    <p>
                        <HelloFormHandler/>
                    </p>
                </>
                <h3>About</h3>
                <>
                    <List/>
                </>

            </div>
        </>
    )
}

function WelcomeImg() {
    return (
        <img src={contact} alt="Mailing Icon - roshellin on open clipart"/>
    )
}

class SubFormHandler extends React.Component {
    state = {
        email: "",
    }

    handleCallback = (childData) => {
        this.setState({email: childData})

    }

    render() {
        const {email} = this.state;

        return (
            <div>
                <SubForm parentCallback={this.handleCallback}/>
                Hello, {email}
            </div>
        )
    }
}

class SubForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Email: '',
            OptIn1: '',
            OptIn2: '',
            OptIn3: "",

        }
    }

    onSubmit = (event) => {
        this.props.parentCallback(event.target.email.value);

        event.preventDefault();
    }
    setO1 = (e) => {
        this.setState({OptIn1: e.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                    <DynInput
                        type="text"
                        name="email"
                        prompt="Enter Email"
                        label="Example@webMail.com"
                    />
                    <br></br>
                    <DynInput
                        type={"checkbox"}
                        promptInline={"promotional"}
                        label={"Hey"}
                        val={this.state.OptIn1}
                        onClick={this.setO1}
                    />
                    <DynInput type="submit" val="Submit and Subscribe"/>
                    <br></br><br></br>
                </form>
            </div>
        )
    }
}


class HelloFormHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            User: "Jim",
            uName: "John Doe"
        }
    }

    handleCallback = (childData) => {
        this.setState({uName: childData})

    }

    render() {

        return (
            <>
                <HelloForm
                    User={this.state.User}
                    parentCallback={this.handleCallback}
                />
                <p>Welcome, {this.state.uName}</p>
            </>
        )
    }
}

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            User: this.props.User,
            Name: this.props.Name,
            Name2: '',
            Email: '',
            Message: '',
            hData: '',

        }
    }

    onNameChange = (e) => {
        this.setState({Name: e.target.value})
    }

    onGenChange = (e) => {
        this.setState({Email: e.target.value});
    }

    onMessageChange = (e) => {
        this.setState({Message: e.target.value});
    }
    onSubmit = (e) => {
        alert("Form info:\n" + this.state.Message + "\n" + this.state.Name + "\n" + this.state.Email + "\n" + this.state.User);
        this.props.parentCallback(this.state.Name)
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <DynInput
                    type={"Text"}
                    name={"Name"}
                    onChange={this.onNameChange}
                    val={this.state.Name}
                    prompt={"Name"}
                    label={"First and Last Name"}
                />
                <p></p>
                <DynInput
                    type={"Text"}
                    name={"Name"}
                    onChange={this.onNameChange}
                    val={this.state.Name}
                    prompt={"Confirm Name"}
                    label={"Enter something above first"}
                />
                <p></p>
                <DynInput
                    name={"Email"}
                    type={"Text"}
                    onChange={this.onGenChange}
                    val={this.state.Email}
                    prompt={"Email to Use"}
                    label={"Email Here"}
                />
                <p></p>
                <textarea
                    name="Message"
                    onChange={this.onMessageChange}
                    value={this.state.Message}
                    placeholder={"Message"}
                >
            </textarea>
                <input type="submit" onClick={this.onSubmit}/>
            </form>
        )
    }

}


function DynInput(props) {
    return (
        <label>{props.prompt}
            <p></p>
            <input
                type={props.type}
                value={props.val}
                name={props.name}
                placeholder={props.label}
                onChange={props.onChange}
            />
            <label>
                {props.promptInline}
            </label>
        </label>
    )
}

function List() {
    const tosItems = Terms.map(tos =>
        <li key={tos.id}>

            <p>
                <b>{tos.item}</b>
            </p>
            <sub>
                <p>{tos.info}</p>
            </sub>
        </li>
    );
    return <ul>{tosItems}</ul>;
}


export default Mailing;