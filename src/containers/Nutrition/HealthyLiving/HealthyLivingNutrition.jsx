import './HealthyLivingNutrition.scss'
import {Col, Row, Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const HealthyLivingNutrition = () => {

    return (

        <Container className="healthyLiving-nutrition-training">
            <Row className="first-section-healthyLiving-nutrition">
            <Breadcrumb></Breadcrumb>
                <Col className="body-healthyLiving-nutrition-training-main" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>NUTRICIÓN Y VIDA SALUDABLE</h1>
                    <i>
                    <p>
                        A veces la alimentación de los practicantes avanzados de musculación no es 100% saludable. Los culturistas llevan sus cuerpos al <strong>límite</strong> y en ocasiones tienen que introducir cambios drásticos en sus macros.
                    </p>
                    <p>
                        En nuestra sección de <strong>alimentación y vida saludable</strong> descubrirás como salud y objetivos pueden ir de la mano.
                    </p>
                    </i>
                    <Row className="icons-healthyLiving-nutrition" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Row className="double-img-healthyLiving">
                        <Row className="img-healthyLiving-nutrition">
                            <a className="img-fluid" href="https://www.google.com/"><Image className="image-healthyLiving" src="https://www.cambiatufisico.com/wp-content/uploads/verduras-hortalizas-696x423.jpg"></Image></a>
                        </Row>
                        <Row className="img-healthyLiving-nutrition">
                            <a className="img-fluid" href="https://www.google.com/"><Image className="image-healthyLiving" src="https://www.cambiatufisico.com/wp-content/uploads/alimentos-masa-muscular-696x464.jpg"></Image></a>
                        </Row>
                    </Row>
                </Col>
                <Col className="body-healthyLiving-nutrition-training">
                    <section>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/dieta-vegetariana-adelgazar-696x465.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Dieta vegetariana para adelgazar sin pasar hambre</h3>
                                <p>
                                    Existen muchos mitos o creencias sobre lo saludable y placentero que puede llegar a ser una dieta vegetariana. Muchos piensan que seguir una dieta vegetariana es sinónimo de pasar hambre y comer solo lechuga....
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/comer-limpio-696x464.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Comer limpio, como conseguirlo de forma fácil</h3>
                                <p>
                                    Es posible que hagas ejercicio desde hace tiempo, hayas invertido en ropa deportiva avanzada, en un reloj inteligente que te monitoriza hasta las veces que pestañeas e incluso puede que hayas empezado a tomar...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/pan-de-wasa-696x486.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Pan de Wasa | Principales beneficios y Nutrientes</h3>
                                <p>
                                    El Pan de Wasa es un tipo de pan fino, ligero y tostado en forma de láminas no muy gruesas con diferentes tipos de semillas y granos. Su crujiente y agradable sabor lo hace muy...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/huevos-dieta-colesterol-696x334.jpg.webp"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Huevos, un poderoso alimento para tu dieta</h3>
                                <p>
                                    Los huevos son un alimento muy rico en proteinas y en nutrientes. El consumo de un alimento como el huevo, tan rico en proteínas, nos puede ayudar con nuestro objetivo de ganar masa muscular. Las claras...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/dolor-de-espalda-696x464.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Dolor de espalda, consejos para prevenirlo y curarlo</h3>
                                <p>
                                    Según las estadísticas las 3/4 partes de la población han padecido alguna vez un episodio de dolor de espalda intenso. El dolor de espalda aparece, en la mayoría de los casos, como el resultado de...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/carbohidratos-4-696x502.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Carbohidratos, como dominar el combustible de tus músculos</h3>
                                <p>
                                    Los hidratos de carbono (HC), también denominados glúcidos, carbohidratos o, vulgarmente, azúcares, están considerados como la fuente de energía preferida por el organismo humano, tanto para las actividades físicas como mentales. Un fallo muy habitual...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/ginecomastia-1-696x464.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Ginecomastia, lo que debes saber</h3>
                                <p>
                                    La ginecomastia es una acumulación de grasa, mas o menos discreta, que se localiza de forma uni o bilateral, en la zona retro areolar del pecho de las personas de sexo masculino (niños, adolescentes, adultos…). Se trata...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/hidratacion-muscular-696x392.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">La mejor hidratación para el entrenamiento</h3>
                                <p>
                                    El agua es, sin lugar a dudas, la sustancia nutritiva más importante, constituyendo alrededor del 60% del peso corporal total, de manera que casi podríamos afirmar que “somos agua”. Mientras que podemos aguantar sin comer...
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

export default HealthyLivingNutrition