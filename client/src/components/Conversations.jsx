import React, { useState } from 'react'
import { useConversations } from '../contexts/ConvesationsProvider'


export default function Conversations() {
  const {conversations, setSelectedConversation, selectedConversationIndex} = useConversations()
  return (
    <div className='flex flex-col w-full h-full absolute space-y-5 p-5 overflow-scroll'>
      {conversations?.map((conversation,index) => (
        <div key={index} className={`flex flex-col rounded-lg p-2 cursor-pointer hover:bg-purple-900 ${selectedConversationIndex==index?'bg-purple-900':'bg-slate-900'}`} onClick={()=>setSelectedConversation(index)}>
          <p className='text-fit text-offWhite'>{conversation.recipients.map(recipient=>recipient.name).join(', ')}</p>
        </div>
      ))}
    </div>
  )
}
