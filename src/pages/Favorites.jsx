import React, {useContext} from 'react';
import {AppContext} from "../context";
import Card from "../components/Card/Card";

const Favorites = () => {
    const {favorites} = useContext(AppContext)

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-30">
                <h1>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    favorites
                        .map((item) => (
                            <Card
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default Favorites;