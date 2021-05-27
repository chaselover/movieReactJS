import React from "react"
import { Link } from "react-router-dom";
import "./Navigation.css"

// link는 router안에서만 작동함!!!!! 
// about페이지로 object를 보낸다.

function Navigation(){
    return <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about"
    //     {
    //         {
    //         pathname:"/about",
    //         state: {
    //             fromNavigation: true
    //         }
    //     }
    // }
    >About</Link>
    </div>
}

export default Navigation;