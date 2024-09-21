"use client";
import React, { useEffect, useRef, useState } from 'react'
import "./Chat.css";
import InMessage from './InMessage/InMessage';
import OutMessage from './OutMessage/OutMessage';

function Chat() {

    const [inputMessage, setInputMessage] = useState("")
    const messageEndRef = useRef(null)

    const [messages, setMessages ] = useState([
        {
            type : "in",
            uname : "Merry",
            message : "Hai Dude",
        },
        {
            type : "out",
            uname : "Adithyan",
            message : "Hai Merry",
        }
    ]);

    function handleSend() {
        if(inputMessage === "") return;
        
        setMessages((prev) => [...prev, {type : 'out', name : 'Adithyan', message : inputMessage}]);
        setInputMessage("");
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth' // You can also use 'auto' for instant scrolling
          });
    }

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])
    
  return (
    <div className='chat'>
        <div className="chatwindow">
            {
                messages.map((message, index) => (
                    message.type === "in" ? (<InMessage userName={message.uname} message={message.message} key={index} />) : (<OutMessage message={message.message}/>)
                ))
            }
            <div ref={messageEndRef} />
        </div>
        <div className="messagetype">
            <input type="text" className='msginput' placeholder='Enter Message to Send' value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? handleSend() : null}/>
            <button className='sendbtn' onClick={handleSend}>Send</button>
        </div>
    </div>
  )
}

export default Chat