import { Container, ContainerLinks, Items } from "./style";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom'





export function Footer(){
    return(
        <Container>
            <ContainerLinks>
                <Items>
                    <Link to="https://github.com/gabrieMSilva">
                        <FaGithub color="#fff" size={32}/>
                    </Link>
                    <Link to="www.linkedin.com/in/gabriel-silva-miranda-a2aa48233">
                        <FaLinkedin color="#fff" size={32}/>
                    </Link>
                </Items>
                <h3>Feito Por Gabriel Silva</h3>
            </ContainerLinks>
        </Container>
    )
}