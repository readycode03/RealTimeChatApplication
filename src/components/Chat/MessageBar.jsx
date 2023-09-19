import { useStateProvider } from "@/context/StateContext";
import { reducercases } from "@/context/constants";
import { ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import {ImAttachment} from "react-icons/im"
import { MdSend } from "react-icons/md";
import EmojiPicker from "emoji-picker-react"
function MessageBar() {
  const [{currentChatUser,userInfo,socket},dispatch] = useStateProvider();
  const [message, setmessage] = useState("");
  const [showemojiPicker, setshowemojiPicker] = useState(false);
  const handleemojimodel = ()=>{
    setshowemojiPicker(!showemojiPicker);
  }
  const handleemojiClick = (emoji)=>{
    setmessage((prev)=>(prev+=emoji.emoji));
  }
  const sendMsg = async()=>{
   try {
    const {data} = await axios.post(ADD_MESSAGE_ROUTE,{
      to:currentChatUser?.data.id,
      from:userInfo?.id,
      message
    }).then(console.log("sent successfully"))
    socket.current.emit("send-msg",{
      to:currentChatUser?.data.id,
      from:userInfo?.id,
      message:data.message,
    });
   dispatch({
    type:reducercases.ADD_MESSAGE,
    newMessage:{
      ...data.message,
    },
    fromSelf:true
   })
    setmessage("");
   } catch (error) {
    console.log(error);
   }
  }
  return <div className=" bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
    <>
    <div className="flex gap-6">
      <BsEmojiSmile
       className=" text-panel-header-icon cursor-pointer text-xl" title="Emoji" id="emoji-opener" onClick={handleemojimodel}
      />
      {
        showemojiPicker && <div className="absolute bottom-24 left-14 z-40">
          <EmojiPicker onEmojiClick={handleemojiClick} theme="dark" />
        </div>
      }
      <ImAttachment className=" text-panel-header-icon cursor-pointer text-xl" title="Attach File" />
    </div>
    <div className="w-full rounded-lg h-10 flex items-center">
      <input type="text" placeholder="Type your message" onChange={(e)=>setmessage(e.target.value)} value={message} className=" bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full" />
    </div>
    <div className="flex w-10 items-center justify-center ">
      <button>
        <MdSend className=" text-panel-header-icon cursor-pointer text-xl" title="Send message" onClick={sendMsg}/>
        {/* <FaMicrophone className=" text-panel-header-icon cursor-pointer text-xl" title="Record"/> */}
      </button>
    </div>
    </>
  </div>;
}

export default MessageBar;
