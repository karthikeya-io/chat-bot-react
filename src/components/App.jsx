import { useState } from 'react';
import classes from '../css/App.module.css'
import Chat from './Chat';


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div >
      <button onClick={handleClick} className={classes.openButton} >
        <i className="bi bi-robot "></i>
      </button>
      <div className={isOpen ? ` ${classes.chatDots} ` : `${classes.chatDots} ${classes.block}`}>
        <p>Hi! </p>
        <small>Here to Help!</small>
        {/* <i class="bi bi-chat-dots"></i> */}
      </div>
      <Chat isOpen={isOpen}></Chat>
    </div>
  );
}

export default App;
