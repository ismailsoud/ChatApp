import React from 'react'


export default function DellModal({closeDell}) {
  function handleSubmit(e){
    e.preventDefault()
    localStorage.clear();
    window.location.reload();
    closeDell()
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center fixed inset-0 backdrop-blur-sm bg-opacite-90 z-10">
      <form onSubmit={handleSubmit} className="bg-offWhite relative flex justify-center items-center flex-col  min-h-1/3 w-2/3 max-w-sm mb-56 rounded-xl">
        <button
          type="reset"
          onClick={closeDell}
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
        <div className='w-full h-full flex justify-center items-center flex-col pt-8 px-3'>
          <span className='text-lg items-center font-bold text-slate-800 p-5'>Are you sure you want to delete your local storage data?This action will:</span>
          <ul className='list-disc font-semibold text-slate-900'>
            <li>Remove your unique ChatApp ID</li>
            <li>Clear all contacts you've added</li>
            <li>Delete your conversation history</li>
          </ul>  
          <span className='text-lg p-6 items-center font-bold text-slate-800'>Are you sure you want to proceed?</span>
        </div>
        <div className='flex justify-center items-center space-x-5'>
          <button
            type="reset"
            onClick={closeDell}
            className="text-white w-1/2 bg-slate-800 text-offWhite
                        hover:opacity-90
                        font-medium rounded-lg text-sm 
                        px-5 py-2.5 text-center mb-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white w-1/2 bg-dark-purple text-offWhite
                        hover:opacity-90
                        font-medium rounded-lg text-sm 
                        px-5 py-2.5 text-center mb-2"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
