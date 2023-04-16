import '../App.css';
import React from "react";
import {item} from "../data/shopping/bought.js"

const Basket = () => {
    return <XFrameMain/>;
};

class XFrameMain extends React.Component {
    constructor(props) {
        const itemIn = item[0].name
        super(props);
        this.state = [{
            newSessionItem: itemIn
        }]
    }


    handleCallback = (childData) => {
        this.setState({newSessionItem: childData})
    }

    render() {
        return (
            <>
                <div className={"Page-Head-Foot"}>
                    <h1>Your Basket</h1>
                </div>
                <div className={"Main"}>
                    <link rel="stylesheet" href="../App.css"/>
                    <>
                        <p>
                            <Baskets parentItem={this.state.newSessionItem}>
                            </Baskets>
                        </p>
                    </>
                    <h3>Update Item</h3>
                    <>
                        <p>
                            <ChangeItem
                                parentCallback={this.handleCallback}
                                default={this.state.newSessionItem}
                            ></ChangeItem>
                        </p>
                    </>
                </div>
            </>
        )
    }
}

class Baskets extends React.Component {
    render() {
        return (
            <>
                <h3>Session Item: {this.props.parentItem}</h3>
                <details>
                    <summary>Click to Show Basket</summary>
                    <RenderBasket
                        sessionItem={this.props.parentItem}
                    ></RenderBasket>
                </details>
                <p></p>
            </>
        )
    }
}

class RenderBasket extends React.Component {
    renderBasketItems = null;
    currentPhase = "Normal"

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.currentPhase = "Updated"
    }

    componentWillUnmount() {
        this.renderBasketItems = null;
    }

    componentDidMount() {
        this.renderBasketItems = item.map(bask =>
            <li key={bask.id}>

                <p>
                    <b>{bask.name}</b>
                </p>
                <sub>
                    <p>{bask.count}</p>
                </sub>
                <sub>
                    <p>${bask.price}</p>
                </sub>
            </li>
        );
    }

    render() {

        return (
            <>
                <h3>Session Item is: {this.props.sessionItem}</h3>
                <h4>Session Status is: {this.currentPhase}</h4>
                <ul>{this.renderBasketItems}</ul>
            </>
        )
    }
}

class ChangeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formItem: this.props.default,
        }
    }

    onSubmit = (event) => {
        this.props.parentCallback(event.target.formItem.value);

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                    <DynInput
                        type="text"
                        name="formItem"
                        prompt="New Item"
                        label="Eggs, Milk"
                    />
                    <br></br>
                    <DynInput type="submit" val="Submit"/>
                    <br></br><br></br>
                </form>
            </div>
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

export default Basket;