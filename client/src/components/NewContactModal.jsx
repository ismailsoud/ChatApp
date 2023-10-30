import React, { useRef } from "react";
import { useContacts } from "../contexts/ContatsProvider";

export default function NewContact({ closeAdd }) {
  const idRef = useRef()
  const nameRef = useRef()
  const {createContact} = useContacts()
  function handleSubmit(e){
    e.preventDefault()
    createContact(idRef.current.value, nameRef.current.value)
    closeAdd()
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center fixed inset-0 backdrop-blur-sm bg-opacite-90 z-10">
      <form onSubmit={handleSubmit} className="bg-offWhite relative flex justify-center items-center flex-col  h-1/3 w-2/3 max-w-sm mb-56 rounded-xl">
        <button
          type="reset"
          onClick={closeAdd}
          className="absolute top-0 right-0 mr-5 mt-4 hover:opacity-70"
        >
          <svg
            width="15px"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.148 12.48l5.665-5.66a4.002 4.002 0 000-5.66 3.996 3.996 0 00-5.665 0l-5.664 5.66L6.82 1.16a3.994 3.994 0 00-5.664 0 4.002 4.002 0 000 5.66l5.664 5.66-5.664 5.67a4.002 4.002 0 000 5.66 3.994 3.994 0 005.664 0l5.664-5.66 5.664 5.66a3.996 3.996 0 005.665 0 4.002 4.002 0 000-5.66l-5.665-5.67"
              fill="#393E46"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <h1 className="font-medium text-lg">Add new contact</h1>
        <div className="flex flex-col">
          <span>id</span>
          <input
            ref={idRef}
            required
            type="text"
            className="px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
          />
        </div>
        <div className="flex flex-col">
          <span>name</span>
          <input
            ref={nameRef}
            required
            type="text"
            className="px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
          />
        </div>
        <button
          type="submit"
          className="text-white w-1/2 bg-dark-purple text-offWhite
                      hover:opacity-90
                      font-medium rounded-lg text-sm 
                      px-5 py-2.5 text-center mb-2"
        >
          Add
        </button>
      </form>
    </div>
  );
}
