import Image from 'react-bootstrap/Image'
import './Inicio.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const Inicio = () => {

    return (

        <Container className="inicio">
            <Row className="block-images">
                <Col className="first-image">
                    <Image className="img-fluid" src="https://www.cambiatufisico.com/wp-content/uploads/rutina-de-hipertrofia-696x453.jpg"></Image>
                    <a href="google.com" className="subtitle" target="blank">Batidos de proteínas, que son y cuales debemos comprar</a>
                </Col>
                <Col className="second-image">
                    <Image className="img-fluid" src="https://www.cambiatufisico.com/wp-content/uploads/rutina-gimnasio-anual3-696x392.jpg.webp"></Image>
                    <a href="google.com" className="subtitle" target="blank">Batidos de proteínas, que son y cuales debemos comprar</a>
                </Col>
                <Col className="third-image">
                    <Image className="img-fluid" src="https://www.cambiatufisico.com/wp-content/uploads/comprar-proteinas-696x464.jpg.webp"/>
                    <a href="google.com" className="subtitle" target="blank">Batidos de proteínas, que son y cuales debemos comprar</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Inicio