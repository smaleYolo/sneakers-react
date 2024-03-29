import React, {useContext, useState} from 'react';
import CartItem from "./CartItem";
import {AppContext} from "../context";
import Info from "./Info";
import CartTotalBlock from "./CartTotalBlock";
import axios from "axios";

import btnRemove from '../assets/icons/btn-remove.svg'
import orderCompleteImg from '../assets/icons/order-complete.jpeg'
import emptyCart from '../assets/icons/box-cart-empty.png'

const Drawer = () => {
    const {onClickCart, cartItems, onRemoveItem, setCartItems, setTotalPrice} = useContext(AppContext)

    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [orderComplete, setOrderComplete] = useState(false)

    const onClickOrder = async () => {
        try{
            const orderSum = cartItems.reduce((sum, current) => {
                return sum+=current.price
            },0)
            setIsLoading(true)
            const {data} = await axios.post('https://63ce9362fdfe2764c725fb55.mockapi.io/orders', {
                items: cartItems,
                orderPrice: orderSum
            })

            setOrderId(data.id)
            setOrderComplete(true)
            setCartItems([])
            setTotalPrice(prev => prev = 0)

            for (let i = 0; i < cartItems.length; i++){
                const item = cartItems[i]
                await axios.delete('https://63ce94b16d27349c2b7157d3.mockapi.io/cart/' + item.id)
            }

        } catch (e) {
            alert('Не удалось создать заказ')
        }
        setIsLoading(false)
    }

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between align-center mb-30">
                    Корзина
                    <img className="cu-p" src={btnRemove} alt="Close" onClick={onClickCart}/>
                </h2>

                {cartItems.length ? (
                    <div className="d-flex flex-column flex">
                        <div className="items">
                            {
                                cartItems.map((obj, index) => (
                                    <CartItem
                                        key={index}
                                        onRemove={() => onRemoveItem(obj.id)}
                                        {...obj}
                                    />
                                ))
                            }
                        </div>
                        <CartTotalBlock onClickOrder={onClickOrder} isLoading={isLoading}/>
                    </div>
                ) : (
                    <Info
                        title={orderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                        description={
                        orderComplete
                            ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                            : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                    }
                        imageUrl={orderComplete ? orderCompleteImg : emptyCart}
                        height={orderComplete ? 150 : 120}
                    />
                )}
            </div>
        </div>
    );
};

export default Drawer;