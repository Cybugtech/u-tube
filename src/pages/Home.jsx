import React, { useEffect, useState } from "react";
import Top_nav from "../components/Top_nav"
import { fetch_data } from "../fetch_api";
import Random_video_card from "../components/Random_video_card"

let is_random = true
let is_refreshed = true
let random_video_data = []

let Random_api_data = (random_data) => {
    random_video_data = random_data.items
    // console.log(random_video_data)
}

let set_random_video_data = (index) => {
    return (
        <Random_video_card img={index.snippet.thumbnails.high.url} title={index.snippet.title} video_id={index.id.videoId} />
    )
}


let Home = () => {

    useEffect(() => {
        if(is_refreshed == true){
            fetch_data("", is_random,"video")
            is_refreshed = false
        }
    }, [])

    const [present_state, updated_state] = useState([])

    setInterval(() => {
        updated_state(random_video_data)
    }, 1000);



    return (
        <>
            <Top_nav />

            <section className="random_video_card_section">
                <div className="random_video_card_container">
                    {present_state.map(set_random_video_data)}
                </div>
            </section>
        </>);
};

export { Home, Random_api_data };