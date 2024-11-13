import { Container, InputsContainer } from "./style";

import { useState } from "react";
import emailjs from '@emailjs/browser'






export function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendMail(e){
        e.preventDefault()

        if(name === "" || email === "" || message === ""){
            alert("preecha todos os campos")
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_unxeb19" , "template_yjme06b" , templateParams,"oIKVi5Xr6Nwf2eWjt")
        .then((res) =>{
            console.log("email enviado com sucesso")
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("ERROR" , err)
        })           
    }
    return(
        <Container>
            <h1>Contact</h1>
            <InputsContainer>
            <form onSubmit={sendMail}>
                <input 
                    className="input"
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                 />
        
                <input 
                    className="input"
                    type="text"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <textarea 
                    className="textarea"
                    placeholder="Digite sua mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <input className="btn"  type="submit" value="Enviar" />
            </form>

            </InputsContainer>
        </Container>
    )
}