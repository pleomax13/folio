import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import './css/Header.css';

class Header extends React.Component {
    render() {
        return(
            <>
            <header className = 'mx-auto header'>
                <Container className='tag'>
                    <h1>.FOLIO</h1>
                    <h1>PHOTO</h1>
                    <h1>IT'S</h1>
                    <h1>OUR LIFE</h1>
                    <h3>-------------------------</h3>
                </Container>
            </header>
            <NavBar/>
            </>
        );
    }
}

export default Header;