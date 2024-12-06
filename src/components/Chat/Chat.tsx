import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'

function Chat() {
  return (
    <div className='chat'>
      {/* Chatheader */}
      <ChatHeader />
      {/* chatmessage */}
      <div className='chatMessage'></div>
      {/* chatInput */}
      <div className='chatInput'></div>
    </div>
  )
}

export default Chat
