import React from 'react'
import Login from './Login'
import uselocalStorage from '../hooks/UselocalStorage'
import Dashboard from './Dashboard'
import { ContatsProvider } from '../contexts/ContatsProvider'
import { ConversationsProvider } from '../contexts/ConvesationsProvider'
import { SocketProvider } from '../contexts/SocketProvider'

function App() {
  const [id, setId] = uselocalStorage('ID')
  const dashboard = (
    <SocketProvider id={id}>
      <ContatsProvider >
        <ConversationsProvider id={id}>
          <Dashboard id={id}/>
        </ConversationsProvider>
      </ContatsProvider>
    </SocketProvider>
  )
  return (
      id ? dashboard : <Login idSubmit={setId}/>
  )
}

export default App
