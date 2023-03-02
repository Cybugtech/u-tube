import React from "react";
import { NavLink } from "react-router-dom";
import {Set_player_url} from "../pages/Player"


let Channel_video_card_click=(event)=>{
    Set_player_url(event.currentTarget.id)
}


let Channel_video_card = (props) => {
    return (<>

        <NavLink to={"/player"} >
            <div className="channel_video_card" id={props.video_id} onClick={Channel_video_card_click}>
                <div className="channel_video_image">
                    <img src={props.thumbnail} width="340px" height="190px" alt="" />
                </div>
                <div className="channel_video_info">
                    <h2>{props.title}</h2>
                </div>
            </div>
        </NavLink>

    </>)
};

export default Channel_video_card;