import './Logo.css';
import logo from './logo.png'

function Logo(){
    return(
        <div className='logo'>
            <div className='img'>
                <img className='logoImg' src={logo} alt={"logo"}/>
                
            </div>
            <div className='txt'>
                <p className='open'>Open</p>
                <p className='logotxt'>Messenger</p> 
            </div>
        </div>
        
    );
}

export default Logo;