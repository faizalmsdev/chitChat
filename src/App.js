
import { useState,useRef } from 'react';
import './App.css';
import { Auth } from './Components/Auth';
import Cookies from 'universal-cookie' //to constantly have the login token id
import { Chat } from './Components/Chat';
const cookies = new Cookies();

function App() {
  const [isAuth,setIsAuth] = useState(cookies.get("auth-token"));
  const [room,setRoom] = useState(null);

  const roomInputRef = useRef(null); 

  if(!isAuth ){
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <div> <Chat /> </div>
        ) : (
          <div className='room'> 
            <label>Enter Room Name:</label>
            <input ref={roomInputRef}/>
            <button onClick={()=> setRoom(roomInputRef.current.value)}>Start Chit</button>
          </div>
        )}
    </div>
  );
  
}

export default App;
