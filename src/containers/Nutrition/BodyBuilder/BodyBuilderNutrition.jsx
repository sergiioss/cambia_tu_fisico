import './BodyBuilderNutrition.scss'
import {Col, Row, Container, Button} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'


const BodyBuilderNutrition = () => {

    return (

        <Container className="bodyBuilder-nutrition-training">
            <Row className="first-section-bodyBuilder-nutrition">
            <Breadcrumb></Breadcrumb>
                <Col className="body-bodyBuilder-nutrition-training-main" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>NUTRICIÓN CULTURISTA</h1>
                    <i>
                    <p>
                        La nutrición culturista es una rama especializada de la nutrición deportiva encargada de proporcionar las mayores prestaciones a los atletas que practican la musculación (denominada también culturismo), la halterofilia, el powerlifting y el atletismo de fuerza (strongman), todos estos atletas tienen en común su entrenamiento con pesas.
                    </p>
                    <p>
                        Por regla general el objetivo de un atleta de culturismo es poder obtener una gran masa muscular debido a la intensidad del entrenamiento y un bajo porcentaje de grasa corporal para poder obtener una buena definición muscular.
                    </p>
                    </i>
                    <Row className="icons-bodyBuilder-nutrition" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Row className="double-img-bodyBuilder">
                        <Row className="img-bodyBuilder-nutrition">
                            <a className="img-fluid" href="https://www.google.com/"><Image className="image-bodyBuilder" src="https://www.cambiatufisico.com/wp-content/uploads/cbd-deportistas-696x464.jpg"></Image></a>
                        </Row>
                        <Row className="img-bodyBuilder-nutrition">
                            <a className="img-fluid" href="https://www.google.com/"><Image className="image-bodyBuilder" src="https://www.cambiatufisico.com/wp-content/uploads/embutidos-gimnasio-696x449.png"></Image></a>
                        </Row>
                    </Row>
                </Col>
                <Col className="body-bodyBuilder-nutrition-training">
                    <section>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/perder-peso-2-324x235.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Quieres perder grasa, no solo perder peso. Aquí te enseñamos como.</h3>
                                <p>
                                    La verdad es que cuando la gente dice genéricamente que quiere perder peso, no se está refiriendo a reducir su masa corporal sin más, sino que implícitamente se refiere a perder grasa corporal y...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/boniatos-propiedades-1-696x464.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Boniato, ¿Un buen carbohidrato?</h3>
                                <p>
                                    Los culturistas y practicantes de fitness necesitan una buena cantidad de hidratos de carbono en sus dietas, porque este nutriente no únicamente es el que proporciona la energía para llevar a cabo sesiones duras de entrenamiento, sino que en...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/proteinas-deportistas-696x392.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Necesitas más proteínas si haces deporte, ¡Descubre cuantas!</h3>
                                <p>
                                 Aunque siempre se ha dicho que los deportistas necesitan un mayor aporte de proteínas, de vez en cuando aparece el típico "gurú" del entrenamiento proclamando completamente lo contrario mientras flexiona sus enormes músculos conseguidos no...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/huevos-dieta-colesterol-696x334.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Huevos, un poderoso alimento para tu dieta</h3>
                                <p>
                                    Los huevos son un alimento muy rico en proteinas y en nutrientes. El consumo de un alimento como el huevo, tan rico en proteínas, nos puede ayudar con nuestro objetivo de ganar masa muscular. Las claras...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/carbohidratos-4-696x502.jpg.webp"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Carbohidratos, como dominar el combustible de tus músculos</h3>
                                <p>
                                    Los hidratos de carbono (HC), también denominados glúcidos, carbohidratos o, vulgarmente, azúcares, están considerados como la fuente de energía preferida por el organismo humano, tanto para las actividades físicas como mentales. Un fallo muy habitual...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/pan-y-musculos-696x392.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Pan y músculos</h3>
                                <p>
                                    Arnold enlazo una vez el pan blanco con la muerte blanca y desde entonces los culturistas han sentido una relación de amor-odio con este elemento fundamental. La creciente popularidad de las dietas bajas en carbohidratos...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                    </section>
                </Col>
                <Aside className="aside padding-rigth"/>  
            </Row>
        </Container>
    )
}

export default BodyBuilderNutrition