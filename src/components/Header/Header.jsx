import './Header.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logoPagina from '../../Assets/images/logoPagina.jpg';

const Header = () => {

    return (
        <Container className="header">
            <Row className="header-links">
                <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                <Link className="icon-youtube" to="https://www.youtube.com/c/Cambiatufisicoweb"></Link>
            </Row>
            <Row className="header-img">
                <Image src={logoPagina}></Image>
            </Row>
        </Container>
    )
}

export default Header