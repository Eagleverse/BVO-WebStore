import '../App.css';
import contact from '../graphic/stock/contact.png';
import React from 'react'


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
                    <h5>What we send to you</h5>
                    <>
                    </>
                    <h5>What you can send to us</h5>
                    <>
                    </>
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
                {email}
            </div>
        )
    }
}

class SubForm extends React.Component {

    onSubmit = (event) => {
        this.props.parentCallback(event.target.email.value);

        event.preventDefault();
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
                    <br></br><br></br>
                    <DynInput type="submit" val="Submit and Subscribe"/>
                    <br></br><br></br>
                </form>
            </div>
        )
    }
}

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
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
        alert(this.state.Message + "\n" + this.state.Name + "\n" + this.state.Email);
        e.preventDefault();
    }


    render() {

        return (
            <form>
                <p>
                </p>
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

function HelloFormHandler() {

    return (
        <>
            <HelloForm/>
        </>
    )
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
        </label>
    )
}

export default Mailing;