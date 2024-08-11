"use client";
import React from 'react'

function TitleBar() {
    return (
        <div className="titlebar">
            <span>{sessionStorage.getItem('isLogedIn') ? sessionStorage.getItem('uname') : "Please Login"}</span>
            <div className='appname'>LOCAL CHAT</div>
            <div className="logoutbtn">Logout</div>
        </div>
    )
}

export default TitleBar