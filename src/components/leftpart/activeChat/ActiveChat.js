import './ActiveChat.css';
import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd";

function ActiveChat(){
    return(
        <div className='active-chat'>
            <p>Active Chats</p>
            <button className='btnadd'><IoMdAdd className='addicon' /></button>
        </div>
    );
}

export default ActiveChat;