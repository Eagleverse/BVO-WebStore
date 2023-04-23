import '../App.css';
import {Counter} from "../features/counter/counter";
import Capybara from "../graphic/stock/Bristol.zoo.capybara.jpg"
import {connect} from "react-redux";
import {item} from "../data/shopping/basket";
import React, {createContext, useContext, useEffect, useState} from "react";


const Product = () => {

    return <XFrameMain/>;
};


let XFrameMain = () => {

    const mySerial = 0;
    return (
        <>
            <div className={"Page-Head-Foot"}>
                <h1>Two Live Capybara</h1>
            </div>
            <div className={"Main"}>
                <link rel="stylesheet" href="../App.css"/>
                <h3>Product Info</h3>
                <>
                    <>
                        <RenderProduct>
                        </RenderProduct>
                    </>
                </>
                <h3>Configure Product (User)</h3>
                <>
                    <ConfigProduct serial={mySerial}></ConfigProduct>
                </>
            </div>
        </>
    )
}


function RenderProduct() {

    return (
        <>
            <img src={Capybara} alt="Two Capybara"/>
            <caption>Two Capybara, public domain via wikimedia commons</caption>
        </>
    )
}

const ConnectedCounter = connect(
    // Given Redux state, return props
    state => ({
        value: state.counter,
    }),
)(Counter)

function ProductRedux() {

    return (
        <>
            <ConnectedCounter></ConnectedCounter>
        </>
    )
}

function ConfigProduct(props) {
    const [product, setProduct] = useState("");
    useEffect(() => setProduct(item[props.serial].name), [props.serial]
    )
    return (
        <>
            <>
                <p>Name: {product}</p>
                <p>Select Quantity:{"\n"}
                    <ProductRedux></ProductRedux>
                    <p>Only available in coconut brown.</p>
                </p>
            </>
            <>
                <h3>Information</h3>
                <p>
                    <ProductPrice></ProductPrice>
                </p>

            </>
        </>
    );
}

const ProductContext = createContext();

function ProductPrice() {
    const [product] = useState(item);

    return (
        <ProductContext.Provider value={product}>
            <p>{`This product costs ${product[0].price}`}</p>
            <ProductID/>
        </ProductContext.Provider>
    );
}

function ProductID() {
    const itemInfo = useContext(ProductContext);

    return (
        <>
            <p>{"ID: " + itemInfo[0].id} </p>
        </>
    );
}

export default Product;