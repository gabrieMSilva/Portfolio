import { Container, Text } from "./style";
import {Header} from '../../Components/header'
import {Footer} from '../../Components/footer'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";






export function About(){

    useLayoutEffect(()=> {
        gsap.to(".container",{
            x:0,
            opacity:1,
            rotate:"0deg"
        })

    },[])
    return(
        <>
        <Header/>
        <Container className="container">   
            <Text>
                <h1>Hello World</h1>
                <h3>Sobre Mim</h3>
                <p>Sou um desenvolvedor de software júnior com uma paixão genuína por resolver problemas e uma abordagem colaborativa que prioriza o trabalho em equipe. Tenho um forte compromisso com a melhoria contínua, buscando sempre inovar e desenvolver soluções que superem as expectativas. Minha experiência prática abrange as principais tecnologias do desenvolvimento web, incluindo HTML, CSS, JavaScript, React.js, Next.js, Node.js e TypeScript.</p> 
                <br />
                <p>Além de conhecimentos técnicos, sou focado em promover eficiência e otimização de processos, visando tanto a redução de custos quanto a entrega de produtos de alta qualidade. Gosto de aprender novas tecnologias de maneira prática e aplicá-las em projetos reais para aperfeiçoar minhas habilidades. Acredito que um bom desenvolvedor não apenas escreve código, mas também entende como ele impacta o usuário e o negócio.</p>
                <h3>Experiencia Profissional</h3>
                <p>Tenho experiência em desenvolvimento web por meio de freelances e projetos complexos que me permitiram aplicar e expandir minhas habilidades técnicas em situações reais. Durante esses projetos, fui responsável por planejar, desenvolver e implementar soluções completas, desde o design até a funcionalidade, atendendo às necessidades dos clientes e garantindo um produto final que entregasse valor e alta qualidade.</p>
                <h3>Educaçao</h3>
                <p>Atualmente, estou no quarto período do curso de Análise e Desenvolvimento de Sistemas na UNINASSAU, onde adquiro conhecimento teórico e prático sobre desenvolvimento de software, arquitetura de sistemas e banco de dados. Além disso, tenho o ensino médio completo e inglês intermediário, o que me permite compreender e me comunicar em um ambiente de desenvolvimento globalizado.</p>
            </Text>
        </Container>
        <Footer/>
        </>
    )
}