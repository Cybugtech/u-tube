import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Top_nav from "../components/Top_nav"
import Channel_video_card from "../components/Channel_video_card"

// let is_about = false
// let about_display = "none"


let playlist_data_arr = []
let channel_stats = []

let Playlist_video_data=(get_playlist_data,stats)=>{
     
    playlist_data_arr = get_playlist_data.items
    channel_stats = stats.items[0]
    // console.log(playlist_data_arr)
}


// set component using map
let set_channel_video_card_data=(index)=>{
    return(<>
          <Channel_video_card thumbnail={index.snippet.thumbnails.high.url} title={index.snippet.title} video_id={index.snippet.resourceId.videoId}/>
    </>)
}





let Channel = () => {

    // toggle about section
    let [current_display, updated_display] = useState("none")
    
    let channel_navigation = (event) => {
        if (event.currentTarget.innerText == "About") {
            updated_display("block")
        } else {
            updated_display("none")
        }
    }
    
    // change channel info
    let channel_img = useRef("")
    let channel_name = useRef("")
    let subs_count = useRef("")
    let channel_desc = useRef("")
    let join_date = useRef("")
    let channel_views = useRef("")

    let [current_playlist_data,updated_playlist_data] = useState([])

    setTimeout(() => {
        updated_playlist_data(playlist_data_arr)
        console.log(channel_stats)
        // change channel details
        channel_img.current.src = channel_stats.snippet.thumbnails.default.url
        channel_name.current.innerText = channel_stats.snippet.title
        console.log(channel_name.current.innerText)
        subs_count.current.innerText = channel_stats.statistics.subscriberCount+" subscribers"
        channel_desc.current.innerText = channel_stats.snippet.description
        join_date.current.innerText = channel_stats.snippet.publishedAt
        channel_views.current.innerText = channel_stats.statistics.subscriberCount+" Subscribers"
    }, 1000);


    return (<>
        <Top_nav display={{ display: "none" }} />

        <section className="channel_page_main_section">
            <div className="channel_banner">
                <img src={require("../images/banner.png")} alt="" />
            </div>
            <div className="channel_details_and_navigation">
                <div className="channel_details">
                    <div className="channel_logo">
                        <img src="" alt="" ref={channel_img}/>
                    </div>
                    <div className="channel_name_and_subs">
                        <h4 ref={channel_name}>channel_name</h4>
                        <h5 ref={subs_count}>1000 Subscribers</h5>
                    </div>
                </div>
                <div className="navigation">
                    <ul>
                        <li onClick={channel_navigation}>Video</li>
                        <li onClick={channel_navigation}>About</li>
                    </ul>
                </div>
            </div>

        </section>


      {/* channel about section */}

        <section className="channel_about_section" style={{display:current_display}}>
            <div className="channel_about">
                <div className="channel_description">
                    <h4>Description</h4>
                    <p ref={channel_desc}>channel_desc</p>
                </div>
                <div className="about_stats">
                    <ul>
                        <li>Stats</li>
                        <li ref={join_date}>join_date</li>
                        <li ref={channel_views}>views</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* video card section */}

        <section className="channel_toggle_section">

           {current_playlist_data.map(set_channel_video_card_data)}

        </section>



    </>)
};

export {Playlist_video_data,Channel};