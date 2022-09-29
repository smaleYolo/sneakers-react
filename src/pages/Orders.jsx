import React from 'react';
import Card from "../components/Card/Card";
import Info from "../components/Info";

const Orders = () => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-30">
                <h1>Мои покупки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    [].length > 0 ? ([]
                        .map((item) => (
                            <Card
                                key={item.id}
                                {...item}
                            />
                        ))) : (
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
        </div>
    );
};

export default Orders;