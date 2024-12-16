import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';

function Chat() {
  return (
    <div className='chat'>
      {/* Chatheader */}
      <ChatHeader />
      {/* chatmessage */}
      <div className='chatMessage'>
        <ChatMessage/>
      </div>
      {/* chatInput */}
      <div className='chatInput'>
        <AddCircleOutlineIcon/>
        <form>
            <input type='text' placeholder='#Udemyへメッセージを送信'></input>
            <button type='submit' className='chatInputButton'>
                送信
            </button>
        </form>

        <div className='chatInputIcons'>
            <CardGiftcardIcon/>
            <GifIcon/>
            <EmojiEmotionsIcon/>
        </div>
      </div>
    </div>
  )
}

export default Chat
