import React from 'react'
import "./OutMessage.css"

function OutMessage({message}) {
  return (
    <div className='outchat'>
        <div className='messagedisplayout'>{message}</div>
    </div>
  )
}

export default OutMessage