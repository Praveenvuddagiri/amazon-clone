import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import auth from './firebase';


function Header() {
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <nav className='header'>
            <Link to='/'>
                <img className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='amazon-logo' />
                
            </Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={login} className='header__option'>
                        <span className='header__option1'>Hello {user? user.email: 'user'}</span>
                        <span className='header__option2'>{user? 'Sign Out': 'Sign In'} </span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__option1'>Returns</span>
                        <span className='header__option2'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__option1'>Your</span>
                        <span className='header__option2'>Prime</span>
                    </div>
                </Link>

                <Link to='/checkout' className='header__link'>
                    <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLine2 header__basketCount'>{basket.length}</span>
                    </div>
                </Link>
                
            </div>
            <Outlet />
        </nav>
    );
}

export default Header;