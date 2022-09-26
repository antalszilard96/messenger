import './Reply.css'
import { FaRegSmile } from "@react-icons/all-files/fa/FaRegSmile";
import { FiSend } from "@react-icons/all-files/fi/FiSend";
import { useState} from "react";
import { useDispatch } from 'react-redux';

import { msgAdded } from '../../../features/msg/msgSlice';

const Reply = () => {

    const dispatch = useDispatch()
    const [message, setMsg] = useState('')
    const onMsgChanged = e => setMsg(e.target.value)

    const onSendMsg = e => {
        e.preventDefault();

        if(message) {
            dispatch(
                msgAdded(message)
            )
            setMsg('')
        }
    }

    return ( 
        <div className='reply'>
            <form onSubmit={onSendMsg} className="reply-form" >
            <input 
                className="reply-input" 
                type="text" 
                id="search" 
                placeholder="Enter your message here"
                value={message}
                onChange={onMsgChanged}
             />
            <button className='emo-button'>
                <FaRegSmile className='smile-icon' />
            </button>
            <button 
            className="reply-button" 
            type='button'
            onClick={onSendMsg}
            >
                <FiSend className='send-icon' />
            </button>
        </form>
        </div>
     );
}

export default Reply;