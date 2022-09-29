import React from 'react';

const CartTotalBlock = ({onClickOrder, isLoading}) => {
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
            <button disabled={isLoading} className="greenButton" onClick={onClickOrder}>
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/>
            </button>
        </div>
    );
};

export default CartTotalBlock;