import React, { useContext } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../AuthProviders/AuthProviders';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => { console.error(error) })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="info">
            <Container>
                <Navbar.Brand className='fw-bolder' href="#home">Bangla Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto menu">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/blogs'>Blogs</ActiveLink>
                        <ActiveLink to='/profile'>Profile</ActiveLink>
                    </Nav>
                    <Nav className='d-flex align-items-center user-info'>
                        <Link to='/profile'>{user && <img src={user?.photoURL} alt="" />}</Link>
                        {/* <span className='me-3'>{user?.email || user?.displayName}</span> */}
                        {
                            user ?
                                <small>
                                    <Button variant="outline-primary" onClick={handleLogout}>Logout</Button>
                                </small>
                                : <small>
                                    <Button variant="outline-primary"><Link to='/signup'>Sign Up</Link></Button>
                                    <Button variant="outline-primary ms-2"><Link to='/login'>Login</Link></Button>
                                </small>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;