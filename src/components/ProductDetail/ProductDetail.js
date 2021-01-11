import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {

    const { productKey } = useParams();


    const product = fakeData.find(pdKey => pdKey.key)

    return (
        <div>
            <h1>{productKey} Product Detail comming soon!</h1>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetail;