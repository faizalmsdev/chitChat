
import { useState,useRef } from 'react';
import './App.css';
import { Auth } from './Components/Auth';
import Cookies from 'universal-cookie' //to constantly have the login token id
import { Chat } from './Components/Chat';
import { signOut } from 'firebase/auth';
import {auth} from './firebase-config'

const cookies = new Cookies();

function App() {
  const [isAuth,setIsAuth] = useState(cookies.get("auth-token"));
  const [room,setRoom] = useState(null);
  
  const signUserOut =async ()=>{
    await auth.signOut();
    cookies.remove("auth-token")
    setIsAuth(false);
    setRoom(null);
  }

  const roomInputRef = useRef(null); 

  if(!isAuth ){
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  return (
    <>
      {room ? (
        <div > <Chat room={room} /> </div>
        ) : (
          <div className='room'> 
            <label>Enter Room Name:</label>
            <input ref={roomInputRef}/>
            <button onClick={()=> setRoom(roomInputRef.current.value)}>Start Chit</button>
          </div>
        )}
        <div className='sign-out'>
          <button onClick={signUserOut}>Sign Out</button>
        </div>
    </>
  );
  
}

export default App;
