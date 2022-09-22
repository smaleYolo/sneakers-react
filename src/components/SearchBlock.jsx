import React, {useContext, useState} from 'react';
import {AppContext} from "../context";

const SearchBlock = () => {
    const {searchValue, onChangeInput} = useContext(AppContext)

    return (
        <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" width={19} height={19}/>
            <input placeholder="Поиск..." value={searchValue} onChange={onChangeInput}/>
        </div>
    );
};

export default SearchBlock;