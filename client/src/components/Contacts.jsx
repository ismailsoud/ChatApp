import React from 'react'
import { useContacts } from '../contexts/ContatsProvider'

export default function Contacts() {
  const {contacts} = useContacts()
  return (
    <div className='w-full bg-red-400'>
      <div className='flex flex-col w-full h-full absolute space-y-5 pb-20 p-5 overflow-scroll'>
        {contacts?.map((contact,index) => (
          <div key={index} className='flex flex-col bg-slate-900 rounded-lg p-2'>
            <p className='text-xl text-offWhite'>{contact.name}</p>
            <p className='text-slate-400'>id: <span className='text-slate-600'>{contact.id}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
