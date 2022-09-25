import React, {useContext} from 'react';
import CartItem from "./CartItem";
import {AppContext} from "../context";
import CartEmpty from "./CartEmpty";
import CartTotalBlock from "./CartTotalBlock";

const Drawer = ({onRemove}) => {
    const {onClickCart, cartItems} = useContext(AppContext)


    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between align-center mb-30">
                    Корзина
                    <img className="cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClickCart}/>
                </h2>

                {cartItems.length ? (
                    <div className="d-flex flex-column flex">
                        <div className="items">
                            {
                                cartItems.map((obj, index) => (
                                    <CartItem
                                        key={index}
                                        title={obj.title}
                                        price={obj.price}
                                        imageUrl={obj.imageUrl}
                                        onRemove={() => onRemove(obj.id)}
                                    />
                                ))
                            }
                        </div>
                        <CartTotalBlock/>
                    </div>
                ) : (
                    <CartEmpty/>
                )}
            </div>
        </div>
    );
};

export default Drawer;