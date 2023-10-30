import React, { useState, useEffect } from "react";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewContact from "./NewContactModal";
import NewConversation from "./NewConversationModal"
import DellModal from "./DellModal";


const CONV_KEY = "conversations";
const CONT_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONV_KEY);
  const [addOpen, setAddOpne] = useState(false)
  const [dellOpen, setDellOpen] = useState(false)

  function closeAdd(){
    setAddOpne(false)
  }
  function closeDell(){
    setDellOpen(false)
  }

  //-----
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 660) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //-----------  


  return (
    <>
    <div className={`h-full flex flex-col w-4/12 min-w-[350px] lg:min-w-[350px] ${isSidebarOpen ? "open" : "hidden closed"}`}>
      <div className="flex flex-row w-full h-full border-r-2 border-slate-800">
        {/* side navbar */}
        <nav
          className="w-20 border-r-2 border-slate-800">  
          <div className="flex flex-col items-center pt-24">
            <button
              onClick={()=>setIsSidebarOpen(false)}
              className={`w-12 h-12 flex fixed top-0 mt-5 justify-center items-center rounded-full hover:bg-dark-purple text-white ${window.innerWidth >= 660?'hidden':''}`}
            >
              <svg width="30" height="30" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="M195.2 195.2a64 64 0 0190.496 0L512 421.504 738.304 195.2a64 64 0 0190.496 90.496L602.496 512 828.8 738.304a64 64 0 01-90.496 90.496L512 602.496 285.696 828.8a64 64 0 01-90.496-90.496L421.504 512 195.2 285.696a64 64 0 010-90.496z"/></svg>
            </button>
            <button
              onClick={()=>setActiveKey(CONV_KEY)}
              className={`w-12 h-12 flex justify-center items-center rounded-lg hover:bg-dark-purple hover:opacity-80 ${
                activeKey == CONV_KEY ? "bg-purple-900" : ""
              }`}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9h10M7 13h5m9 7l-3.324-1.662a4.161 4.161 0 00-.51-.234 2.007 2.007 0 00-.36-.085c-.139-.019-.28-.019-.561-.019H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C3 16.48 3 15.92 3 14.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C21 5.52 21 6.08 21 7.2V20z" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={()=>setActiveKey(CONT_KEY)}
              className={`w-12 h-12 mt-5 flex justify-center items-center rounded-lg hover:bg-dark-purple hover:opacity-80 ${
                activeKey == CONT_KEY ? "bg-purple-900" : ""
              }`}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 18a6.002 6.002 0 018.018-5.652c.343.122.671.275.982.455A5.965 5.965 0 0115 12a6.002 6.002 0 016 6v3h-5.25v-1.5h3.75V18a4.5 4.5 0 00-6.188-4.172A5.98 5.98 0 0115 18v3H3v-3zm6-6.75A3.748 3.748 0 015.25 7.5 3.75 3.75 0 0112 5.25a3.75 3.75 0 110 4.5 3.733 3.733 0 01-3 1.5zM13.5 18v1.5h-9V18a4.5 4.5 0 119 0zM11.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM15 5.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" fill="#FFF"/></svg>
            </button>
          </div>
        </nav>
        {/* top bar */}
        <div className="w-full h-full overflow-hidden relative">
          <div className="flex justify-between items-center h-20 border-b-2 border-slate-800">
            <div className="text-white font-bold text-xl ml-10 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-white via-purple-900 to-purple-900 bg-clip-text text-transparent ">{activeKey == CONV_KEY ? 'Conversations' : 'Contacts'}</div>
            <div className="">
              <button onClick={()=>setAddOpne(true)} className="flex items-center justify-center text-2xl text-purple-400 mr-10 w-10 h-10 rounded-full hover:opacity-70">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#5B0888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" data-name="add"><path d="M12 19V5M5 12h14"/></g></svg>
              </button>
            </div>
          </div>
          {activeKey == CONV_KEY ? <Conversations /> : <Contacts />}
        </div>
      </div>
      {/* footer */}
      <div className="text-slate-100 text-xl flex justify-center items-center border-r-2 border-t-2 border-slate-800 h-16">
        <button onClick={()=>setDellOpen(true)}>
          <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="M1 20a1 1 0 001 1h8a1 1 0 000-2H3.071A7.011 7.011 0 0110 13a5.044 5.044 0 10-3.377-1.337A9.01 9.01 0 001 20zm9-15a3 3 0 11-3 3 3 3 0 013-3zm12.707 9.707L20.414 17l2.293 2.293a1 1 0 11-1.414 1.414L19 18.414l-2.293 2.293a1 1 0 01-1.414-1.414L17.586 17l-2.293-2.293a1 1 0 011.414-1.414L19 15.586l2.293-2.293a1 1 0 011.414 1.414z"/></svg>
        </button>
        <div className="w-5/6 flex justify-center items-center">
          <span className="">My Id: <span className="text-purple-400">{id}</span></span>
        </div>
      </div>
    </div>
    {/* popups */}
    <div className={`${dellOpen?'':'hidden'}`}>
      <DellModal closeDell={closeDell}/>
    </div>
    <div className={`${addOpen?'':'hidden'}`}>
      {activeKey == CONV_KEY ? <NewConversation closeAdd={closeAdd}/> : <NewContact closeAdd={closeAdd}/>}
    </div>
    {/* hamburger menu */}

      {isSidebarOpen ? (
        <div className={`${addOpen ? "" : "hidden"}`}>
          {activeKey === CONV_KEY ? <NewConversation closeAdd={closeAdd} /> : <NewContact closeAdd={closeAdd} />}
        </div>
      ) : (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed m-4 p-2 rounded-md bg-transparent text-white z-50 h-screen"
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7l5 5-5 5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      )}
    </>
  );
}