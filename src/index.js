import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import '../src/css/index.css';
import "./components/css/Nav.css";
import "./components/css/search_card.css";
import "./components/css/channel_video_card.css"
import "./components/css/random_video_card.css"
import "./components/css/channel_about.css"
import "./css/search.css";
import "./css/home.css";
import "./css/player.css";
import "./css/channel.css"
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  // </React.StrictMode>
);

