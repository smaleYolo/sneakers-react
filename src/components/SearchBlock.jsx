import React from 'react';

const SearchBlock = () => {
    return (
        <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" width={19} height={19}/>
            <input placeholder="Поиск..."/>
        </div>
    );
};

export default SearchBlock;