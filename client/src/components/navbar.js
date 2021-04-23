import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavbarComp(){
    
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Will's Blog</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/category/nba">NBA</Nav.Link>
                    <Nav.Link href="/category/nfl">NFL</Nav.Link>
                    <Nav.Link href="/category/tv">TV</Nav.Link>
                    <Nav.Link href="/category/books">Books</Nav.Link>
                    <Nav.Link href="/category/movies">Movies</Nav.Link>
                    <Nav.Link href="/category/anime">Anime</Nav.Link>
                    <Nav.Link href="/category/gaming">Gaming</Nav.Link>
                    <Nav.Link href="/category/ramblings">Ramblings</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComp;