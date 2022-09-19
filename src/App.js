import './App.scss';
import Card from "./components/Card";
import React, {useState} from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import SearchBlock from "./components/SearchBlock";

function App() {

    return (
        <div className="wrapper clear">

            <Drawer/>

            <Header/>

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-30">
                    <h1>Все кроссовки</h1>
                    <SearchBlock/>
                </div>
                <div className="d-flex">

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
            </div>

        </div>
    );
}

export default App;
//1.06.29
