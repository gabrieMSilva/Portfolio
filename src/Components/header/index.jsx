import { useState } from "react";
import { Container, Text, Menu, HamburgerButton, MenuItems } from "./style";
import Profile from "../../assets/Profile.jpeg";
import { Link } from "react-router-dom";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const closeMenu = () => setMenuOpen(false);

    return (
        <Container>
            <Text>
                <img src={Profile} alt="Profile" />
                <h1>Gabriel Silva</h1>
            </Text>
            <HamburgerButton onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </HamburgerButton>
            <Menu open={menuOpen}>
                <MenuItems>
                    <li>
                        <Link to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>About</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={closeMenu}>Projects</Link>
                    </li>
                </MenuItems>
            </Menu>
        </Container>
    );
}
