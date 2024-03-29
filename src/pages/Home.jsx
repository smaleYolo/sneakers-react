import React, {useContext} from 'react';
import SearchBlock from "../components/SearchBlock";
import {AppContext} from "../context";

import Card from "../components/Card/Card";

const Home = () => {
    const {items, searchValue, onAddToCart, onAddToFavorite, isLoading} = useContext(AppContext)

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()))


    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-30">
                <h1>Все кроссовки</h1>
                <SearchBlock/>
            </div>
            <div className="d-flex flex-wrap">
                {
                    (isLoading ? ([...Array(10)].map((item, index) => <Card key={index}/>))
                        :
                        (filteredItems
                            .map((item) => (
                                <Card
                                    key={item.id}
                                    onPlus={() => onAddToCart(item)}
                                    onFavorite={() => onAddToFavorite(item)}
                                    {...item}
                                />
                            ))))
                }
            </div>
        </div>
    );
};

export default Home;