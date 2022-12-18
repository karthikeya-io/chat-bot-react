import React, { useEffect, useRef, useState } from 'react'
import classes from '../css/Chat.module.css'
import Form from './Form';




const Chat = ({ isOpen }) => {

    const [formDetails, setFormDetails] = useState({ role: "user", msg: "" })
    const [messages, setMessages] = useState([{ role: "robo", msg: "Hello! I am robo8. Here to help! feel free to ask your questions" }])
    const bottomRef = useRef(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages])

    const changeHandler = (event) => {
        let name = event.target.name;
        setFormDetails((prev) => {
            return (
                {
                    ...prev,
                    [name]: event.target.value
                }
            )
        })
    }

    const formValidation = () => {
        if (formDetails.msg === "") {
            return false;
        }
        return true;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!formValidation()) {
            return false;
        }
        setMessages((prevArr) => [...prevArr, formDetails])
        setFormDetails({ role: "user", msg: "" });
        setTimeout(() => { setMessages((prevArr) => [...prevArr, { role: "robo", msg: "Hello! I am robo8. Here to help! feel free to ask your questions \n this is a test" }]); }, 500);


    }


    return (
        <div className={isOpen ? ` ${classes.chatPopup} ${classes.block}` : `${classes.chatPopup} `} >
            <div className={classes.chatWindow}>

                {
                    messages.map((msg, index) => {
                        return (
                            <div key={index} className={classes.msgDiv}>
                                <div className={msg.role === 'user' ? ` ${classes.userMsgDiv}` : `${classes.robotMsgDiv} `} >
                                    <p className={classes.userMsg}>{msg.msg}</p>
                                </div>
                            </div>
                        )

                    })
                }
                <div ref={bottomRef} />
            </div >
            <Form changeHandler={changeHandler} submitHandler={submitHandler} formDetails={formDetails}></Form>
        </div>
    )
}

export default Chat