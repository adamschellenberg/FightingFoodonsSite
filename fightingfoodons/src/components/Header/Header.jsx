import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Logo from '../../assets/images/fighting-foodons-logo.png';

export const Header = () => {

    return (
        <div className="header">
            <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark">
                    <Navbar.Brand href="/" className="mx-3 logo"><img src={Logo} className="logoImg" alt="Fighting Foodons Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="mx-5">
                            <Nav.Item>
                                <Nav.Link href="/manga">Manga</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/anime">Anime</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/games">Games</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link href="/characters">Characters</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}