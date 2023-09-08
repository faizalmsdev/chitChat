import {auth , provider} from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';//its for sign in popup

import Cookies from 'universal-cookie' //to constantly have the login token id
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

    return <div className="auth">
        <p>Sign In With Google To Continue</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
}