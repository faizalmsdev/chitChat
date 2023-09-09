import {auth , provider} from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';//its for sign in popup
import '../styles/Auth.css'

import Cookies from 'universal-cookie' //to constantly have the login token id

import dp from "../Components/images/dp.png"
const cookies = new Cookies();

export const Auth =(props) =>{
    const {setIsAuth}=props

    const signInWithGoogle = async ()=>{
        try{
        const result = await signInWithPopup(auth,provider);
        cookies.set("auth-token",result.user.refreshToken);
        setIsAuth(true);
    }catch(err){
        console.log('error', err)   
    }
}

    return (
        <div className="auth-container">
            
            <h1>Welcome to ChitChat</h1>
            <p>Perfect Spot to Chat about gossips.</p>
            <button onClick={signInWithGoogle} className="login-with-google-btn">
                Sign In With Google
            </button>
            <img src={dp} alt="profile" id='dp'/>
        </div>
    )
}