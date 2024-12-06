import { Container, ResumeBtn, Subtext, Text, Title } from "./style";

import resume from '../../assets/resume.pdf'
import gsap from "gsap";
import { useLayoutEffect} from "react";






export function Banner(){
    useLayoutEffect(() =>{
        
        gsap.to(".container", {
            x:0,
            opacity:1,
            rotate:"0deg"
        })
    },[])
    
    return(
        <Container className="container">
            <Title>
               <h2>
                    Olá, meu nome é Gabriel
                </h2> 
            </Title>
            <Text>
                <h1>Eu crio sites.</h1>
                
            </Text>
            <Subtext>
                <p>
                    Oi, sou um desenvolvedor front-end apaixonado por criar websites envolventes. <br /> Adoro dar vida aos designs e criar experiências de usuário no Figma.
                </p>
                
            </Subtext>
            <ResumeBtn>
            <a href={resume} download="Resume">
                    <button>Download CV</button>

                </a>

            </ResumeBtn>
        </Container>
    )
}