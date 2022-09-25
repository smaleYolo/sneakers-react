import React, {useContext} from 'react';
import {AppContext} from "../context";

const CartEmpty = () => {
    const {onClickCart} = useContext(AppContext)

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img src="/img/box-cart-empty.png" alt="Empty" width={120} height={120}/>
            <h2>Корзина пуста</h2>
            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="greenButton" onClick={onClickCart}>
                <img src="/img/arrow-rr.svg" alt="arrow-rr"/>Вернуться назад
            </button>
        </div>
    );
};

export default CartEmpty;