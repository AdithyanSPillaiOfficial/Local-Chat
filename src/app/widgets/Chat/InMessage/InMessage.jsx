import React from 'react'
import "./InMessage.css"

function InMessage({message, userName}) {
  return (
    <div className='userchat'>
        <span className='namedisplay'>{userName}</span>
        <div className='messagedisplay'>{message}</div>
    </div>
  )
}

export default InMessage