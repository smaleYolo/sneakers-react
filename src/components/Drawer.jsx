import React from 'react';
import CartItem from "./CartItem";

const Drawer = () => {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between align-center mb-30">
                    Корзина
                    <img className="cu-p" src="/img/btn-remove.svg" alt="Remove"/>
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