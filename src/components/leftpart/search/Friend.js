import './Friend.css'

import { GrStatusGoodSmall } from "@react-icons/all-files/gr/GrStatusGoodSmall";

let iconStyle;
const Friend = ({ friend }) => {

if(friend.status === 1 ){
  iconStyle = {
    color: "#76c00d"
};
}else if(friend.status === 2){
  iconStyle = {
    color: "#ffbd08"
};
}else{
  iconStyle = {
    color: "#afbbc6"
};
}

  return (
    <div className='friend-card'>
        <div className='friend-img'>
            <img alt={'img'} src={friend.img} className='profile-img'/>
            <GrStatusGoodSmall className='status-icon' style={iconStyle}/>
        </div>
        <div className='friend-data'>
            <p className='name' >{friend.name}</p>
            <p className='msgg' >{friend.lastmsg}</p>
        </div>
        <div className="time">             
            <p className='lasttime'>{friend.lasttime}</p>
        </div>
    </div>
  )
  }

export default Friend

