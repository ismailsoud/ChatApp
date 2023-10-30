import React, {useContext, useState, useEffect, useCallback} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContatsProvider'
import { useSocket } from './SocketProvider'
const ConversationsContext = React.createContext()

//for easy use 
export function useConversations(){
  return useContext(ConversationsContext)
}

export function ConversationsProvider({ children, id }) {
  const [Conversations, setConversations] = useLocalStorage('conversations', [])
  const [selectedConversation, setSelectedConversation] = useState(0)
  
  const socket = useSocket()

  function createConversations(recipients){
    if(recipients.length != 0){
      setConversations(prevConversations=>{
        return [...prevConversations, {recipients, messages:[]}]
      })
    }
  } 

  const {contacts} = useContacts()
  
  const formatedConversations = Conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {
      const contact = contacts.find(contact => {
        return contact.id === recipient
      })
      const name = (contact && contact.name) || recipient
      return { id: recipient, name }
    })

    const messages = conversation.messages.map(message => {
      const contact = contacts.find(contact => {
        return contact.id === message.sender
      })
      const name = (contact && contact.name) || message.sender
      const fromMe = id === message.sender
      return { ...message, senderName: name, fromMe }
    })
    
    const selected = index === selectedConversation
    return { ...conversation, messages, recipients, selected }
  })

  const addMessageToconversation = useCallback(({recipients, text, sender})=>{
    setConversations(prevConversations=>{
      const newMessage = {sender, text}
      let madeChanges = false
      const newConversation = prevConversations.map(conversation=>{
        if(arrayEquality(conversation.recipients, recipients)){
          madeChanges = true
          return {...conversation, messages: [...conversation.messages, newMessage]}
        }
        return conversation
      })
      if(madeChanges){
        return newConversation
      }else{
        return [...prevConversations, {recipients, messages: [newMessage]}]
      }

    })
  },[setConversations])

  useEffect(() => {
    if (socket == null) return
    socket.on('receive-message', addMessageToconversation)
    
    socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`)})

    return () => socket.off('receive-message')
  }, [socket, addMessageToconversation])

  function sendMessage(recipients, text){
    socket.emit('send-message', { recipients, text })
    addMessageToconversation({recipients, text, sender: id})
  }

  const value = {
    conversations:formatedConversations,
    selectedConversation: formatedConversations[selectedConversation],
    selectedConversationIndex: selectedConversation,
    setSelectedConversation,
    sendMessage,
    createConversations
  }

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
}


function arrayEquality(a, b) {
  if (a.length !== b.length) return false

  a.sort()
  b.sort()

  return a.every((element, index) => {
    return element === b[index]
  })
}