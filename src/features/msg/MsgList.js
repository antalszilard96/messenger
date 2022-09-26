import { useSelector } from "react-redux";
import { selectAllMsgs } from "./msgSlice";
import './MsgList.css'
//import TimeAgo from "./TimeAgo";

const MsgList = () => {
const msgs = useSelector(selectAllMsgs)

const renderedMsgs = msgs?.map(msg => (
    
    <div key={msg.id} className={msg.my}  >
        <div className="senderImg" >
            <img className="profileImg" alt={'img'} src={msg.img} />
        </div>
        <div className="msg" >
            <p className="msgText">{msg.message}</p>
        </div>
       
    </div>
))

  return (
    
    <div style={{ background: "#f9fafc"}}>
        {renderedMsgs}
    </div>
  )
}

export default MsgList