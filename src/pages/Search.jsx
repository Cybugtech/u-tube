import React, { useEffect, useState } from "react";
import Top_nav from "../components/Top_nav"
import {Channel_search_card, Video_search_card } from "../components/Search_card"
import { render } from "@testing-library/react";


let fatched_video_data = []

let get_data = (api_current_data) => {
  fatched_video_data = api_current_data.items
  console.log(fatched_video_data)
}


let set_data = (index) => {

  if (index.id.kind == "youtube#channel") {
    return (
      <Channel_search_card img={index.snippet.thumbnails.high.url} channel_name={index.snippet.channelTitle} desc={index.snippet.description} card_index={index.id.channelId}/>
    )
  }
  else if(index.id.kind == "youtube#playlist"){
    return(
      <Video_search_card thumbnail={index.snippet.thumbnails.high.url} title="playlist" channel_name={index.snippet.channelTitle} desc="playlist"  />
    )
  }
  else {
    return (
      <Video_search_card thumbnail={index.snippet.thumbnails.high.url} title={index.snippet.title} channel_name={index.snippet.channelTitle} desc={index.snippet.description} card_index={index.id.videoId} />
    )
  }
}


let Search = () => {
  const [present_state, updated_state] = useState([])

  setInterval(() => {
    updated_state(fatched_video_data)

  }, 1000);


  return (
    <>
      <Top_nav />
      <section id="search_result">
        {present_state.map(set_data)}
      </section>
    </>);
};

export { get_data, Search };