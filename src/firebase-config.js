    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import {getAuth,GoogleAuthProvider} from 'firebase/auth'; //used to add google authentication
    // import { getAnalytics } from "firebase/analytics";
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyC0IXGPFBsfi7kJWUkkk2PcVGpb58wPlvU",
    authDomain: "chitchat-d5d1e.firebaseapp.com",
    projectId: "chitchat-d5d1e",
    storageBucket: "chitchat-d5d1e.appspot.com",
    messagingSenderId: "1053844021279",
    appId: "1:1053844021279:web:01df3e65baf953c7b1752a",
    measurementId: "G-X7NVQGQY03"
    };

    // Initialize Firebase
        // const analytics = getAnalytics(app);
    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);//it can be used to add authentication
    export const provider = new GoogleAuthProvider();//it can provide google sign in
