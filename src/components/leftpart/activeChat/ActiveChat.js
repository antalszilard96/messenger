import './ActiveChat.css';
import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd";

function ActiveChat(){
    const addChat = () => {
        window.alert('addchat')
      }
    return(
        <div className='active-chat'>
            <p>Active Chats</p>
            <button onClick={addChat} className='btnadd'><IoMdAdd className='addicon' /></button>
        </div>
    );
}

export default ActiveChat;