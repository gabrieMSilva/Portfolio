import { Footer } from "../../Components/footer";
import { Header } from "../../Components/header";
import { CardsContent, Container, CardsContainer, Title } from "./style";
import bg from '../../assets/bg.png'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";






export function Projects(){

    useLayoutEffect(() => {
        gsap.to(".container",{
            x:0,
            opacity:1,
            rotate:"0deg"
        })
    } , [])

    return(
        <>
        <Header/>
            <Container className="container">
                <h1>Projetos</h1>
                <Title><h3>Cardapio Online</h3></Title>
                <CardsContainer>
                    <CardsContent>
                        <img src={bg} alt="background Images" />
                        <button><FaGithub color="#fff" size={18}/><Link to="https://github.com/gabrieMSilva">Codigo</Link></button>
                    </CardsContent>
                </CardsContainer>
            </Container>
        <Footer/>    
        </>
    )
}