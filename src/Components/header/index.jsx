import { Container, Menu, Text } from "./style";
import Profile from '../../assets/profile.jpg'
import {Link} from 'react-router-dom'




export function Header(){ 
    return(
        <Container>
            <Text>
                <img src={Profile} alt="Profile" />
                <h1>Gabriel Silva</h1>
            </Text>
            <Menu>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </Menu>
        </Container>
    )
}