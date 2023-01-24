import React, {useContext} from 'react';
import {AppContext} from "../context";
import Card from "../components/Card/Card";
import Info from "../components/Info";

const Favorites = () => {
    const {favorites, onAddToFavorite} = useContext(AppContext)

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-30">
                <h1>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    favorites.length > 0 ? (favorites
                        .map((item) => (
                            <Card
                                key={item.id}
                                onFavorite={() => onAddToFavorite(item)}
                                {...item}
                            />
                        ))) : (
                        <Info
                            title={'Закладок нет :('}
                            height={70}
                            width={70}
                            description={'Вы ничего не добавляли в закладки'}
                            imageUrl={"sneakers-react/img/sad.png"}
                            isBtn={false}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Favorites;