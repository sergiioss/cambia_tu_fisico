import './Header.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

const Header = () => {

    return (
        <Container className="header">
            <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
            <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
            <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
            <Link className="icon-youtube" to="https://www.youtube.com/c/Cambiatufisicoweb"></Link>
        </Container>
    )
}

export default Header