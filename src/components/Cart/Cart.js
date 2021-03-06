import React from 'react';
import './Cart.css'
const Cart = (props) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of props.cart){
        quantity += product.quantity 
        total+= product.price * quantity
        shipping+= product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = tax + total + shipping
    return (
        <div className='cart'>
             <h3> Order Summary</h3>
             <p>Selected Items : {quantity}</p>
             <p>Total Price :${total}</p>
             <p>Total Shipping :${shipping}</p>
             <p>Tax : {tax}</p>
             <h5>Grand total : {grandTotal.toFixed(2)}</h5>

             <p>{props.children}</p>
        </div>
    );
};

export default Cart;