import {
    Playlist_video_data
} from "./pages/Channel"
// let channel_playlist_url = 

// let channel_id
let key = "AIzaSyA0TCZsoK-Cww2eFdAcohTm0_sjmNCBLGg"
let user_channel_id
let upload_playlist_id
let playlist_videos_data

let Get_channel_playlist = (channel_id) => {

    user_channel_id = channel_id

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channel_id}&key=${key}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            upload_playlist_id = data.items[0].contentDetails.relatedPlaylists.uploads
            Get_playlist_data()
        })
}

let Get_playlist_data = () => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${upload_playlist_id}&maxResults=50&key=${key}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            //   console.log(data)
            playlist_videos_data = data
            // Playlist_video_data(data)
            channel_stats_data()
        })
}

let channel_stats_data = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=${user_channel_id}&key=${key}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            //   console.log(data)
            Playlist_video_data(playlist_videos_data,data)
        })
}
export {Get_channel_playlist}