import React, { useState } from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log('product props', props.product.key);
    const { img, name, price, seller, stock, key } = props.product;
    const { handelClick } = props;

    return (
        <div className="single-product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-description">
                <p className="product-name">
                    <Link to={"/product/" + key} >{name}</Link>
                </p>
                <p><small>by {seller}</small></p>
                <p>${price}</p>
                <p>{stock} Item left in stock</p>

                {
                    props.showAddToCart &&
                    <button
                        onClick={() => handelClick(props.product)}
                        className="addToCart">
                        <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                    </button>
                }
            </div>
        </div >
    );
};

export default Product;