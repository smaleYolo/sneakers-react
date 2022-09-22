import React, {useContext} from 'react';
import CartItem from "./CartItem";
import {AppContext} from "../context";

const Drawer = () => {
    const {onClickCart} = useContext(AppContext)

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between align-center mb-30">
                    Корзина
                    <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={onClickCart}/>
                </h2>

                <div className="items">
                    <CartItem/>
                    <CartItem/>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Drawer;