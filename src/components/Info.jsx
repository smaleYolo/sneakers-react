import React, {useContext} from 'react';
import {AppContext} from "../context";

import arrowRr from '../assets/icons/arrow-rr.svg'

const Info = ({title, description, imageUrl, isBtn = true, width = 120, height = 120}) => {
    const {onClickCart} = useContext(AppContext)

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
                src={imageUrl}
                alt="Empty"
                width={width}
                height={height}
            />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            {isBtn && <button className="greenButton" onClick={onClickCart}>
                <img src={arrowRr} alt="arrow-rr"/>Вернуться назад
            </button>}
        </div>
    );
};

export default Info;