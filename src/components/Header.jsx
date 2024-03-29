import React, {useContext} from 'react';
import {AppContext} from "../context";
import {Link} from "react-router-dom";

import logoImg from '../assets/icons/logo.png'
import cartImg from '../assets/icons/cart.svg'
import heartImg from '../assets/icons/heart.svg'
import userImg from '../assets/icons/user.svg'

const Header = () => {
    const {onClickCart, setSearchValue, totalPrice} = useContext(AppContext)

    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <Link to='/'>
                    <img src={logoImg} width={40} height={40} alt="logo" onClick={() => setSearchValue('')}/>
                </Link>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-20 cu-p" onClick={onClickCart}>
                    <img src={cartImg} width={18} height={18} alt="cart"/>
                    <span>{totalPrice} руб.</span>
                </li>
                <Link to='/favorites'>
                    <li className="mr-10">
                        <img src={heartImg} width={18} height={18} alt="heart"/>
                    </li>
                </Link>
                <Link to='/orders'>
                    <li>
                        <img src={userImg} width={18} height={18} alt="user"/>
                    </li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;