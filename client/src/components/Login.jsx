import React, { useRef } from "react";
import useLocalStorage from "../hooks/UselocalStorage";
export default function Login({idSubmit}) {
    const idRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        let generatedId = createId()
        idSubmit(generatedId)
    }

    function createId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let generatedId = '';
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedId += characters.charAt(randomIndex);
        }
        return generatedId
    }
    

    return (
        <div className="flex items-center flex-col h-screen absolute inset-0 backGroundMush fixed z-50">
            <div className="flex flex-col h-2/3 items-center justify-center px-5">
                <h1 className="text-offWhite text-5xl font-bold text-center">Welcome to chatApp</h1>
                <span className="text-slate-300 text-lg font-bold mt-6 text-center">Stat chatting, its simple, create an id, share it with your friend, and start chating</span>
            
            <form className="flex items-center flex-col w-full mt-14" onSubmit={handleSubmit}>
                    <button
                        type="submit"
                        className="w-[200px] h-[50px] text-white bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 
                        hover:bg-gradient-to-br hover:opacity-80
                        shadow-lg shadow-purple-800/80 font-medium rounded-lg text-lg
                        px-5 py-2.5 text-center mb-2"
                    >
                        Create Id
                    </button>
            </form>
            </div>
        <div className="text-slate-300 mt-6 fixed bottom-1 w-5/6">
            <p className="p-2 text-left">
            ChatApp operates using React.js and Socket.io for communication. You create your unique ID. This ID can be shared with friends, family, or colleagues. Once you've done that, you're ready to chat in real-time. There are no complex processes, just a simple and easy way to have instant conversations.
            </p>
            <p className="text-lg font-semibold text-left px-2">
            Want to see how it works? Check out the full source code on{' '}
            <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
            >
                GitHub
            </a>.
            </p>
            <div className="flex items-center justify-center mt-5">
                <span>Created By <span className="text-purple-500">SHMA3IN</span></span>
            </div>   
        </div>
    </div>
    );
}
