import './Header.scss'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logoPagina from '../../Assets/images/logoPagina.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Desplegable from './Desplegable';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton';
import DesplegableMobile from './DesplegableMobile';

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row className="header">
            <Col className="header-links">
                <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                <Link className="icon-youtube" to="https://www.youtube.com/c/Cambiatufisicoweb"></Link>
            </Col>
            <Col className="header-img">
                <Image src={logoPagina} className="header-img-logo"></Image>
            </Col>
            <Navbar expand="md">
                <Container className="container-navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow}/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Desplegable styles={["nivel1","nivel2"]}></Desplegable>
                                <span className="icon-search"></span>
                            </Nav>
                        </Navbar.Collapse>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Body>
                                <Row className="block-header-accordion">
                                    <Col className="header-links-mobile">
                                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                                        <Link className="icon-youtube" to="https://www.youtube.com/c/Cambiatufisicoweb"></Link>
                                    </Col>
                                    <Col className="cancel-button" onClick={handleClose}>
                                        <CloseButton variant="white"/>
                                    </Col>
                                </Row>
                                <DesplegableMobile onClick={handleClose}></DesplegableMobile>
                            </Offcanvas.Body>
                        </Offcanvas>
                </Container>
            </Navbar>
        </Row>
    )
}

export default Header