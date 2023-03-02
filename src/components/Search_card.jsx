import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Set_player_url } from "../pages/Player"
import { Get_channel_playlist } from "../Channel_data_api"


// let video_card

let video_cardclick = event => {
    Set_player_url(event.currentTarget.id)
    // console.log(event)
}

let channel_card_click = (event) => {
    // console.log(event.currentTarget.id)
    Get_channel_playlist(event.currentTarget.id)
}



let Channel_search_card = (props) => {


    return (<>
        <NavLink to={"/channel"}>
            <div className="channelcard card" id={props.card_index} onClick={channel_card_click}>
                <div className="channelcard_thumb card_thumbnail">
                    <img src={props.img} alt="" />
                </div>
                <div className="channelcard_name_and_other title_and_other">
                    <h1>{props.channel_name}</h1>
                    <h4>68k views . 1 day ago</h4>
                    <h5>{props.desc}</h5>
                </div>
            </div>
        </NavLink>

    </>)
}



let Video_search_card = (props) => {
    return (
        <>
            <NavLink to={"/player"} >
                <div className='card' id={props.card_index} onClick={video_cardclick} >
                    <div className="card_thumbnail">
                        <img src={props.thumbnail} alt="" />
                    </div>
                    <div className="title_and_other">
                        <h1>{props.title}</h1>
                        <h4>68k views . 1 day ago</h4>
                        <div className="card_channel_icon_name">
                            <img src={require("../images/channel.jpg")} alt="" />
                            <h5>{props.channel_name}</h5>
                        </div>
                        <h5>{props.desc}</h5>
                    </div>
                </div>
            </NavLink>


        </>);
};

export { Channel_search_card, Video_search_card };