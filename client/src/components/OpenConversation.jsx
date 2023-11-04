import React, { useState, useCallback } from 'react'
import { useConversations } from '../contexts/ConvesationsProvider'

export default function OpenConversation() {
  const [text, setText] = useState('')
  const {selectedConversation, sendMessage} = useConversations()
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])

  function handleSubmit(e){
    e.preventDefault()
    if(text&&selectedConversation){
      sendMessage(selectedConversation.recipients.map(r => r.id),text)
      setText('')
    }
  }

  return (
    <div className='h-screen w-full relative flex flex-col' >
      <div className='flex items-center justify-center h-90p'>
        <div className='flex flex-col w-9/12 p-5 space-y-4 h-full overflow-scroll'>
          {selectedConversation && selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            return(
            <div key={index} className={`flex ${message.fromMe ? 'justify-end' : 'justify-start'}`} ref={lastMessage? setRef : null}>
              <div className={`flex ${message.fromMe ? 'justify-end' : 'justify-start'} w-4/6`}>
                <div className={`whitespace-normal  p-2 ${message.fromMe ? 'justify-end text-end bg-slate-700' : 'justify-start text-right bg-purple-900'} text-offWhite text-md font-medium rounded-lg`}>
                  <div>{message.text}</div>
                  <div className='text-slate-400 text-sm'>{message.senderName}</div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
      <form className='flex items-center justify-center mb-6 w-full text-white' onSubmit={handleSubmit}>
        <div className='w-9/12 flex items-center justify-stretch border-2 border-dark-purple rounded-xl'>
          <textarea
            className="h-16 w-full rounded-xl bg-transparent px-8 py-4 outline-none focus:text-white focus:placeholder:opacity-70 overflow-hidden text-offwhite placeholder-offwhite"
            rows={1}
            placeholder="Send a message"
            style={{ resize: 'none' }}
            onChange={(e)=>setText(e.target.value)}
            value={text}
          ></textarea>
          <button className='w-10 h-10 text-white mr-4' type='submit'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 12H5.42m-.173.797L4.242 15.8c-.55 1.643-.826 2.465-.628 2.971.171.44.54.773.994.9.523.146 1.314-.21 2.894-.92l10.135-4.561c1.543-.695 2.314-1.042 2.553-1.524a1.5 1.5 0 000-1.33c-.239-.482-1.01-.83-2.553-1.524L7.485 5.243c-1.576-.71-2.364-1.064-2.887-.918a1.5 1.5 0 00-.994.897c-.198.505.074 1.325.618 2.966l1.026 3.091c.094.282.14.423.159.567a1.5 1.5 0 010 .385c-.02.144-.066.285-.16.566z" stroke="#451C87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </form>
    </div>
  )
}
