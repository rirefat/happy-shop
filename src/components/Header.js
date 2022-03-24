import React from 'react';
import './Header.css'
import Logo from '../images/happy-shop-icon.png';


const Header = () => {
    return (
        <nav>
            <div className="icon-area">
                <img src={Logo} alt="" srcset="" />
            </div>
            <div className="menu-bar">
                <a href="/home">Home</a>
                <a href="/home" className='cart-menu-title'>Cart</a>
                {/* <span className='cart-items'>0</span> */}
                <a href="/home">Login</a>
            </div>
        </nav>
    );
};

export default Header;