import React, {useContext} from 'react';
import {AppContext} from "../context";

const CartTotalBlock = ({onClickOrder, isLoading}) => {
    const { totalPrice } = useContext(AppContext)

    return (
        <div className="cartTotalBlock">
            <ul>
                <li>
                    <span>Итого: </span>
                    <div></div>
                    <b>{totalPrice} руб. </b>
                </li>
                <li>
                    <span>Налог 5%: </span>
                    <div></div>
                    <b>{Math.floor(totalPrice * 0.05)} руб. </b>
                </li>
            </ul>
            <button disabled={isLoading} className="greenButton" onClick={onClickOrder}>
                Оформить заказ <img src="sneakers-react/img/arrow.svg" alt="Arrow"/>
            </button>
        </div>
    );
};

export default CartTotalBlock;