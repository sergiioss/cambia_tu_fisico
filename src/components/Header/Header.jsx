import './Header.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
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
                            <div id="menu">
                                <ul>
                                    <li className="nivel1"><span href="#" className="nivel1">Entrenamiento</span>
                                        <ul className="nivel2">
                                            <li><a href="/musculacion">Musculación</a></li>
                                            <li><a href="#">Menú 1.2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* <NavDropdown title="Entrenamiento" id="basic-nav-dropdown">
                                        <NavDropdown.Item id="example-collapse-text" href="/musculacion">
                                            Musculación
                                        </NavDropdown.Item>
                                        <NavDropdown.Item id="example-collapse-text" href="/entrenamiento-alta-intensidad">
                                            Hit
                                        </NavDropdown.Item>
                                        <NavDropdown.Item id="example-collapse-text" href="/principiantes">
                                            Principiantes
                                        </NavDropdown.Item>
                                        <NavDropdown.Item id="example-collapse-text" href="/ejercicio-aerobico">
                                            Ejercicio Aerobico
                                        </NavDropdown.Item>
                                        <NavDropdown.Item id="example-collapse-text" href="/culturistas">
                                            Culturistas
                                        </NavDropdown.Item>
                                        <NavDropdown.Item id="example-collapse-text" href="/estiramientos">
                                            Estiramientos
                                        </NavDropdown.Item>
                            </NavDropdown> */}
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
                                    Rutinas en Casa
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/rutinas-fuerza">
                                    Rutinas de Fuerza
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/rutinas-volumen">
                                    Rutinas de Volumen
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/otras-rutinas">
                                    Otras Rutinas
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Ejercicios" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/ejercicios-abdominal">
                                    Ejercicios Abdominal
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-espalda">
                                    Ejercicios de Espalda
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-basicos">
                                    Ejercicios Basicos
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-biceps">
                                    Ejercicios de Biceps
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-pecho">
                                    Ejercicios de Pecho
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-bandas-elasticas">
                                    Ejercicios con Bandas Elasticas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-antebrazo">
                                    Ejercicios Antebrazo
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-pierna">
                                    Ejercicios de Pierna
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-hombro">
                                    Ejercicios de Hombro
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-rotador-hombro">
                                    Ejercicios de Rotador de Hombro
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-trapecio">
                                    Ejercicios de Trapecio
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/ejercicios-triceps">
                                    Ejercicios de Triceps
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Nutricion" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/nutricion-culturista">
                                    Nutrición Culturista
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/nutricion-y-vida-saludable">
                                    Nutricion y Vida Saludable
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/nutricion-carbohidratos">
                                    Carbohidratos
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/nutricion-grasas">
                                    Grasas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/nutricion-proteinas">
                                    Proteinas
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Suplementos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/suplementos-como-suplementarse">
                                    Como Suplementarse
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/suplementos-vitaminas-y-minerales">
                                    Vitaminas y minerales
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/suplementos-aminoacidos">
                                    Aminoácidos
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/suplementos-cafeina">
                                    Cafeína
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/suplementos-creatina">
                                    Creatina
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/suplementos-glutamina">
                                    Glutamina
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/suplementos-proteinas">
                                    Proteínas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/suplementos-comprar-proteinas">
                                    Comprar Proteínas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/suplementos-otros">
                                    Otros Suplementos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Dietas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/dietas-masa-muscular">
                                    Masa Muscular
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/dietas-definicion-muscular">
                                    Definicion Muscular
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Mujer" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/mujer-dietas-y-nutricion">
                                    Dietas y nutrición
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/mujer-pesas-y-entrenamientos">
                                    Pesas y Entramientos
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/mujer-rutinas">
                                    Rutinas
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Objetivos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/objetivo-quemar-grasa">
                                    Quemar Grasa
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/objetivo-ganar-masa-muscular">
                                    Ganar Masa Muscular
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/objetivo-ganar-peso">
                                    Ganar Peso
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/objetivo-perder-peso">
                                    Perder Peso
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/objetivo-definicion-muscular">
                                    Definición Muscular
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    <span className="icon-search"></span>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    )
}

export default Header