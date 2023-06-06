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
            <Row className="routines-gym">
                <span className="title-routines-gym">RUTINAS DE GIMNASIO EFECTIVAS</span>
                <p>
                    En cambiatufisico.com estamos especializados en rutinas de gimnasio y en técnicas de musculación tanto para principiantes que se    acaban de apuntar al gimnasio como para los más avanzados. 
                </p>
                <p>
                    Las rutinas de gimnasio no solo se pueden realizar en un centro de Fitness, también puedes realizarlas en tu casa, por eso tenemos además una completa selección de rutinas de pesas para hacer en casa.
                </p>
            </Row>
        </Container>
    )
}

export default Inicio