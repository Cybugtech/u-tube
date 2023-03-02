// import React from "react";
import {get_data} from "./pages/Search"
import {Random_api_data} from "./pages/Home"

let request_search_url = "https://www.googleapis.com/youtube/v3/search?"
let key = "AIzaSyA0TCZsoK-Cww2eFdAcohTm0_sjmNCBLGg" 
let part = "snippet"
// let type = ""
let max_result = "50"
let querry = ""
let prev_data 

let fetch_data=(user_data,is_random,user_filter)=>{

    querry = user_data
    console.log(user_filter)
    fetch(request_search_url+`${"part="}${part}${"&type="}${user_filter}${"&maxResults="}${max_result}${"&q="}${querry}${"&key="}${key}`)
    .then((response)=>{
       return response.json()
    })
    .then((data)=>{
        prev_data = data
        if(is_random == true){
            // console.log(prev_data)
            Random_api_data(prev_data)
        }else{
            // console.log(prev_data)
            get_data(prev_data)
        }
    })
    
}

export {fetch_data}