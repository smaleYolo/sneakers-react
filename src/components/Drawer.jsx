import React, {useContext, useState} from 'react';
import CartItem from "./CartItem";
import {AppContext} from "../context";
import Info from "./Info";
import CartTotalBlock from "./CartTotalBlock";
import axios from "axios";

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
            const {data} = await axios.post('https://6328b158cc4c264fdee01416.mockapi.io/orders', {
                items: cartItems,
                orderPrice: orderSum
            })

            setOrderId(data.id)
            setOrderComplete(true)
            setCartItems([])
            setTotalPrice(prev => prev = 0)

            for (let i = 0; i < cartItems.length; i++){
                const item = cartItems[i]
                await axios.delete('https://6328b158cc4c264fdee01416.mockapi.io/cart/' + item.id)
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
                    <img className="cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClickCart}/>
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
                        imageUrl={orderComplete ? "/img/order-complete.jpeg" : "/img/box-cart-empty.png"}
                        height={orderComplete ? 150 : 120}
                    />
                )}
            </div>
        </div>
    );
};

export default Drawer;