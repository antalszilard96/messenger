import './Right.css';
import { GrStatusGoodSmall } from "@react-icons/all-files/gr/GrStatusGoodSmall";
import Members from './peoples.json'

function Right () {

    

    
    return(
        <div className='right'>
            <div className='details'>
                <img className='chatimg' src="imgs/chat.png" alt={"img"}/>
            </div>
            <p className='chatName'>People</p>
            <div className='poplesPart'>
                {
                    Members.map(member => {
                        return(
                            <div className='memberImg' key={member.id}>
                                <img src={member.img} alt={'img'}/>
                                <GrStatusGoodSmall className='status-icon-members'/>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
}
export default Right;