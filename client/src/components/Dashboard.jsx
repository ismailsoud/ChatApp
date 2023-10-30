import React, { useState } from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'

export default function Dashboard({id}) {
  return (
    <div 
    className='h-screen fixed w-full flex backGroundMush'>
        <div className='flex w-full'>
          <Sidebar id={id}/>
          <OpenConversation />
        </div>
    </div>
    
  )
}