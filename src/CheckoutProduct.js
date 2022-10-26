import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, title, image, rating, price }) {
    const [{},dispatch] = useStateValue();
    const RemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    return (
        <div className='checkoutProduct'>
            <img src={image} alt="" className='checkoutProduct__image'/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>
                    {title}
                </p>
                <p className='checkoutProduct__price'>
                    <small>₹</small> <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>
                                    <StarIcon
                                        className='checkoutproduct__ratingIcon' />
                                </p>
                            ))
                    }
                </div>
                <button onClick={RemoveFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;