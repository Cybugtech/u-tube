import React, { useRef } from "react";
import Top_nav from "../components/Top_nav"

let embed_url = "https://www.youtube.com/embed/"
let hold_data

let Set_player_url = (video_id) => {
     console.log(video_id)
     hold_data = video_id
     embed_url = `https://www.youtube.com/embed/${hold_data}`
}



let Player = () => {

     return (
          <>
               <Top_nav display={{ display: "none" }} />


               <div className="utube_main_frame_cont">
                    <div className="main_frame">
                         <iframe src={embed_url} className="utubeVideo_frame"></iframe>
                    </div>
                    <div className="frame_video_info">
                         <div className="frame_video_title">
                              <h3>Independence day special🇮🇳🇮🇳⚡| BGMI MONTAGE | OnePlus,9R,9,8T,7T,,7,6T,8,N105G,N100,Nord,NeverSettle</h3>
                         </div>
                         <div className="frame_channel_name">
                              <h2>Strain op</h2>
                         </div>
                    </div>
               </div>
          </>);
};

export { Set_player_url, Player };