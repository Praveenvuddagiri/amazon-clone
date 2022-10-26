import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';
function Product(props) {
    
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: props.id,
                title: props.title,
                rating: props.rating,
                price: props.price,
                image: props.image,
            },
        });
    };
    
    return (
        <div className='product'>
            <div className='product__Info'>
                <p>{props.title}</p>
                <p className='product__price'>
                    ₹ {props.price}
                </p>
                <div className='product__rating'>
                    {
                        Array(props.rating)
                            .fill()
                            .map((_) => (
                                <p>
                                    <StarIcon
                                        className='product__ratingIcon' />
                                </p>
                            ))
                    }
                </div>
            </div>

            <img src={props.image} alt="" />
            <button onClick={addToBasket}>
                Add to basket
            </button>
        </div>
    );
}

export default Product;