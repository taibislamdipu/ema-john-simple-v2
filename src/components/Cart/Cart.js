import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart;

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);


    return (
        <div>
            <h1>Order Summary</h1>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Product Price: 0</p>
            <p>Shipings Cost: 0</p>
            <p>Tax + Vat: 0.00</p>
            <p>Total Price: <b>{totalPrice.toFixed(2)}</b></p>
        </div>
    );
};

export default Cart;