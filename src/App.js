import './App.scss';
import Card from "./components/Card/Card";
import React, {useEffect, useState} from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import SearchBlock from "./components/SearchBlock";

import {AppContext} from './context'
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);

    const [searchValue, setSearchValue] = useState('');

    const onClickCart = () => setCartOpened(prev => !prev);

    const onChangeInput = (e) => setSearchValue(e.target.value);


    // useEffect(() => {
    //     fetch('https://6328b158cc4c264fdee01416.mockapi.io/items')
    //         .then(res => res.json())
    //         .then(json => setItems(json))
    // },[])

    useEffect(() => {
        async function fetchItems() {
           try {
               const {data} = await axios.get('https://6328b158cc4c264fdee01416.mockapi.io/items')
               setItems(data)
           } catch (e) {
               console.warn('Не удалось получить данные: ', e.message)
           }
        }

        fetchItems()
    },[])

    console.log(items)

    return (
        <AppContext.Provider value={{onClickCart, onChangeInput, searchValue}}>
            <div className="wrapper clear">

                {cartOpened && <Drawer/>}

                <Header/>

                <div className="content p-40">
                    <div className="d-flex align-center justify-between mb-30">
                        <h1>Все кроссовки</h1>
                        <SearchBlock/>
                    </div>
                    <div className="d-flex flex-wrap">
                        {
                            items
                                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                                .map((item) => (
                                <Card
                                    key={item.imageUrl}
                                    title={item.title}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                />
                            ))
                        }
                    </div>
                </div>

            </div>
        </AppContext.Provider>
    );
}

export default App;
//1.23.31
