import { useEffect, useState } from "react";
import {addDoc, collection, serverTimestamp,onSnapshot,query,where, orderBy} from 'firebase/firestore'
import {auth , db } from "../firebase-config";
import '../styles/Chat.css';

export const Chat =(props)=>{
    const room = props.room;
    const [newMessage,setNewMessage] = useState("");

    const messagesRef = collection(db,"messages");

    const [messages,setMessages] = useState([]);

    useEffect(()=>{
        const queryMessages = query(messagesRef,where ("room","==",room),orderBy("createdAt"));
        const unSubScribe = onSnapshot(queryMessages,(snapShot)=>{
            let messages = [];
            snapShot.forEach((doc)=>{
                messages.push({...doc.data(), id:doc.id});
            });
            setMessages(messages);
            console.log(room);
        });

        return () => unSubScribe();
    },[])

    const handleSubmit =async (e)=>{
        e.preventDefault();
        if(newMessage === "")return;

        await addDoc(messagesRef,{
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });

        setNewMessage("")
        setMessages([...messages, {text: newMessage, user: auth.currentUser.displayName, id: Date.now()}]);

    }

    return (
    <div className="chat-app">
        <div className="header">
            <h1> Welcome to: {room.toUpperCase()}</h1>
        </div>
            <div className="messages">
                {messages.map((message) => (
                    <div className="message" key={message.id}>
                        <span className="user">{message.user}</span>
                        {message.text}
                    </div>
                    
                ))}
            </div>
            <form className="new-message-form" onSubmit={handleSubmit}>
                <input type="text" className="new-message-input" placeholder="Type your message" onChange={(e)=> setNewMessage(e.target.value)} value={newMessage}/>
                <button className="send-button" type="submit">Send</button>
            </form>
    </div>
);}