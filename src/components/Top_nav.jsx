import React, { useRef } from "react";
import { fetch_data } from "../fetch_api"
import { NavLink } from "react-router-dom";


// get user input
let user_scearch_input
let is_random = false
let user_filter = ""

// call fetchdata function 
let search_btn_click = () => {
    fetch_data(user_scearch_input.current.value, is_random, user_filter)
}

let filter = event => {
    if (event.currentTarget.innerText == "Videos") {
        user_filter = event.currentTarget.innerText.slice(0, 5)
    } else {
        user_filter = event.currentTarget.innerText
    }
}




let Top_search = (props) => {

    const search_feild = useRef("")
    user_scearch_input = search_feild


    // nav toggle
    const leftnav = useRef("")
    const hambclick = () => {

        if (leftnav.current.classList == `${"left_navbar_cont"}`) {
            leftnav.current.classList = `${"left_navbar_cont show"}`
        } else {
            leftnav.current.classList = `${"left_navbar_cont"}`
        }
    }




    return (
        <>
            <section id="search_bar_section">
                <div className="top_search_con">
                    <div className="logo_cont_and_hambbar">
                        <i className="fa-solid fa-bars" onClick={hambclick}></i>
                        <NavLink to={"/"}>
                            <img src={require("../images/logo.png")} alt="" width={"120px"} />
                        </NavLink>
                    </div>
                    <div className="search_cont">
                        <input type="text" id="search_input" placeholder="Search" ref={search_feild} />
                        <NavLink to={"/search"}><button id="search_btn" onClick={search_btn_click}><i className="fa-solid fa-magnifying-glass"></i></button></NavLink>
                    </div>
                    <div className="user_cont">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                {/* filter section */}
                <div className="filter_section" style={props.display}>
                    <ul>
                        <li >Reset filter</li>
                        <li onClick={filter}>Videos</li>
                        <li onClick={filter}>Playlist</li>
                        <li onClick={filter}>Channel</li>
                    </ul>
                </div>
            </section>

            <section className="left_navbar_section">
                <div className="left_navbar_cont" ref={leftnav}>
                    <ul>
                        <NavLink to={"/"}>
                            <li><i className="fa-solid fa-house"></i>Home</li>
                        </NavLink>
                    </ul>
                </div>
            </section>

        </>);
};

export default Top_search;