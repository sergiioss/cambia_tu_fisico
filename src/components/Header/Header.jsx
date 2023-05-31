import './Header.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logoPagina from '../../Assets/images/logoPagina.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

    return (
        <Container className="header">
                <Col className="header-links">
                    <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                    <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                    <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    <Link className="icon-youtube" to="https://www.youtube.com/c/Cambiatufisicoweb"></Link>
                </Col>
                <Col className="header-img">
                    <Image src={logoPagina} className="header-img-logo"></Image>
                </Col>
                <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Entrenamiento" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/musculacion">
                                    Musculación
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/entrenamiento-alta-intensidad">
                                    Hit
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/principiantes">
                                    Principiantes
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicio-aerobico">
                                    Ejercicio Aerobico
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/culturistas">
                                    Culturistas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/estiramientos">
                                    Estiramientos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Por Músculo" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/abdominal">
                                    Abdominal
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/espalda">
                                    Espalda
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/biceps">
                                    Biceps
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/pecho">
                                    Pecho
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/pierna">
                                    Pierna
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/rotador">
                                    Rotador
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/hombro">
                                    Hombro
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/triceps">
                                    Triceps
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Rutinas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/rutinas-abdominal">
                                    Rutinas Abdominal
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/otras-rutinas">
                                    Otras Rutinas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/rutinas-principiantes">
                                    Rutinas Principiantes
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/rutinas-definicion">
                                    Rutinas Definicion
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/rutinas-fullbody">
                                    Rutinas FullBody
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/rutinas-en-casa">
                                    Rutinas en casa
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/rutinas-fuerza">
                                    Rutinas de Fuerza
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/rutinas-volumen">
                                    Rutinas de Volumen
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Entrenamiento" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/musculacion">
                                    Musculación
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/entrenamiento-alta-intensidad">
                                    Hit
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/principiantes">
                                    Principiantes
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicio-aerobico">
                                    Ejercicio Aerobico
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/culturistas">
                                    Culturistas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/estiramientos">
                                    Estiramientos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Entrenamiento" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/musculacion">
                                    Musculación
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/entrenamiento-alta-intensidad">
                                    Hit
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/principiantes">
                                    Principiantes
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicio-aerobico">
                                    Ejercicio Aerobico
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/culturistas">
                                    Culturistas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/estiramientos">
                                    Estiramientos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Entrenamiento" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/musculacion">
                                    Musculación
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/entrenamiento-alta-intensidad">
                                    Hit
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/principiantes">
                                    Principiantes
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicio-aerobico">
                                    Ejercicio Aerobico
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/culturistas">
                                    Culturistas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/estiramientos">
                                    Estiramientos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Entrenamiento" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/musculacion">
                                    Musculación
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/entrenamiento-alta-intensidad">
                                    Hit
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/principiantes">
                                    Principiantes
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicio-aerobico">
                                    Ejercicio Aerobico
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/culturistas">
                                    Culturistas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/estiramientos">
                                    Estiramientos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Entrenamiento" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/musculacion">
                                    Musculación
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/entrenamiento-alta-intensidad">
                                    Hit
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/principiantes">
                                    Principiantes
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicio-aerobico">
                                    Ejercicio Aerobico
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/culturistas">
                                    Culturistas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/estiramientos">
                                    Estiramientos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Entrenamiento" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/musculacion">
                                    Musculación
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/entrenamiento-alta-intensidad">
                                    Hit
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/principiantes">
                                    Principiantes
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicio-aerobico">
                                    Ejercicio Aerobico
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/culturistas">
                                    Culturistas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/estiramientos">
                                    Estiramientos
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    )
}

export default Header