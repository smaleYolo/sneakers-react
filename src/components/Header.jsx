import React, {useContext} from 'react';
import {AppContext} from "../context";

const Header = () => {
    const {onClickCart} = useContext(AppContext)

    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img src="/img/logo.png" width={40} height={40} alt="logo"/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-20 cu-p" onClick={onClickCart}>
                    <img src="/img/cart.svg" width={18} height={18} alt="cart"/>
                    <span>1205 руб.</span>
                </li>
                <li className="mr-10">
                    <img src="/img/heart.svg" width={18} height={18} alt="heart"/>
                </li>
                <li>
                    <img src="/img/user.svg" width={18} height={18} alt="user"/>
                </li>
            </ul>
        </header>
    );
};

export default Header;