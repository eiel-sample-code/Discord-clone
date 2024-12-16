import React from 'react'
import { Avatar } from "@mui/material"
import "./ChatMessage.scss"

function ChatMessage() {
  return (
    <div className='message'>
      <Avatar/>
      <div className='messageInfo'>
        <h4>
            Haru
            <span className='messageTimeStamp'>2024/12/6</span>
        </h4>

        <p>メッセージ本文</p>
      </div>
    </div>
  )
}

export default ChatMessage
