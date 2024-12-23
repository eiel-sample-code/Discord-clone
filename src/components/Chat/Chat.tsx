import React, { useState } from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { collection, CollectionReference,DocumentData, DocumentReference, serverTimestamp,addDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Chat() {
  const [inputText, setInputText] = useState<string>("");
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);

  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // channelsコレクションの中のmessageコレクションの中にメッセージ情報を入れる
     const collectionRef: CollectionReference<DocumentData> = collection(
      db, 
      "channels", 
      String(channelId), 
      "messages");

      const docRef: DocumentReference<DocumentData> =  await addDoc(collectionRef, {
        message: inputText,
        timestamp: serverTimestamp(),
        user: user,
      });
      console.log(docRef);
  }

  return (
    <div className='chat'>
      {/* Chatheader */}
      <ChatHeader channelName={channelName}/>
      {/* chatmessage */}
      <div className='chatMessage'>
        <ChatMessage/>
      </div>
      {/* chatInput */}
      <div className='chatInput'>
        <AddCircleOutlineIcon/>
        <form>
            <input type='text' placeholder='#Udemyへメッセージを送信' onChange={(e: React.ChangeEvent) => setInputText(e.target.value)}></input>
            <button type='submit' className='chatInputButton' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>
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
