import React from 'react';

import removeBtn from '../assets/icons/btn-remove.svg'

const CartItem = ({title, price, imageUrl, onRemove}) => {
    return (
        <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="cartItemImg">

            </div>

            <div className="mr-20 flex">
                <p className="mb-5">{title}</p>
                <b>{price} руб.</b>
            </div>
            <img className="removeBtn" src={removeBtn} alt="Remove" onClick={onRemove}/>
        </div>
    );
};

export default CartItem;