import React, {useContext} from 'react';
import Card from "../components/Card/Card";
import Info from "../components/Info";
import {AppContext} from "../context";

const Orders = () => {
    const {orders} = useContext(AppContext)

    console.log(orders.map((item) => item.items))


    return (
        <div className="content p-40 order">
            <div className="d-flex align-center justify-between mb-30">
                <h1>Мои покупки</h1>
            </div>
            {
                orders.length > 0 ? (
                    <div className="orderItem">
                        {
                            orders.map((item) => (
                                <div key={item.id} className="mb-30 bordered">
                                    <div className="d-flex align-center justify-between mb-30">
                                        <h2>Заказ #{item.id}</h2>
                                        <h3>Сумма: <span>{item.orderPrice} руб.</span></h3>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                        {
                                            item.items.map((obj,index) => (
                                                <Card
                                                    {...obj}
                                                    key={index}
                                                    notOrder={false}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <Info
                        title={'У вас нет заказов'}
                        height={70}
                        width={70}
                        description={'У Вас еще нет заказов? Оформите хотя бы один заказ.'}
                        imageUrl={"/img/sad_2.png"}
                        isBtn={false}
                    />
                )
            }
        </div>
    );
};

export default Orders;