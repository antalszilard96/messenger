import './Mid.css';
import Head from './head/Head';
import Messages from './messages/Messages';
import Reply from './replyfield/Reply';

function Mid () {
    return(
        <div className="mid">
            <Head />
            <Messages />
            <Reply />
        </div>
    );
}
export default Mid;