import './App.scss';
import Card from "./components/Card/Card";
import React, {useEffect, useState} from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import SearchBlock from "./components/SearchBlock";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {AppContext} from './context'
import axios from "axios";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const onClickCart = () => setCartOpened(prev => !prev);

    const onChangeInput = (e) => setSearchValue(e.target.value);

    const onAddToCart = (obj) => {
        axios.post('https://6328b158cc4c264fdee01416.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
    }

    const onAddToFavorite = (obj) => {
        axios.post('https://6328b158cc4c264fdee01416.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, obj])
    }

    //удаляем товары из корзины на фронте и беке
    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://6328b158cc4c264fdee01416.mockapi.io/cart/${id}`)
            setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(id)))
        } catch (e) {
            console.warn('Не удалось удалить товар из корзины: ', e)
        }
    }


    // useEffect(() => {
    //     fetch('https://6328b158cc4c264fdee01416.mockapi.io/items')
    //         .then(res => res.json())
    //         .then(json => setItems(json))
    // },[])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const {data} = await axios.get('https://6328b158cc4c264fdee01416.mockapi.io/items')
                setItems(data)
            } catch (e) {
                console.warn('Не удалось получить данные: ', e.message)
            }
        }
        const fetchCartItems = async () => {
            try {
                const {data} = await axios.get('https://6328b158cc4c264fdee01416.mockapi.io/cart')
                setCartItems(data)
            } catch (e) {
                console.warn('Не удалось получить данные: ', e.message)
            }
        }
        const fetchFavoritesItems = async () => {
            try {
                const {data} = await axios.get('https://6328b158cc4c264fdee01416.mockapi.io/favorites')
                setFavorites(data)
            } catch (e) {
                console.warn('Не удалось получить данные: ', e.message)
            }
        }

        fetchItems()
        fetchCartItems()
        fetchFavoritesItems()
    }, [])


    return (
        <AppContext.Provider value={{
            onClickCart,
            onChangeInput,
            searchValue,
            cartItems,
            setCartItems,
            favorites,
        }}>
            <div className="wrapper clear">

                {cartOpened && <Drawer onRemove={onRemoveItem}/>}

                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" element={
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
                                                    key={item.id}
                                                    title={item.title}
                                                    price={item.price}
                                                    imageUrl={item.imageUrl}
                                                    onPlus={() => onAddToCart(item)}
                                                    onFavorite={() => onAddToFavorite(item)}
                                                />
                                            ))
                                    }
                                </div>
                            </div>
                        }/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/orders" element={<Orders/>}/>
                    </Routes>
                </Router>
            </div>
        </AppContext.Provider>
    );
}

export default App;

