import {Route, Routes} from 'react-router-dom';
import React from "react";
import {Home} from "../src/pages/Home"
import {Player} from "../src/pages/Player"
import {Search} from "../src/pages/Search"
import {Channel} from "./pages/Channel"

let App = () => {
    return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/player' element={<Player/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/channel' element={<Channel/>}/>
        </Routes>
     </>);
};

export default App;
