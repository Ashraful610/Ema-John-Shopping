import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviesItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const [products, setProducts] = useProducts()
    const  [cart , setCart] = useCart(products)
    const nevigate = useNavigate()
    const handleRemoveItem = product => {
      const rest = cart.filter(pd => pd.id !== product.id)
      setCart(rest)
      removeFromDb(product.id)
    }
    return (
      <div className='shop-container'>
          <div className="review-item-container">
                    {
                        cart.map(product => <ReviewItem 
                            key={product.id}
                            product={product}
                            handleRemoveItem ={handleRemoveItem}
                            ></ReviewItem>)
                    }
          </div>
            <div className="cart-container">
                <Cart cart={cart}>
                  <button onClick={()=> nevigate('/shipment')}>Proceed Checker</button>
                </Cart>
            </div>
      </div>
    );
};

export default Orders;