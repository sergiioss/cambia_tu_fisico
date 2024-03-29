import './Aside.scss';
import {Col, Row} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Aside = (props) =>{


    return(
        <Col className="block-aside" xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <Row className="titles-section">
                    <Row className="block-img-section">
                        <span className="title-section-words">PRODUCTOS RECOMENDADOS</span>
                        <Col className="block-img-title">
                            <Image className="img-aside" src="https://www.cambiatufisico.com/wp-content/uploads/comprar-proteinas-696x464.jpg.webp"></Image>
                            <h3 className="title-aside"><Link className="desplegable" onClick={props.onClick} to="/nutricion-proteinas">Batidos de proteínas, que son y cuales debemos comprar.</Link></h3>
                        </Col>
                        <Col className="block-img-title">
                            <Image className="img-aside" src="https://www.cambiatufisico.com/wp-content/uploads/rutina-de-hipertrofia-696x453.jpg"></Image>
                            <h3 className="title-aside"><Link className="desplegable" onClick={props.onClick} to="/otras-rutinas">Rutinas de hipertrofia</Link></h3>
                        </Col>
                        {/* ******************** OTRO BLOQUE ***************** */}
                        <span className="title-section-words">TENDENCIAS</span>
                        <Col className="block-img-title">
                            <Image className="img-aside" src="https://www.cambiatufisico.com/wp-content/uploads/equipamiento-para-entrenar-en-casa-696x464.jpeg"></Image>
                            <h3 className="title-aside"><Link className="desplegable" onClick={props.onClick} to="/rutinas-volumen">Rutina de hipertrofia total de 3 meses</Link></h3>
                        </Col>
                        <Col className="block-img-title">
                            <Image className="img-aside" src="https://www.cambiatufisico.com/wp-content/uploads/rutina-gimnasio-anual3-696x392.jpg"></Image>
                            <h3 className="title-aside"><Link className="desplegable" onClick={props.onClick} to="/rutinas-fullbody">Plan de entrenamiento de Gimnasio Anual</Link></h3>
                        </Col>
                        <Col className="block-img-title">
                            <Image className="img-aside" src="https://www.cambiatufisico.com/wp-content/uploads/rutina-volumen-arnold-696x392.jpg"></Image>
                            <h3 className="title-aside"><Link className="desplegable" onClick={props.onClick} to="/rutinas-volumen">Rutina de volumen de Arnold Schwarzenegger</Link></h3>
                        </Col>
                        <Col className="block-img-title">
                            <Image className="img-aside" src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-volumen2-696x392.jpg"></Image>
                            <h3 className="title-aside"><Link  className="desplegable" onClick={props.onClick} to="/dietas-masa-muscular">Rutinas de volumen para ganar masa muscular</Link></h3>
                        </Col>
                        <Col className="block-img-title">
                            <Image className="img-aside" src="https://www.cambiatufisico.com/wp-content/uploads/calculo-calorico1-696x392.jpg"></Image>
                            <h3 className="title-aside"><Link className="desplegable" onClick={props.onClick} to="/mujer-dietas-y-nutricion">Cálculo calórico para mantenimiento ✓</Link></h3>
                        </Col>
                    </Row>
            </Row>
        </Col>
    )
}

export default Aside