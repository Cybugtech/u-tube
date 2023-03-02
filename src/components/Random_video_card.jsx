import React from "react";
import { NavLink } from "react-router-dom";
import { Set_player_url } from "../pages/Player";


let random_card_click = event => {
    Set_player_url(event.currentTarget.id)
}

let Random_video_card = (props) => {
    return (<>
        <NavLink to={"/Player"}>
            <div className="random_video_card" id={props.video_id} onClick={random_card_click}>
                <div className="random_video_image">
                    <img src={props.img} width="340px" height="190px" alt="" />
                </div>
                <div className="random_video_info">
                    <h2>{props.title}</h2>
                </div>
            </div>
        </NavLink>
    </>)
};

export default Random_video_card;