import React, {useState} from 'react';
import styles from './Card.module.scss';

const Card = ({title, price, imageUrl}) => {
    const [liked, setLikes] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        setIsAdded(prev => !prev)
    }

    const onClickLike = () => {
        setLikes(prev => !prev)
    }

    return (
        <div className={styles.card}>
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
                    <img src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="add"/>
                </div>
            </div>
        </div>
    );
};

export default Card;