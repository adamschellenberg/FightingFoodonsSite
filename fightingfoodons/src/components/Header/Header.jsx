import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

export const Header = () => {

    return (
        <div className="header">
            <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Fighting Foodons logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="/manga">Manga</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/anime">Anime</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/games">Games</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/characters">Characters</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}