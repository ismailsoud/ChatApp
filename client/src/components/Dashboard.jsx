import React, { useState } from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'

export default function Dashboard({id}) {
  return (
    <div 
    className='h-[calc(100dvh)] absolute inset-0 fixed w-full flex backGroundMush overflow-hidden'>
        <div className='flex w-full'>
          <Sidebar id={id}/>
          <OpenConversation />
        </div>
    </div>
    
  )
}
