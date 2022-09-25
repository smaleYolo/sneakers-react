import React from 'react';

const CartTotalBlock = () => {
    return (
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
    );
};

export default CartTotalBlock;