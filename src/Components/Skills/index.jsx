import { Cards } from "../Cards";
import { Container, ContainerCards } from "./style";
import {FaReact, FaNodeJs} from 'react-icons/fa'
import { RiNextjsFill , RiTailwindCssFill  } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";


export function Skills(){
    return(
        <Container>
            <h1>Skills</h1>
            <ContainerCards>
                <Cards name="React JS" icon={<FaReact color="#fff" size={32}/>}/>
                <Cards name="Node JS" icon={<FaNodeJs color="#fff" size={32}/>}/>
                <Cards name="Next JS" icon={<RiNextjsFill color="#fff" size={32} />}/>
                <Cards name="TypeScript" icon={<SiTypescript color="#fff" size={32}/>}/>
                <Cards name="Tailwind CSS" icon={<RiTailwindCssFill color="#fff" size={32}/>}/>
                <Cards name="JavaScript" icon={<IoLogoJavascript color="#fff" size={32}/>}/>
                

            </ContainerCards>
        </Container>
    )
}