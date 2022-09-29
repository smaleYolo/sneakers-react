import './App.scss';
import React, {useEffect, useState} from "react";
import {AppContext} from './context'
import axios from "axios";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Home from "./pages/Home";


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        async function fetchData() {
            try{
                const cartResponse = await axios.get('https://6328b158cc4c264fdee01416.mockapi.io/cart')
                const favoriteResponse = await axios.get('https://6328b158cc4c264fdee01416.mockapi.io/favorites')
                const itemsResponse = await axios.get('https://6328b158cc4c264fdee01416.mockapi.io/items')

                setCartItems(cartResponse.data)
                setFavorites(favoriteResponse.data)
                setItems(itemsResponse.data)

                setIsLoading(false)
            } catch (e) {
                console.warn('Loading data error...', e)
            }
        }
        fetchData()
    },[])

    const onClickCart = () => setCartOpened(prev => !prev);

    const onChangeInput = (e) => setSearchValue(e.target.value);

    const onAddToCart = async (obj) => {
        const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
        try {
            if (findItem) {
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
                await axios.delete(`https://6328b158cc4c264fdee01416.mockapi.io/cart/${findItem.id}`)
            } else {
                setCartItems((prev) => [...prev, obj])
                const {data} = await axios.post('https://6328b158cc4c264fdee01416.mockapi.io/cart', obj);
                setCartItems((prev) => prev.map(item => {
                    if(item.parentId === data.parentId) {
                        return {
                            ...item,
                            id: data.id
                        }
                    }
                    return item;
                }))
            }
        } catch (e) {
            alert(`Ошибка при добавлении в корзину`)
            console.log(e)
        }
    }

    // удаляем товары из корзины на фронте и беке
    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://6328b158cc4c264fdee01416.mockapi.io/cart/${id}`)
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        } catch (e) {
            alert(`Ошибка при удалении из корзины`)
            console.log(e)
        }
    }

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://6328b158cc4c264fdee01416.mockapi.io/favorites/${obj.id}`)
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            } else {
                const {data} = await axios.post('https://6328b158cc4c264fdee01416.mockapi.io/favorites', obj)
                setFavorites((prev) => [...prev, data])
            }
        } catch (e) {
            alert(`Ошибка при добавлении в фавориты`)
            console.log(e)
        }
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.parentId) === Number(id))
    }

    return (
        <AppContext.Provider value={{
            onAddToCart,
            onRemoveItem,
            onClickCart,
            onAddToFavorite,
            onChangeInput,
            searchValue,
            setSearchValue,
            cartItems,
            setCartItems,
            favorites,
            items,
            isLoading,
            setIsLoading,
            isItemAdded
        }}>
            <div className="wrapper clear">

                {cartOpened && <Drawer/>}

                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/orders" element={<Orders/>}/>
                    </Routes>
                </Router>
            </div>
        </AppContext.Provider>
    );
}

export default App;

