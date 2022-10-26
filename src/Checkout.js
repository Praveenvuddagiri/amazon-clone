import React from 'react';
import Header from './Header';
import { useStateValue } from './StateProvider';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <>
            <Header />
            <div className='checkout'>
                <div className='checkout__left'>

                    <img className='checkout__ad'
                        src="https://www.plerdy.com/wp-content/uploads/2020/01/11-1024x125.jpg"
                        alt=""
                    />
                    {basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is empty</h2>
                            <p>
                                You have no items in your basket. To buy one or more items,
                                click "Add to basket" next to the item.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2>Your Shopping Basket</h2>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    rating={item.rating}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    {basket.length > 0 && (
                        <div className='checkout__right'>
                            <Subtotal />
                        </div>
                    )}               
                </div>

            </div>
        </>
    );
}

export default Checkout;