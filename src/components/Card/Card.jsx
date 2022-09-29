import React, {useContext, useState} from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader"
import {AppContext} from "../../context";
import Skeleton from "../Skeleton";

const Card = ({
                  id,
                  parentId,
                  title,
                  price,
                  imageUrl,
                  onFavorite,
                  onPlus,
                  favorited = false,
                  added = false
              }) => {

    const {isLoading, isItemAdded} = useContext(AppContext)
    const [liked, setLiked] = useState(favorited)

    // const obj = {id, parentId: id, title, price, imageUrl}

    const onClickPlus = () => {
        onPlus({id, parentId, title, price, imageUrl})
    }

    const onClickLike = () => {
        onFavorite({id, parentId, title, price, imageUrl})
        setLiked(prev => !prev)
    }


    return (
        <div className={styles.card}>
            {isLoading ? (
                <Skeleton/>
            ) : (
                <>
                    <div className={styles.favorite} onClick={onClickLike}>
                        <img src={liked ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked"/>
                    </div>
                    <img width={133} height={112} src={imageUrl} alt=""/>
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        <div className="button" onClick={onClickPlus}>
                            <img src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="add"/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;