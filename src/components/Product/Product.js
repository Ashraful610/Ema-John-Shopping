import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({product,handleAddToCart}) => {
    const {name, img, price,seller,ratings} =product
    return (
        <div className='product'>
             <img src={img} alt="" />
            <div className='product-info'> 
                <h4 className='product.name'>{name}</h4>
                <h4>Price : { price}</h4>
                <h4>Seller : {seller}</h4>
                <h4>Ratings : {ratings}</h4>
            </div>
            <button onClick={()=>handleAddToCart (product)} className="btn-cart">
                <p>Add to cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;