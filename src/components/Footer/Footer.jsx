import './Footer.scss'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {

    return (

        <Container className="footer">
            <Row className="block-footer">
                <span className="icon-github"><a className="link-github" href="https://github.com/sergiioss/" target="blank" >© Copyright 2023 - sergiioss</a></span>
                <Col className="block-links" xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    <span className="links-privacy">
                        <a className="link-github" href="/contacto" target="blank">Contacto</a>
                        <a className="link-github" href="/aviso-legal" target="blank">Aviso Legal</a>
                        <a className="link-github" href="/politica-de-privacidad" target="blank">Politica de Privacidad</a>
                        <a className="link-github" href="/politica-de-cookies" target="blank">Politica de Cookies</a>
                    </span>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer