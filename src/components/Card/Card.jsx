import React, {useContext} from 'react';
import styles from './Card.module.scss';
import {AppContext} from "../../context";
import Skeleton from "../Skeleton";

import heartLiked from '../../assets/icons/heart-liked.svg'
import heartUnLiked from '../../assets/icons/heart-unliked.svg'
import btnChecked from '../../assets/icons/btn-checked.svg'
import btnPlus from '../../assets/icons/btn-plus.svg'

const Card = ({
                  id,
                  parentId,
                  title,
                  price,
                  imageUrl,
                  onFavorite,
                  onPlus,
                  notOrder = true
              }) => {


    const {isLoading, isItemAdded, isItemFavorited, favorites} = useContext(AppContext)


    // const obj = {id, parentId: id, title, price, imageUrl}

    const onClickPlus = () => {
        onPlus({id, parentId, title, price, imageUrl})
    }

    const onClickLike = () => {
        onFavorite({id, parentId, title, price, imageUrl})
    }


    return (
        <div className={styles.card}>
            {isLoading ? (
                <Skeleton/>
            ) : (
                <>
                    {notOrder && <div className={styles.favorite} onClick={onClickLike}>
                        <img src={isItemFavorited(parentId) ? heartLiked : heartUnLiked} alt="Unliked"/>
                    </div>}
                    <img width={133} height={112} src={imageUrl} alt=""/>
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        {notOrder && <div className="button" onClick={onClickPlus}>
                            <img src={isItemAdded(id) ? btnChecked : btnPlus} alt="add"/>
                        </div>}
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;